myApp.controller("viewController",["$scope", "$http", function($scope, $http){
  console.log('in viewController');
  $scope.displayShelf = function(){
    console.log('in displayShelf');

    $http({
      method: 'GET',
      url: '/shelf'
    }).then(function(response){
      $scope.completeShelf = response.data;
      console.log('this is from the server', $scope.completeShelf);
    });
  };//end displayShelf
}]);//end viewController
