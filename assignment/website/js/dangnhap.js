app.controller("dangnhapController", function ($scope, $http, $rootScope, $location) {
    $scope.login = function () {
        $http.get(`http://localhost:3000/user?email=${$scope.email}&password=${$scope.password}`)
            .then(
                function (res) {
                    if (res.data.length == 0) {
                        $scope.isError = true;
                    } else {
                        
                        $rootScope.user = res.data[0];
                        localStorage.setItem('user', JSON.stringify($rootScope.user));
                        $location.path('/');
                    }
                },
                function (res) {
                    $scope.isError = true;
                }

            )
    }
    

});