# Todo

- https://jsfiddle.net/koemw67a/6/
- https://codeburst.io/part-1-jwt-to-authenticate-downloadable-files-at-client-8e0b979c9ac1d


- [ ] flexbox port to pure react
    - [ ] bible : https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    - [ ] https://ishadeed.com/article/grid-layout-flexbox-components/
    - [ ] https://github.com/roylee0704/react-flexbox-grid
    - [ ] https://medium.com/better-programming/make-a-flexbox-react-component-e96a038da7ec
    - [ ] https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
    - [ ] https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    - [ ] https://github.com/LoicMahieu/react-styled-flexboxgrid/blob/master/src/config.js

- [ ] performances
    - [ ] https://github.com/jamiebuilds/react-loadable
    - [ ] https://reactjs.org/docs/code-splitting.html
    
- [ ] performances TODO
    - [ ] https://search.google.com/test/rich-results?utm_campaign=sdtt&utm_medium=message
    - [ ] https://loadable-components.com/
    - [ ] https://web.dev/code-splitting-suspense/?utm_source=lighthouse&utm_medium=lr
    - [ ] https://web.dev/reduce-javascript-payloads-with-code-splitting/
    - [ ] https://web.dev/codelab-code-splitting/
    - [ ] https://web.dev/use-lazysizes-to-lazyload-images/
    

- [ ] bug scrollbar with sidebar
- [ ] breadcrumbs self-coded
- [ ] breadcrumbs & links activeClass in red
- [x] nested routing

- [x] routes generated from a variable
- [x] menu over content

- [x] icons for contact
- [ ] écrire textes : en prio about/cv
- [ ] rajouter 2-3 projets clés
- [x] bande blanche de séparation qui descend tout en bas

- [ ] endroit perso où mettre des photos pour la famille
- [ ] enlever le header si écran trop petit
- [ ] ajouter un autre thème
- [x] changer police avec celle de Léa
- [ ] ajouter langue FR/EN
- [ ] changer présentation sidebar lorsque mode phone
- [ ] ajouter analytics
- [x] ajouter scrollToTop lorsque changement de route
- [ ] obtenir un A+ en sécu web : https://blog.miguelgrinberg.com/post/running-your-flask-application-over-https
- [ ] utiliser lightouse

- [ ] add image carousel : https://github.com/jossmac/react-images

- [ ] js basic tuto : https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

- [ ] integrate styled components
    - [ ] https://styled-components.com/docs/basics#motivation
    - [ ] voir : https://medium.com/javascript-in-plain-english/create-your-own-hamburger-menu-using-react-hooks-typescript-and-styled-components-4b2797c4d193

- [ ] using Nginx as reverse proxy :
    - [ ] https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nginx

- [ ] add animations when a react component enters or leaves the DOM
    - [ ] https://github.com/reactjs/react-transition-group

- [ ] resources for react/typescript
    - https://fettblog.eu/typescript-react-component-patterns/#basic-function-components

- [ ] idées design
    - [ ] https://deepmind.com
    
- [ ] without react-script
    - [ ] https://createapp.dev/webpack

- [ ] generate react proptypes from typescript
    - https://github.com/milesj/babel-plugin-typescript-to-proptypes

- [ ] care of css injection
    - https://github.com/mathiasbynens/CSS.escape

- [ ] add a hook for commit
```
  {
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

# Tutorials

- [ ] Typescript
    - [ ] https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#recommended-react--typescript-codebases-to-learn-from 

* not done
    * https://github.com/testdrivenio/flask-vue-crud
    * https://devcenter.heroku.com/articles/container-registry-and-runtime
    * https://medium.com/swlh/deploy-and-secure-a-react-flask-app-with-docker-and-nginx-768ca582863b
    * https://stackoverflow.com/questions/54313216/nginx-config-to-enable-cors-with-origin-matching/54313586#54313586
    * https://gist.github.com/Stanback/7145487
    * https://docs.docker.com/engine/reference/builder/#entrypoint
    * https://docs.docker.com/engine/reference/run/#name---name
    * https://testdriven.io/courses/tdd-fastapi/getting-started/

* using nginx/heroku/flask/react
    * https://testdriven.io/blog/deploying-flask-to-heroku-with-docker-and-gitlab/

* using nginx/fastapi/react
    * How does FastAPI compare to Flask : https://www.quora.com/How-does-FastAPI-compare-to-Flask
    * https://github.com/geekyjaat/fastapi-react

* heroku python
    * https://devcenter.heroku.com/articles/getting-started-with-python

* another backend
    * https://github.com/tiangolo/fastapi

---

# Before to start

## Core used libraries

* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
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

This project was bootstrapped with [Create React Routes](https://github.com/facebook/create-react-app).

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
