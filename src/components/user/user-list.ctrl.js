'use strict';

(function (){

	angular.module(APP_NAME)
		.controller('UserListCtrl', UserListCtrl);

	//////////////////////////////////////////////

	function UserListCtrl($http, userService){
		this.querySearch = '';
		this.list = [];
		this.error_msg = '';

		this.statusChanged = _statusChanged;

		//////////////////////////////////////////

		_userList();

		var vm = this;

		/////////////////////////////////////////

		function _listResult(res){
			vm.list = res;
		}

		function _notifyErrors(res){
			vm.error_msg = res;
		}

		function _statusChanged(id, status){
			userService.updateStatus(id,status);
			_userList();
		}

		function _userList(res){
			userService.getList()
				.then(_listResult)
				.catch(_notifyErrors);
		}
	}

})();