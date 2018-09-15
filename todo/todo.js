var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = [" ", "  "];

    // Write code to push new item
    $scope.submitNewItem = function () {
        console.log("submitNewItem")
        $scope.items.push($scope.todoitem);
    };

    // Write code to complete item
    $scope.completeItem = function (index,event) {
        console.log(event);
        event.currentTarget.parentElement.firstElementChild.classList.add("text-strike")

    };

    // Write code to delete item

    $scope.deleteItem = function (index) {
        console.log(index)
        $scope.items.splice(index)

    };
}]);





