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
	scotchApp.controller('mainController', function($scope,$http) {
		$scope.validarFormulario = function(){
			console.log($scope.cadastro.$valid);

		}
		$scope.insertData = function(){
			$http.post(
				"insert.php",
			{
					'id_merc':$scope.id_merc,
					'cod_merc':$scope.cod_merc,
					'name_merc':$scope.name_merc,
					'tipo_merc':$scope.tipo_merc,
					'quant_merc':$scope.quant_merc,
					'preco_merc':$scope.preco_merc,
					'tipo_neg_merc':$scope.tipo_neg_merc
				}
			).success(function(data){
				$scope.message = (data);

				$scope.id_merc = null;
				$scope.cod_merc = null;
				$scope.name_merc = null;
				$scope.tipo_merc = null;
				$scope.quant_merc = null;
				$scope.preco_merc = null;
				$scope.tipo_neg_merc = null;
				//$scope.displayData();
			});
		}
	});

	scotchApp.controller('compraController', function($scope,$http) {
		$scope.displayData = function(){
			$http.get("select_c.php")
				.success(function(data){
					$scope.mercadoria = data;
				});
		}

	});

	scotchApp.controller('vendeController', function($scope,$http) {
		$scope.displayData = function(){
			$http.get("select_v.php")
				.success(function(data){
					$scope.mercadoria = data;
				});
		}
	});



