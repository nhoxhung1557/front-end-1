app.controller("adminController", function ($scope, $http) {
    // Hàm để gửi yêu cầu GET lấy danh sách sản phẩm từ server khi trang được tải
    $scope.load = function() {
        $http.get('http://localhost:3000/sp').then(
            function(res) {
                $scope.sp = res.data;
            },
            function(err) {
                console.error('Lỗi khi tải danh sách sản phẩm:', err);
            }
        );
    }

    // Gọi hàm load() để tải danh sách sản phẩm khi trang được tải
    $scope.load();

    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.imageFile = element.files[0];
        });
    };

    $scope.addpr = function() {
        var productData = {
            name: $scope.name,
            image: $scope.imageFile.name,
            price: $scope.price,
            quantity:$scope.quantity
        };

        $http.post('http://localhost:3000/sp', productData).then(
            function(res) {
                alert('Thêm sản phẩm thành công');
                $scope.load(); // Tải lại danh sách sản phẩm sau khi thêm thành công
                document.querySelector("#down").click();
            },
            function(err) {
                console.error('Lỗi khi thêm sản phẩm:', err);
                alert('Thêm sản phẩm thất bại');
            }
        );
    }

    $scope.deletepr = function(id) {
        $http.delete("http://localhost:3000/sp/" + id).then(
            function(res) {
                alert('Xóa sản phẩm thành công');
                $scope.load(); // Tải lại danh sách sản phẩm sau khi xóa thành công
            },
            function(err) {
                console.error('Lỗi khi xóa sản phẩm:', err);
                alert('Xóa sản phẩm thất bại');
            }
        );
    }
    $scope.edit={};
        $scope.editpr=function(show) {  
            $scope.edit=show;
        }
        $scope.updatepr=function() {
            $http.patch(`http://localhost:3000/sp/`+$scope.edit.id,$scope.edit).then(
                function(res) {
                    alert('Cập nhật sản phẩm thành công');
                    $scope.load();
                    document.querySelector("#closeedit").click();   
                },
                function (err) {
                  alert('lỗi');  
                }
            )
        }
});
