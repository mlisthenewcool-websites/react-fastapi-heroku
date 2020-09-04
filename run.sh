#!/bin/bash

# ==============================================================================
# Standard bash script argparse
# ==============================================================================

# ==============================================================================
# 1) Functions & helpers
# ==============================================================================

CLEAR='\033[0m'
GREEN='\033[0;32m'
RED='\033[0;31m'

function messageError() {
    echo -e "${RED}👉 $1 ${CLEAR}\n"
}

function messageSuccess() {
	echo -e "${GREEN}👉 $1 ${CLEAR}\n"
}

function dirExistsOrExecFunc() {
	if [ ! -d "$1" ]; then
		messageSuccess "$1 doesn't exist, create it ..."
		$2 $1
	else
		messageSuccess "$1 does exist."
	fi
}


# define a function to print usage to user
function usage() {
  if [ -n "$1" ]; then
    messageError "$1";
  fi
  echo "Usage: $0"
  echo ""
  echo "  -a, --api       Execute script for frontend."
  echo "  -c, --client    Execute script for backend."
  echo "  -i, --init      Create the according file structure."
  echo "  -f, --format    Format code using black (api) or prettier (client)."
  echo "  -l, --lint      Lint code using pylint (api) or eslint (client)."
  echo "  -d, --deploy    Deploy using docker (api) or github hook (client)."
  echo ""
  echo "Example: $0 -a -f @filenameFormat -l @filenameLint"
  echo ""
  exit 1
}

# ==============================================================================
# 2) Start doing the job
# ==============================================================================

# exit if not param supplied
if [[ $# -eq 0 ]] ; then
	usage "No parameters supplied"
    exit 1
fi


# parse params
ACTION=0
while [[ "$#" -gt 0 ]]; do case $1 in
	-a|--api)    ACTION=1; shift;;
    -c|--client) ACTION=2; shift;;
	-i|--init)   INIT=1; shift;;
	-f|--format) FORMAT=1 FORMAT_FILE=$2; shift;shift;;
	-l|--lint)   LINT=1 LINT_FILE=$2; shift;shift;;
    -d|--deploy) DEPLOY=1; shift;;
    -s|--start)  START=1; shift;;
	*) usage "Unknown parameter passed: $1"; shift;shift;;
esac; done


if [ $ACTION -eq 0 ]; then
    messageError "You must chose a folder to work on. Either --api or --client."
    exit 1
fi

# API
if [ $ACTION -eq 1 ]; then
    cd api
    if [ -n "${INIT}" ]; then
        rm -r venv
        dirExistsOrExecFunc "venv" "virtualenv"
        messageSuccess "Update pip & install dependencies from requirements.txt ..."
        venv/bin/python -m pip install --upgrade pip
        venv/bin/pip install pytest pylint black mypy click 
        venv/bin/pip install fastapi uvicorn python-jose passlib pydantic python-multipart aiofiles
        # venv/bin/pip install -r api/scripts/requirements.txt
    fi

    if [ -n "${FORMAT}" ]; then
        if [ -z "${FORMAT_FILE}" ]; then 
            usage "You must define a file or directory to format";
        else
            venv/bin/black "${FORMAT_FILE}"
        fi
    fi

    if [ -n "${LINT}" ]; then
        if [ -z "${LINT_FILE}" ]; then 
            usage "You must define a file or directory to lint";
        else
            venv/bin/pylint "${LINT_FILE}"
        fi
    fi

    if [ -n "${DEPLOY}" ]; then
        HEROKU_APP_NAME="fastapi-ml"
        venv/bin/pip freeze > scripts/requirements.txt
        docker build -t "registry.heroku.com/$HEROKU_APP_NAME/web" .
        docker push "registry.heroku.com/$HEROKU_APP_NAME/web"
        heroku container:release --app "$HEROKU_APP_NAME" web
    fi

    if [ -n "${START}" ]; then
        venv/bin/uvicorn main:app --host=0.0.0.0 --port="${PORT:-5050}"
    fi
fi

# CLIENT
if [ $ACTION -eq 2 ]; then
    cd client
    if [ -n "${INIT}" ]; then
        yarn build
    fi

    if [ -n "${FORMAT}" ]; then
        yarn format
    fi

    if [ -n "${LINT}" ]; then
        yarn lint:fix
    fi

    if [ -n "${DEPLOY}" ]; then
        git add . && git commit -am "Deploying react" && git push
    fi

    if [ -n "${START}" ]; then
        yarn start
    fi
fi