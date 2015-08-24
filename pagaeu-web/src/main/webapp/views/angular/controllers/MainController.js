app.controller('MainController', ['$scope', '$translate', function($scope, $translate) {
	setBodyStyle = function(bodyStyle) {
        $scope.bodyStyle = bodyStyle;
    }

	$scope.setLanguage = function(language) {
	    $translate.use(language);
    }
}]);