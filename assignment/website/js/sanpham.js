app.controller("sanphamController", function ($scope,$http) {
    $http.get('http://localhost:3000/sp').then(
        function(res){
            $scope.sp=res.data;
        },
        function(res){

        }
    )
})