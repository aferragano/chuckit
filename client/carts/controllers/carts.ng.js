angular.module("chuckit").controller("CartController", function ($scope, $stateParams, $meteor) {
	$scope.cart = []
	$scope.addCart = function(product){
		console.log(product)
		$scope.cart.push([{
					name: product.name, 
					price: product.price, 
					quantity: addToCartForm.quantity.value
				}])
		console.log($scope.cart)
	}
})