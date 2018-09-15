var app = angular.module('calculator', []);
app.controller('calcController', function ($scope) {
    var x;
    $scope.calculate = function () {

        if ($scope.operator == '+') {

            x = parseInt($scope.a) + parseInt($scope.b);
        }
        if ($scope.operator == '-') {
            x = $scope.a - $scope.b;
        }
        if ($scope.operator == '*') {
            x = $scope.a * $scope.b;
        }
        if ($scope.operator == '/') {
            x = $scope.a / $scope.b;
        }
        if ($scope.operator == '%') {
            x = $scope.a / $scope.b;
        }

        $scope.y = x;
    }
})