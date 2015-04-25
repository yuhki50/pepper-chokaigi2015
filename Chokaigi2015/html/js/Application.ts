/// <reference path='_all.ts' />

/**
 * The main Chokaigi2015 app module.
 *
 * @type {angular.Module}
 */
module chokaigi2015 {
    'use strict';

    var chokaigi2015 = angular.module('chokaigi2015', [
        'mm.foundation',
        'ui.router',
        'angular-gestures'
    ])
        //.controller('todoCtrl', TodoCtrl)
        .controller('TopBarCtrl', TopBarCtrl)
        .controller('AnimationCtrl', AnimationCtrl)
        .controller('VoiceCtrl', VoiceCtrl)
        .controller('MoveCtrl', MoveCtrl)
        .controller('TabletCtrl', TabletCtrl)
        .controller('SystemCtrl', SystemCtrl)
        //.directive('todoBlur', todoBlur)
        //.directive('todoFocus', todoFocus)
        //.service('todoStorage', TodoStorage)
        //.service('QiMessaging', QiMessaging)
        .service('QiMessaging', QiMessaging)

        .config(($stateProvider, $urlRouterProvider, hammerDefaultOptsProvider) => {
            $stateProvider
                .state('animation', {
                    url: '/animation',
                    templateUrl: 'views/animation.html',
                })
                .state('move', {
                    url: '/move',
                    templateUrl: 'views/move.html',
                })
                .state('voice', {
                    url: '/voice',
                    templateUrl: 'views/voice.html',
                })
                .state('tablet', {
                    url: '/tablet',
                    templateUrl: 'views/tablet.html',
                })
                .state('system', {
                    url: '/system',
                    templateUrl: 'views/system.html',
                });

            $urlRouterProvider
                .when('/', '/animation')
                .otherwise('/');

            hammerDefaultOptsProvider.set({
                recognizers: [
                    [Hammer.Tap, {event: 'tap'}],
                    [Hammer.Tap, {event: 'doubletap', taps: 2}, [], ['tap']],
                    [Hammer.Press],
                    [Hammer.Pan],
                    [Hammer.Rotate]
                ]
            });
        });
}
