(function () {
  'use strict';
  angular.module('ImageApp',[])
  .controller('ImageController',ImageFunc);

  function ImageFunc($scope) {
    $scope.name="Satish";
    $scope.state="satish";


  $scope.DispBestiee = function () {
    $scope.state="kapil";
  };
}

})();
