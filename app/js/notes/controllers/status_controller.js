'use strict';
module.exports = function(app) {
  app.controller('statusCtrl', [ 'status', '$scope', function(status, $scope) {

    $scope.status = status;
    $scope.inOrOut = status.status;

    $scope.$watch('status.status', function(newValue, oldValue) {
      if(newValue !== oldValue) {
        $scope.inOrOut = newValue;
      }
    });
  }]);
};
