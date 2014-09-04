angular.module("mainModules.controllers")
  .controller("blogController", function($scope, $location){
    $scope.date = moment().utc().format("dddd MMMM D, YYYY");
    $scope.posts = [
      {
        title: "First Post!",
        subtitle: "Stuff Goes Here",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Yet Another Post",
        subtitle: "A Little More Information",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ];

    $scope.addPost = function(bPost){
      $scope.posts.unshift(bPost);
      $scope.newPost = {};
    }

    $scope.goToHome= function (){
      $location.path("/");
    }

    $scope.deletePost = function(post) {
      var index = $scope.posts.indexOf(post);
      $scope.posts.splice(index, 1);
    }

    $scope.editPost = function(post, updPost) {
      var index = $scope.posts.indexOf(post);
      $scope.posts.splice(index, 1, updPost);
    }



  });
