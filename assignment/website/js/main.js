app.controller("mainController", function ($scope, $rootScope, $location) {
    if (localStorage.getItem('user')) {
        $rootScope.user = JSON.parse(localStorage.getItem('user'));
    }

    $scope.logout = function () {
        localStorage.removeItem('user');
        delete $rootScope.user; 
        $location.path('/');
       
    };

    
    if(localStorage.getItem('cart')){
        $rootScope.cart=JSON.parse(localStorage.getItem('cart'));

    }else{
        $rootScope.cart= [];
    }
});