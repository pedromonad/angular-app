'use scrict';
var APP_NAME = 'angularApp';

(function (){

	angular.module(APP_NAME)
		.config(routerUser);


	function routerUser($stateProvider, $urlRouterProvider){
			      
	      $urlRouterProvider.otherwise('/404');
	      
	      $stateProvider
	        .state('add', {
	            url: '/user-detail',
	            templateUrl: 'views/user-detail.html'
	        })
	        .state('edit', {
	            url: '/user-detail?id',
	            templateUrl: 'views/user-detail.html'
	        })
	        .state('user', {
	             url: '/user',
	             templateUrl: 'views/user-list.html'
	         })
	        .state('404', {
	             url: '/404',
	             templateUrl: 'views/blank-page.html'
	         });

	}

})();