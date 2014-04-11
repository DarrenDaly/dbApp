/*the below is the factory, that provides a function that sets the people, gets the people, this is passed as a paramenter to the controller, 
which allows the $scope to assign attribute people to the people created in the factory*/
dbApp.factory('dbFactory', function () {
	var people = [
		{name: 'John Smith', city: 'Phoenix'},
		{name: 'John Doe', city: 'New York'},
		{name: 'Jane Doe', city: 'San Francisco'},
		{name: 'Eddie Corrigan', city: 'Carlow'},
		{name: 'Darren Daly', city: 'Carlow'},
		{name: 'Jules Phelan', city: 'Courtown'},
		{name: 'James Bond', city: 'London'},
		{name: 'Harry Potter', city: 'London'},
		{name: 'Marcus Phelan', city: 'Dublin'},
		{name: 'Niall Phelan', city: 'Cork'},
		{name: "Anne Mc'Grath", city: 'Carlow'}
	];
	//the below is called when you want to retreive the people, say in the controller
	var factory = {};
	factory.getPeople = function() {
		return people;
	};
	factory.postPeople = function (person) {
	};

	return factory; //must return the fatory to make it available
});