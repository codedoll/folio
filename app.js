var app = angular.module('Folio', []);


app.controller('MainController', ['$http', '$scope', '$routeParams', '$route', 'ngDialog', function($http, $scope, $routeParams, $route, ngDialog) {

    var self = this;


    $scope.adminLoad = function() {

        $http({
            url: '/clothing',
            method: 'GET',
        }).then(function(clothingDbData) {

            $scope.dataLoaded = true;

            console.log(clothingDbData.data);
            self.clothingDbData = clothingDbData.data;
        });
        //END adminLoad function
    };


}]); // end MainController
