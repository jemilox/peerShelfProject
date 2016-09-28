console.log('in client.js');
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  console.log('inside config routeProvider');
    $routeProvider.
      when("/home", {
        templateUrl: "/views/partials/home.html",
        controller: "homeController"
      }).
      when("/view", {
        templateUrl: "/views/partials/view.html",
        controller: "viewController"
      }).
      when("/add", {
        templateUrl: "/views/partials/add.html",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);//end myApp config
