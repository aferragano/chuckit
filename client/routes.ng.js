angular.module("chuckit").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('products', {
			url: '/products',
			templateUrl: 'client/products/views/products-list.ng.html',
			controller: 'ProductsListCtrl'
		})
		.state('productDetails', {
			url: '/products/:productId',
			templateUrl: 'client/products/views/product-details.ng.html',
			controller: 'ProductDetailsCtrl'
		});

		$urlRouterProvider.otherwise("/products");
} );