var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })
        .when('/category', {
            templateUrl: 'app/views/category.html',
            controller: 'CategoryController'
        })
        .when('/product-detail', {
            templateUrl: 'app/views/product-detail.html',
            controller: 'ProductDetail'
        })
        .when('/checkout', {
            templateUrl: 'app/views/checkout.html',
            controller: 'CheckoutController'
        })
        .when('/cart', {
            templateUrl: 'app/views/cart.html',
            controller: 'CartController'
        })
        .when('/confirmation', {
            templateUrl: 'app/views/confirmmation.html',
            controller: 'ConfirmationController'
        })
        .when('/tracking', {
            templateUrl: 'app/views/tracking.html',
            controller: 'TrackingController'
        })
        .when('/elements', {
            templateUrl: 'app/views/elements.html',
            controller: 'ElementsController'
        })
        .when('/contact', {
            templateUrl: 'app/views/contacts.html',
            controller: 'ContactController'
        })
        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

