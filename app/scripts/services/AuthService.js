(function(){
	'use strict';
	// console.log('login service');
	angular
	.module('pinterinApp')
	.factory('AuthService', AuthService);

	AuthService.$inject = ['$rootScope', '$http'];

	function AuthService($rootScope, $http){
		// console.log('Auth service');
		var env = $rootScope.env;
		var baseUrl = 'http://api.pinterin.online';

		var login = function(username, password){

			if (env == 'mock') {
				return Promise.resolve({
					data: {
						accesstoken: 'DEzNGFiMGYwMDFjMzMxM2YzYzE',
					},
				});
			}
			
		var options= {
        method: 'POST',
         url: baseUrl + '/login',
         headers: {
          'content-type': 'application/x-www-form-urlencoded',
         },
         data: {
          username: username,
          password : password,                                         
         },
       };

       return $http(options);
		};

		var getToken = function(){
			return localStorage.getItem('token');
		}

		return {
			loginauth: login,
			getToken: getToken,
		};
	}


})();