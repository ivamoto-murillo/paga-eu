app.controller('LoginController', ['$scope', '$http', function($scope, $http) {
	setBodyStyle('hold-transition login-page');
	
	console.log('LoginController iniciado!');
	
	$scope.user = {
		userName: '',
		password: ''
	}
	
	$scope.login = function() {
		console.log(user.userName);
		console.log(user.password);
		
		$http.post('api/test/testUser', $scope.user)
		     .then(function(reponse) {
		         console.log('Foi de bobs!');
		     }, function(response) {
		         console.log('Não foi de bobs!');
		     });
	}
}]);