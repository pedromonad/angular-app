'use strict';

(function(){

	angular.module('angularApp')
		.controller('UserFormCtrl', UserFormCtrl);

	//////////////////////////////////////////////


	function UserFormCtrl($http, $scope){
		this.error_msg='';
		this.formModel = {
			first_name: '',
			last_name: '',
			status: ''
		};
		
		this.submit = _submit;

		/////////////////////////


		var vm = this;

		function _submit(){
			$http.post('http://js-assessment-backend.herokuapp.com/users.json', vm.formModel)
				.then(insertUser)
				.catch(respondErrors);

			vm.formModel = {};

		}

		function insertUser(res){
			$scope.userList.list.push(res.data);
		}

		function respondErrors(res){
			if(res.status > 200){
				vm.error_msg = 'Errors in form';
			}
			
		}


	}

})();