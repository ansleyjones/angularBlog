angular.module("mainModules.controllers")
  .controller("homeController", function($scope, $location){
    $scope.notFound = "whoops";
    $scope.date = moment().utc().format("dddd MMMM D, YYYY");
    $scope.goToBlog= function (){
      $location.path("/blog");
    }
  })
