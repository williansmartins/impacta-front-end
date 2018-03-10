var app = angular.module('myApp', []);
app.controller('bannerCtrl', function($scope, $http) {


	$scope.buscar = function(){
	    $http.get("http://sistema.memphisnet.com.br/barramento/api/v1/banner")
	    .then(function (response) {
	    	$scope.banners = response.data;
	    });
	}

});