app.controller("cartController", function ($scope,$rootScope,$http,$location) {
    
    $scope.tinhTong=function(){
        let tong=0;
        if($rootScope.cart){
        $rootScope.cart.forEach(sp => {
            tong+=sp.price*sp.quantity;
        });
   
    }
    return tong;
    }
    $scope.saveCart=function(){
        localStorage.setItem('cart',JSON.stringify($rootScope.cart));
    }
    $scope.delete=function(index){
        $rootScope.cart.splice(index,1);
        $scope.saveCart();
    }
    $scope.deleteAll=function(){
        $rootScope.cart=[];
        $scope.saveCart();
    }
    function isLoggedIn() {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        return $scope.user && $scope.user.id;
    }
    $scope.checkout=function(){
        if (!isLoggedIn()) {
            // Nếu chưa đăng nhập, hiển thị cảnh báo và không thực hiện đặt hàng
            alert('Bạn cần đăng nhập để đặt hàng!');
            return;
        }
        $http.post('http://localhost:3000/oders',{
            
            name: $scope.name,
            phone: $scope.phone,
            sp: $rootScope.cart,
            idUser: $scope.user.id ,
            total:$scope.tinhTong(),
            date: new Date().toLocaleString('sv-SE'),
            status:'oder',

        }).then(
            function(res){
                $scope.deleteAll();
                document.querySelector('.btn-close').click();
                alert('đặt hàng thành công!');
                $location.path('/');
            }
        )

    }
})