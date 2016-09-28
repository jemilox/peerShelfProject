myApp.controller("addController",["$scope", "$http", function($scope, $http){
  console.log('in addController');

  $scope.addItem = function(){

    var item={
      placer: $scope.placer,
      description: $scope.description,
      image: $scope.image
    };//end item object
    $http({
      method: 'POST',
      url: '/shelf',
      data: item
    }).then (function(response){
      console.log('return from server', response);
      //empty input fields
      $scope.placer = "";
      $scope.description = "";
      $scope.image = "";
    })//end return
  }//end addItem
}]);//end addController
