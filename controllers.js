/*the controller assigns the attribute people using the $scope value which glues it to the module and in the single page(index.html)
 the views get pulled in and they are then considered part of the module, so they can access the people attribute through module(dbApp/$scope/dbFactory/getPeople automatically*/
dbApp.controller('DbController', function ($scope, dbFactory) {
	$scope.people = dbFactory.getPeople(); //assigning the people as an attribute
	
	//method to add an element to the people attribute
	$scope.addPerson = function() {
		$scope.people.push( //push is used to send an element to the the people attribute
		{
			name: $scope.newPerson.name, //pushing the name element to people
			city: $scope.newPerson.city //pushing the city element to people
		});
	};
});

dbApp.controller('WelcomeController', function ($scope) {
      $scope.greeting = 'Welcome!';
  });
angular.bootstrap(document, ['demo']);