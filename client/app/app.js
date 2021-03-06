import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Routes from './routes/routes';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    Routes.name
  ])
  .config(($locationProvider,$urlRouterProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/dashboard');
  })

  .component('app', AppComponent);
