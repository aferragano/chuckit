angular.module("chuckit").controller("ProductDetailsCtrl", function ($scope, $stateParams, $meteor) {
	$scope.product = $meteor.object(Products, $stateParams.productId).subscribe('products');
	$scope.users = $meteor.collection(Meteor.users, true).subscribe('users');
	$scope.carts = $meteor.collection(Meteor.users, Carts, true).subscribe('carts');
})


