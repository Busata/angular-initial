angular.module('app', [])
.config(["$provide", function($provide) {
	var provide = angular.copy(window.userProfile);
	$provide.constant("userProfile");
}]);