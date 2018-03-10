var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {

	$(".wrapper-loader").show();
	$(".wrapper-table").hide();

    $http.get("http://sistema.memphisnet.com.br/barramento/api/v1/banner")
    .then(function (response) {
    	$scope.banners = response.data;
    	
    	$(".wrapper-loader").hide();
		$(".wrapper-table").show();
    });
});