/**
 * Created by Nan on 2017/10/18.
 */
app.controller("shopcarController", ["$scope", "shopcarServer", function ($scope, shopcarServer) {

    $scope.flag = false;
    shopcarServer.getProducts("GET", "http://localhost:8080/api").then(function (result) {
        $scope.products = result;

        price();
    });
    $scope.$on("deleteItem", function (event, index) {
        $scope.products.splice(index, 1);
        price();
    });
    $scope.$on("countChange", function (event) {
        price();
    });

    $scope.$on("itemChange", function (event, index) {
        var count = 0;
        $scope.products[index].state = !$scope.products[index].state;

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].state) {
                count++
            }
        }
        if (count == $scope.products.length) {
            $scope.flag = true;
        } else {
            $scope.flag = false;
        }
        price();
    });

    $scope.checkAll = function () {
        $scope.flag = !$scope.flag;

        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.flag) {
                $scope.products[i].state = true;
            } else {
                $scope.products[i].state = false;
            }
        }
        price();
    };

    function price() {
        $scope.goodsPrice = 0;
        $scope.goodsCount = 0;
        $scope.products.forEach(function (item, index) {
            if (item.state) {
                $scope.goodsPrice += item.num * item.price;
                $scope.goodsCount += item.num;
            }
        });
    }
}]);