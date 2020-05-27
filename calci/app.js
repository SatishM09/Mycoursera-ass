(function () {
'use strict';
  angular.module('MyFirstAjs',[])
  .controller('MyController',function ($scope) {
    $scope.name="";
    $scope.totalValue=0;

    $scope.disp = function () {
      var y = FindCalci($scope.name);
      $scope.totalValue=y;
    };

    function FindCalci(String)
    {
       var x = 0;
       for(var i=0;i<String.length;i++)
       {
       x=x+String.charCodeAt(i);
     }
       return x;
    }
  });

})();
