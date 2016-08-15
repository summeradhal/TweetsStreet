
//Initialize app
var tweetApp=angular.module('tweetApp',['ngRoute']);

tweetApp.directive('customMenu', function(){
	return {
		// return two properties
		restrict: 'E', //E= Element, A=attribute, C=Class,M=comment
		templateUrl: 'Views/menu.html'
	}
}); //end of cumstomMenu directive

tweetApp.config(function($routeProvider){
	$routeProvider.when('/',{ //load up home html with home controller
		templateUrl:'Views/home.html', 
		controller:'homeController'
	});

		$routeProvider.when('/trump',{ //trump load up same template but new controller
			templateUrl:'home.html',
			controller:'trumpController'
		});
		$routeProvider.when('/hillary',{ // /bernie load up same template but new controller
			templateUrl:'home.html',
			controller:'hillaryController'
		});
		$routeProvider.otherwise('/'); //default
}); //end 
