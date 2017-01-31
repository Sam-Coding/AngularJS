var myApp=angular.module('myApp',['ngRoute',
                                  'personController'
                                ]);

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/item1',{
    templateUrl:'pages/item1.html',
    controller:'ListeController'
  }).
    when('/item2',{
      templateUrl:'pages/item2.html',
      controller:'AgeController'

    }).
    otherwise({
      redirectTo:'/item1'
    });
  }]);
