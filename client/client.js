 angular.module("clientApp", [])
  .controller("clientController", function($scope, $timeout) {
    $scope.picture= "http://www.spiritscienceandmetaphysics.com/wp-content/uploads/2015/03/fluffy-bunny.jpg";
    $scope.player;

    //current time and date
    var fireDigestEverySecond = function() {
      $scope.date = new Date();
      $timeout(fireDigestEverySecond , 1000);
    };
    fireDigestEverySecond();

});