console.log( 'js' );

const app = angular.module('KoalaApp',[]);

app.controller('KoalaController', ['$http', function($http) {
    let self = this;

    self.koalaList = [];

    self.addKoala = function(koalaToAdd) {
        $http({
            url: '/koala',
            method: 'POST',
            data: koalaToAdd
        }).then( function(response) {
            console.log(response);
        }).catch(function(err) {
            console.log('error!', err);
        });// end of POST method

    }; // end of self.addKoala


}]); // end of app.controller 
