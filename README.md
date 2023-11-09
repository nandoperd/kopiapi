# kopiapi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Require
- Vue UI version 2
- Plugin : vue-router
- Depen : bootstrap vue, axios, vue toast notification

## Bootstrap
- set bootstrap vue into main.js :
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

## API
use https://jsonplaceholder.typicode.com/
on github https://github.com/typicode/json-server

first, install :
```bash
  npm install -g json-server
```
then, create backend folder and file db.json and write the datas
then, Start JSON Server
```bash
  json-server --watch db.json
```
api data is ready to use

note : If you want to use the api I made for this project, you can visit my repository : https://github.com/nandoperd/kops

## axios
first you need to install axios dependence
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

## vue toast notification
we use vue toast notification version 1 : https://github.com/ankurk91/vue-toast-notification/tree/v1.x
- use this in the file main.js :
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.use(VueToast);

read the doc for making vue toast notification