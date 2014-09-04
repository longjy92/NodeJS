angular.module('quiz',[])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/quiz',{
				templateUrl: '/partials/control.html',
				controller: 'QuizControlCtrl',
			})
			.when('/quiz/new',{
				templateUrl: '/partials/new.html',
				controller: 'QuizNewCtrl',
			})
			.when('/quiz/answer',{
				templateUrl: '/partials/answer.html',
				controller: 'QuizAnswerCtrl',
			})
			.when('/quiz/view',{
				templateUrl: '/partials/view.html',
				controller: 'QuizViewCtrl',
			})
			.otherwise({
				redirectTo: '/quiz'
			})
	}])