app.controller("homeController", function ($scope,$http,$rootScope) {
    $http.get('http://localhost:3000/sp').then(
        function(res){
            $scope.sp=res.data;
        },
        function(res){

        }
    )

  
    $rootScope.addTocart = function(product) {
        let inCart = false;
        
        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        $rootScope.cart.forEach(sp => {
            if(sp.id === product.id) {
                inCart = true;
                sp.quantity++; // Tăng số lượng lên
            }
        });
        
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng
        if (!inCart) {
            product.quantity = 1;
            $rootScope.cart.push(product);
        }
        
       localStorage.setItem('cart',JSON.stringify($rootScope.cart));
    }
    
    
    })