const app = angular.module('KoalaApp', []);

app.controller('KoalaController', ['$http', function ($http) {
    let self = this;

    self.koalaList = [];

    self.addKoala = function (koalaToAdd) {
        console.log(koalaToAdd);
        $http({
            url: '/koala',
            method: 'POST',
            data: koalaToAdd
        }).then(function (response) {
            console.log(response);
            self.getKoalas();
        }).catch(function (err) {
            console.log('error!', err);
        });// end of POST method

    }; // end of self.addKoala

    self.getKoalas = function () {
        $http({
            url: '/koala',
            method: 'GET'
        }).then(function (response) {
            // console.log(response);
            self.koalaList = response.data;
        }).catch(function (err) {
            console.log('Error message: ', err);
        }); // end of GET method

    }// end of self.getKoalas

    self.deleteKoala = function (id) {
        console.log('id of koala to remove', id);
        $http({
            url: `/koala/${id}`,
            method: 'DELETE'
        }).then(function (response) {
            console.log(response);
            self.getKoalas();
        }).catch(function (err) {
            console.log('Error: ', err);
        });// end of delete method
    } // end of self.deleteKoala

    self.toggleReady = function (koala) {
        console.log('toggle clicked');
        console.log(koala);
        
        koala.ready_to_transfer = true;
        $http({
            url: `/koala/${koala._id}`,
            method: 'PUT',
            data: koala
        }).then(function (response) {
            console.log('Put Response', response);
            self.getKoalas();
            self.newKoala.name = '';
            self.newKoala.age = '';
            self.newKoala.gender = '';
            self.newKoala.ready_to_transfer = '';
            self.newKoala.notes = '';
        }).catch(function(err){ 
            console.log('errrr',err);
        }); // end of PUT method
    
    }; // end of self.toggleReady
    
    self.getKoalas();
}]); // end of app.controller 
