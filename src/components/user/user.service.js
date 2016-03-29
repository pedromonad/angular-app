'use strict';

(function (){

    angular
        .module(APP_NAME)
        .factory('userService', userService);

        

    userService.$inject = ['$http', 'config'];

    function userService($http, config) {

        var url = config.API_URL + 'users';
        var urlJson = url.concat('.json');

        return {
            getList: getList,
            updateStatus: updateStatus,
            getById: getById,
            insert: insert,
            update: update
        };

        

        function getList() {
            return $http.get(urlJson)
                .then(_getResultSuccess)
                .catch(_getErrors);
        }

        function updateStatus(id, status){
            var user = {};
            status = status == 'active' ? 'locked': 'active';
            user = {
                'status': status
            };

            return $http.put(url.concat('/',id,'.json'), user)
                .then(_getResultSuccess)
                .catch(_getErrors);
        }

        function getById(id){
            var config = {
                params: { 'id': id }
            };
            return $http.get(url.concat('/',id,'.json'), config)
                .then(_getResultSuccess)
                .catch(_getErrors);
        }

        function insert(){
            return $http.post(urlJson, vm.formModel)
                .then(_getResultSuccess)
                .catch(_getErrors);
        }

        function update(id,item){
            var user = {};
            user = {
                'first_name': item.first_name,
                'last_name': item.first_name
            };

            return $http.put(url.concat('/',id,'.json'), user)
                .then(_getResultSuccess)
                .catch(_getErrors);
        }

        ///////////////////////////////////////

        function _getResultSuccess(res) {
            return res.data;
        }

        function _getErrors(error) {
            console.log(error);
            return error;

        }
    }


})();