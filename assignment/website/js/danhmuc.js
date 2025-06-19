app.controller("danhmucController", function ($scope,$http) {
    $http.get('http://localhost:3000/category').then(
        function(res){
            $scope.category=res.data;
        },
        function(res){

        }
    )
})