app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/templates/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });
		   
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);