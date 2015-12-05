angular.module("chuckit").config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	
	// $provide.decorator('$uiViewScroll', function ($delegate) {
 //    return function (uiViewElement) {
 //      var top = uiViewElement.getBoundingClientRect().top;
 //      window.scrollTo(0, (top - 30));
 //      // Or some other custom behaviour...
 //    }; 
 //  });
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