'use strict';

(function(){
	angular.module(APP_NAME)
		.directive('userForm', userForm);

	function userForm(){
		return {
			restrict: 'E',
			templateUrl: 'views/user/user-form.html',
			controller: 'UserFormCtrl',
			controllerAs: 'userForm'
		};
	}
})();