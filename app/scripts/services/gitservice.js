'use strict';

/**
 * @ngdoc service
 * @name gitStuffApp.gitService
 * @description
 * # gitService
 * Service in the gitStuffApp.
 */
angular.module('gitStuffApp')
  .service('gitService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getUser = function (searchTerm) {

      var def = $q.defer();

      $http.get('https://api.github.com/users/' + searchTerm)
        .success(function(data) {
          def.resolve(data);
        })
        .error(function() {
          def.reject('Failed to get user');
        });
      return def.promise;

    };


    this.getRepos = function (searchTerm) {

      var def = $q.defer();

      $http.get('https://api.github.com/users/' + searchTerm + '/repos')
        .success(function(data) {
          def.resolve(data);
        })
        .error(function() {
          def.reject('Failed to get repos for user "' + searchTerm + '"');
        });
      return def.promise;

    };
  });
