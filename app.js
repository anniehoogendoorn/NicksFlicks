var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'welcome': {
        templateUrl: 'partials/home.html',
      },
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    views: {
      'header': {
        templateUrl: 'partials/header.html',
      },
      'reviews': {
        templateUrl: 'partials/reviews.html',
        // controller: 'ReviewsCtrl'
      },
      'reviewtext': {
        templateUrl: 'partials/reviewtext.html'
        // controller: 'ReviewsCtrl'
      }
    }
  });
});
