'use strict';

module.exports = function(app) {
  app.controller('UsersCtrl', ['$scope', 'status', function($scope, status){
    $scope.signIn = function() {
      $scope.errors = [];

      status.signIn($scope.user.email, $scope.user.password)
      .error(function(data) {
        console.log('error!');
        $scope.errors.push(data);
      });
    };

    $scope.signUp = function() {
      $scope.errors = [];
      if ($scope.newUser.password !== $scope.newUser.passwordConfirmation) $scope.errors.push({msg: 'password and confirmation did not match'});
      if (!$scope.newUser.email) $scope.errors.push({msg: 'did note specify a email'});

      if ($scope.errors.length) return;

      status.signUp($scope.newUser)
      .error(function(data) {
        console.log(data);
        $scope.errors.push(data);
      });
    };
  }]);
};
