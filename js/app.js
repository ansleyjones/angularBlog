angular.module("mainModules", ["mainModules.controllers", "ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/blog", {
        templateUrl: "views/blogPosts/blog.html",
        controller: "blogController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/notFound"
      })

  });

  angular.module("mainModules.controllers", []);
