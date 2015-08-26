app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/templates/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                url: '/register',
                templateUrl: 'views/templates/register.html',
                controller: 'RegisterController'
            })
            .otherwise({
                redirectTo: '/'
            });
		   
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);