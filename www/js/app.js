// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('photoCtrl', function($scope, $window) {
    console.log('photoCtrl on');

    $scope.reload = function() {
        $window.location.reload();
    }

    $scope.filterAction = function(filter) {
        var img1 = document.getElementById('img1');
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var effect = filter;

        canvas.width = img1.width;
        canvas.height = img1.height;

        context.drawImage(img1, 0, 0);

        Caman(context, function () {
            console.log(this);
            this.effect();
            this.render();
        });

        $scope.cancel = true;
    }

    $scope.merge = function() {
        var img1 = document.getElementById('img1');
        var frame = document.getElementById('frame');
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');

        canvas.width = img1.width;
        canvas.height = img1.height;

        context.globalAlpha = 1.0;
        context.drawImage(img1, 0, 0);
        context.globalAlpha = 1.0;
        context.drawImage(frame, 0, 0);

        $scope.cancel = true;
    }

    $scope.cancelAction = function() {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        canvas.width = 0;
        canvas.height = 0;

        context.clearRect ( 0 , 0 , canvas.width, canvas.height );
        $scope.cancel = false;
    }
})
