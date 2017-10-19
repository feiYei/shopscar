var app=angular.module('app',['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('shopcar',{
            url:'/shopcar',
            templateUrl: "App/Views/shopcar.html",
            controller: "shopcarController"
        });
    $urlRouterProvider.otherwise('/shopcar')
});



