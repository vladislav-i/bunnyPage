 angular.module("clientApp", [])
  .controller("clientController", function($scope) {
    $scope.picture= "http://www.spiritscienceandmetaphysics.com/wp-content/uploads/2015/03/fluffy-bunny.jpg";
    $scope.player;
    $scope.date = new Date();
});