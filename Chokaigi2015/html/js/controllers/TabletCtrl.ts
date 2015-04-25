/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class TabletCtrl {
        public ALAutonomousLife;
        public ALMotion;
        public ALSystem;
        public ALRobotPosture;
        public ALTabletService;
        public ALFrameManager;

        public ALAutonomousLifeState;

        public static $inject = [
            '$interval',
            '$timeout',
            'QiMessaging'
        ];

        constructor(private $interval,
                    private $timeout,
                    private QiMessaging) {

            QiMessaging.getService('ALAutonomousLife', (service) => {
                this.ALAutonomousLife = service;

                this.ALAutonomousLife.getState().done((value) => {
                    this.$timeout(() => {
                        this.ALAutonomousLifeState = value == 'solitary';
                    });
                });
            });

            QiMessaging.getService('ALMotion', (service) => {
                this.ALMotion = service;
            });

            QiMessaging.getService('ALSystem', (service) => {
                this.ALSystem = service;
            });

            QiMessaging.getService('ALRobotPosture', (service) => {
                this.ALRobotPosture = service;
            });

            QiMessaging.getService('ALTabletService', (service) => {
                this.ALTabletService = service;
            });

            QiMessaging.getService('ALFrameManager', (service) => {
                this.ALFrameManager = service;
            });
        }

        public showImage(filename) {
            this.QiMessaging.raiseALMemoryEvent('Chokaigi2015/Tablet/ShowImage', filename);
        }
    }
}
