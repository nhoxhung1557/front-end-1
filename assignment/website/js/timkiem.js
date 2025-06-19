app.controller("timkiemController", function ($scope,$rootScope,$http,$location) {
    $http.get('http://localhost:3000/sp').then(
         function(res) {
           $scope.names=res.data;
           $scope.searching = false;
           // console.log($scope.search_product);
         },
         $scope.updateSearch = function() {
            $scope.searching = $scope.search.trim() !== ''; // Cập nhật biến searching
        },
        
        $scope.isSearchEmpty = function() {
            return !$scope.searching; // Kiểm tra nếu nội dung tìm kiếm trống
        },
         function(err) {
         }
     );
     
 })    