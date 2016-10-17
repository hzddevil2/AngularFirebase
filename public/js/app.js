"use strict";
var config = {
    apiKey: "AIzaSyDoZuN9dUIcBRb2ZsiDKQJB5DOjXbh9BHI",
    authDomain: "angularfirebase-dd007.firebaseapp.com",
    databaseURL: "https://angularfirebase-dd007.firebaseio.com",
    storageBucket: "angularfirebase-dd007.appspot.com",
    messagingSenderId: "455959727640"
};

firebase.initializeApp(config);

var router = function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/chat.html'
  })
   .when('/settings', {
    templateUrl: 'views/settings.html'
  })
  .otherwise({
    redirectTo: '/'
  })
};

angular.module('angularFirebase', ['ngRoute', 'firebase']).config(router);