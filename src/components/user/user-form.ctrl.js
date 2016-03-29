'use strict';

(function(){

	angular.module(APP_NAME)
		.controller('UserFormCtrl', UserFormCtrl);

	//////////////////////////////////////////////


	function UserFormCtrl($http, $scope,$state,$location, userService){
		this.error_msg='';
		this.success_msg;
		this.formModel = {
			first_name: '',
			last_name: ''
		};
		this.idParam = $location.search().id ? $location.search().id : null;
		
		this.submit = _submit;

		if(this.idParam){
			userService.getById(this.idParam)
				.then(_fillForm)
				.catch(_notifyErrors);
		}

		/////////////////////////
		var vm = this;

		function _fillForm(res){
			vm.formModel = {
				'first_name' : res.first_name,
				'last_name' : res.last_name,
				'id' : res.id
			};
		}

		function _submit(){

			if(this.idParam){
				userService.update(this.idParam, vm.formModel)
					.then(_successRedir)
					.catch(_notifyErrors);
			} else{
				vm.formModel.status = 'active';
				$http.post('http://js-assessment-backend.herokuapp.com/users.json', vm.formModel)
					.then(_successRedir)
					.catch(_notifyErrors);	
			}

			vm.success_msg = 'Success!';

		}

		function _successRedir(res){
			$state.go('user');
		}

		function _notifyErrors(res){
			if(res.status > 200){
				vm.error_msg = 'Errors in form';
				vm.success_msg='';
			}
			
		}


	}

})();