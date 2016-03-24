'use strict';

(function(){
	angular.module('angularApp')
		.directive('userList', userListDirective);

	//////////////////////////////////////////////

	function userListDirective(){
		return {
			restrict: 'E',
			templateUrl: 'views/user/user-list.html',
			controller: 'UserListCtrl',
			controllerAs: 'userList'
		};
	}
})();