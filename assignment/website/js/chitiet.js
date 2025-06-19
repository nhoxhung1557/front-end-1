app.controller("chitietController", function ($scope,$routeParams,$http) {
    $scope.chitiet={};
    $http.get(`http://localhost:3000/chitiet/${$routeParams.id}`)
    .then(
        function(res){
            $scope.chitiet=res.data;
        },
        function(res){
            alert('có lỗi khi xảy ra')
        }
    )
    
})