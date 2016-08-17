var app = angular.module('Folio', ['ngRoute', 'ngSanitize']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'MainController',
        controllerAs: 'mctrl'
    })
}])


app.controller('MainController', ['$http', '$scope', '$routeParams', '$route', '$sce', function($http, $scope, $routeParams, $route, $sce) {

    var self = this;
    console.log('message');

    //Gets the json from blog
        $http({
        method: 'GET',
        url: '/1'
        }).then(function(posts) {
            $scope.Message = "My name is <span><b>Lyn Dee</b></span>";
            self.posts = posts.data.posts;
        });

}]); // end MainController
