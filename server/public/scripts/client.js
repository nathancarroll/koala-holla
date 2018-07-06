

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
            self.newKoala.name = '';
            self.newKoala.age = '';
            self.newKoala.gender = '';
            self.newKoala.ready_to_transfer = '';
            self.newKoala.notes = '';
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

    self.confirmDelete = function(id){
        swal({
            title: "WAIT!",
            text: "Are you sure you want to delete a Koala?",
            buttons: true,
            dangerMode: true
        }).then(function(value){
            console.log(value);
            if (value){
                self.deleteKoala(id);
            }
        }).catch(function(err){
            console.log(err);
        });
    };

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
        }).catch(function(err){ 
            console.log('errrr',err);
        }); // end of PUT method
    
    }; // end of self.toggleReady
    
    self.resetSearch = function(){
        self.getKoalas();
    }

    self.getKoalas();

    self.searchFunction = function(searchType, searchKeyword){
        console.log(searchType, searchKeyword);
        
        $http({
            url: `/search/${searchType}/${searchKeyword}`,
            method: 'GET'
        }).then(function(res){
            console.log(res.data);
            self.koalaList = res.data;
        }).catch(function(err){
            console.log('error',err);
        })
    }
}]); // end of app.controller 
