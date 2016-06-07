var app = angular.module('newApp',[]);

app.controller('myCtrl',function($scope,$http){
	console.log("it is ok now");
	$scope.name = "isuru sampath"

	$http.get('/contactlist').success(function(responce){

		console.log("i got what i want");
		$scope.contactlist = responce;
	});

    $scope.addcontact = function(){
    	//console.log("this is function");
    	console.log($scope.contact);
    } 
});