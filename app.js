	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/compra', {
				templateUrl : 'pages/compra.html',
				controller  : 'compraController'
			})

			// route for the contact page
			.when('/vende', {
				templateUrl : 'pages/vende.html',
				controller  : 'vendeController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('compraController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('vendeController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});