# Before to start

## Core used libraries

* [FastAPI](https://github.com/tiangolo/fastapi)
* [ReactJS](https://reactjs.org/)

## Some tutorials

* https://mherman.org/presentations/microservices-flask-docker/#1

## Go !

* create file structure
```
mkdir @project_name
cd @project_name
```

* create backend, and install Flask
```
mkdir @api && cd @api
virtualenv @venv
source @venv/bin/activate
pip install flask
```

* create frontend and install ReactJS
```
cd ..
yarn create react-app @client
```

# Frontend

## Libraries used

* https://github.com/rexxars/react-markdown

## 

## Yarn usage

* https://yarnpkg.com/getting-started/usage
* basic scripts available
    * `yarn start`
    * `yarn test`
    * `yarn build`
    * `yarn eject`
* basic usage
    * `yarn` or `yarn install`
    * `yarn add @package_name`
    * `yarn remove @package_name`
    * `yarn upgrade-interactive --latest`

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web Routes

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# Backend


# Security

## Backend : Talisman

* https://github.com/GoogleCloudPlatform/flask-talisman

---
todo

##  authentication

* meilleur : https://jcbaey.com/authentication-in-spa-reactjs-and-vuejs-the-right-way?utm_source=medium&utm_campaign=spa-authentication
* https://jwt.io/
* https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

* clear information about technologies : helmet
* do not store cookies in localStorage : https://dev.to/rdegges/please-stop-using-local-storage-1i04

### my solution

- adapted from :
    - https://github.com/mattupstate/flask-jwt/blob/master/flask_jwt/__init__.py
    - https://github.com/mattupstate/flask-jwt/blob/master/example/app.py
    - https://pyjwt.readthedocs.io/en/latest/usage.html

## save encrypted passwords on server side

* https://github.com/maxcountryman/flask-bcrypt

# Test & deploy

* https://travis-ci.org/

## Open source analytics framework

https://github.com/cube-js/cube.js

## Custom domain names for heroku app

- https://devcenter.heroku.com/articles/custom-domains

## CORS issues

- add the following line to package.json `"proxy": "http://localhost:5000"`


Project organization
------------

    ├── LICENSE
    ├── README.md          <- The top-level README for developers using this project.
    ├── data
    │   ├── processed      <- The final, canonical data sets for modeling.
    │   └── raw            <- The original, immutable data dump.
    │
    ├── models             <- Trained and serialized models, model predictions, or model summaries.
    │
    ├── notebooks          <- Jupyter notebooks. Naming convention is a number (for ordering),
    │                         the creator's initials, and a short `-` delimited description, e.g.
    │                         `1.0-jqp-initial-data-exploration`.
    │
    ├── requirements.txt   <- The requirements file for reproducing the analysis environment, e.g.
    │                         generated with `pip freeze > requirements.txt`.
    │
    ├── setup.py           <- makes project pip installable (pip install -e .) so src can be imported.
    ├── src                <- Source code for use in this project.
    │   ├── __init__.py    <- Makes src a Python module.
    │   │
    │   ├── data           <- Scripts to download or generate data.
    │   │   └── make_dataset.py
    │   │
    │   ├── features       <- Scripts to turn raw data into features for modeling.
    │   │   └── build_features.py
    │   │
    │   ├── models         <- Scripts to train models and then use trained models to make predictions.
    │   │   ├── predict_model.py
    │   │   └── train_model.py
    │   │
    │   └── visualization  <- Scripts to create exploratory and results oriented visualizations
    │       └── visualize.py
    |
    └── venv               <- Virtualenv to run project in local


--------