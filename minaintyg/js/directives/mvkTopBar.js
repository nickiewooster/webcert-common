angular.module('common').directive('mvkTopBar',
    function() {
        'use strict';

        return {
            restrict: 'E',
            replace: true,
            scope: {
                hideLogout: '@'
            },
            templateUrl: '/js/directives/mvkTopBar.html'
        };
    });
