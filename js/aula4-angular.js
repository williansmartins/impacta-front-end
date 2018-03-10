var app = angular.module('myApp', []);
app.controller('bannerCtrl', function($scope, $http) {


	$scope.buscar = function(){
	    $http.get("http://sistema.memphisnet.com.br/barramento/api/v1/banner")
	    .then(function (response) {
	    	$scope.banners = response.data;
	    });
	}

	$scope.buscar2 = function(){

 			$http({
                method : "GET",
                headers: {
			        'Content-Type': 'application/json',
			        'X-VTEX-API-AppKey': 'xxx',
			        'X-VTEX-API-AppToken': 'xxx'
			    },
                url : 'http://xxx.xxx.com.br/api/catalog_system/pvt/category/xxx',
            }).then(function (xxx) {
			    // success function
			    alert("sucesso");
			}, function (xxx) {
			    // Failure Function
			    alert("erro");
			});


		// var req = {
		//     method: 'GET',
		//     url: 'http://xxx.xxx.com.br/api/catalog_system/pvt/category/xxx',
		//     headers: {
		//         'Content-Type': 'application/json',
		//         'X-VTEX-API-AppKey': 'xxx',
		//         'X-VTEX-API-AppToken': 'xxx'
		//     }
		// }

		// $http(req).then(function (responce) {
		//     // success function
		//     alert("sucesso");
		// }, function (responce) {
		//     // Failure Function
		//     alert("erro");
		// });
	}

});