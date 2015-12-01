angular.module("chuckit").controller("ProductDetailsCtrl", function ($scope, $stateParams, $meteor) {
	$scope.product = $meteor.object(Products, $stateParams.productId).subscribe('products');
})