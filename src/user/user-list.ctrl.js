'use strict';

(function (){

	angular.module('angularApp')
		.controller('UserListCtrl', UserListCtrl);

	//////////////////////////////////////////////

	function UserListCtrl($http){
		this.list = [];
		this.error_msg = '';

		//////////////////////////////////////////

		$http.get('http://js-assessment-backend.herokuapp.com/users.json')
			.then(listResult)
			.catch(notifyError);

		var vm = this;

		function listResult(res){
			//console.log(res.data);
			vm.list = res.data;
		}

		function notifyError(res){
			console.error(res);
			vm.error_msg = res;
		}

	}

})();