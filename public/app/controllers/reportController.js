app.controller('reportController', function ($scope, $http) {
    let data = [];
    console.log('hola');
    $http({
        method: 'GET',
        url: '/report'
      }).then(function successCallback(response) {
          data = response.data;      
          }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
});