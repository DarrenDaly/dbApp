var dbApp = angular.module('dbApp', ['ngRoute']); //declaring the module and its dependancies

dbApp.config(function ($routeProvider) { //$routeProvider is our 'glue', it holds the name of the view we want 
	$routeProvider
		.when('/',	//when $routeProvider is '/',
			{
				controller: 'WelcomeController',
				templateUrl: 'Partials/welcome.html'
			})
		.when('/view1',	//when $routeProvider is '/', use DbController and show view1
			{
				controller: 'DbController',
				templateUrl: 'Partials/view1.html'
			})
		.when('/view2',	//when $routeProvider is '/view2', use DbController and show view2
			{
				controller: 'DbController',
				templateUrl: 'Partials/view2.html'
			})
		.otherwise({ redirectTo: '/' });	//when $routeProvider is unspecified or unavailable for example, it will redirect to the default (view1)
});

