var app = angular.module('Folio', []);

app.controller('MainController', ['$http', '$scope', '$routeParams', '$route', 'ngDialog', function($http, $scope, $routeParams, $route, ngDialog) {

    var self = this;

    // $scope.adminLoad = function() {

        $http({
            url: '/',
            method: 'GET',
        }).then(function(data) {
            console.log(data);
        });


}]); // end MainController
