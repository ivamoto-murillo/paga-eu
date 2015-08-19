app.controller('LoginController', ['$scope', function($scope) {
	setBodyStyle('hold-transition login-page');
	
	$scope.user = {
		userName: '',
		password: ''
	}
	
	$scope.login = function() {
		console.log(user.userName);
		console.log(user.password);
	}
}]);