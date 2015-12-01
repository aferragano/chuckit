angular.module("chuckit").controller("ProductsListCtrl", function ($scope, $meteor) {
	$scope.products = $meteor.collection(Products);

	$scope.remove = function (product) {
		$scope.products.splices($scope.products.indexOf(product), 1);
	}

	$scope.removeAll = function(){
		$scope.products.remove();
	}
});