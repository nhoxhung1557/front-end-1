app.controller("adCartController", function ($scope,$http) {
    $http.get('http://localhost:3000/oders').then(
        function(res){
            $scope.oders=res.data;
        },
        function(res){

        }
    )
})