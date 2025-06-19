var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "homeController",
    })
    .when('/chitiet/:id', {
      templateUrl: "chitiet.html",
      controller: "chitietController",
    })
    .when("/timkiem", {
      templateUrl: "timkiem.html",
      controller: "timkiemController",
    })
    .when("/dangnhap", {
      templateUrl: "dangnhap.html",
      controller: "dangnhapController",
    })
    
    .when("/dangki", {
      templateUrl: "dangki.html",
      controller: "dangkiController",
    })
    .when("/main", {
      templateUrl: "main.html",
      controller: "mainController",
    })
    .when("/sanpham", {
      templateUrl: "sanpham.html",
      controller: "sanphamController",
    })
    .when("/cart", {
      templateUrl: "cart.html",
      controller: "cartController",
    })
    .when("/admin", {
      templateUrl: "admin.html",
      controller: "adminController",
    })
    .when("/adCart", {
      templateUrl: "adCart.html",
      controller: "adCartController",
    })
    .when("/danhmuc", {
      templateUrl: "danhmuc.html",
      controller: "danhmucController",
    })
    // dùng để tạo trang không tìm thấy
    .otherwise({
      template: "<h1>404</h1><p>Không tìm thấy trang</p>",
    });
});
