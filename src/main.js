// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import the vue instance
import Vue from 'vue'
// import the App component
import App from './App'
// import the vue routes
import VueRouter from 'vue-router'
// tell vue to use the router
Vue.use(VueRouter)
// import the hello component
import Hello from './components/Hello'
// import the about component
import About from './components/About'
// define your routes
const routes = [
  // define the root url of the application.
  { path: '/', component: Hello },
  // route for the about route of the web page
  { path: '/about', component: About }
]

// Create the router instance and pass the 'routes' option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  // define the selector for the root component
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare components that the root component can access
  components: { App },
  // pass in the routes to the Vue instance
  router
}).$mount('#app') // mount the router on the app
