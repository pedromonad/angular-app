'use scrict';

var APP_NAME = 'angularApp';

(function (){

	angular
		.module(APP_NAME, ['angularUtils.directives.dirPagination','checklist-model', 'ui.router'])
		.run(appIsRunning);

	//////////////////////////////////////////////////////////////////////////////////////////////

	function appIsRunning() {
		console.log('App is running!!');
	}

})();