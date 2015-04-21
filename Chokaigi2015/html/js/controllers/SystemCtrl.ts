/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class SystemCtrl {
        public ALAutonomousLife;
        public ALMotion;
        public ALSystem;
        public ALRobotPosture;

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
        }

        public ALAutonomousChange(value) {
            this.ALAutonomousLife.setState(value ? 'solitary' : 'disabled');
        }

        public humanTrackerChange(value) {
            var state = value ? 'On' : 'Off';
            this.QiMessaging.raiseALMemoryEvent('Chokaigi2015/System/HumanTracker/' + state, '');
        }

        public breathChange(value) {
            var state = value ? 'On' : 'Off';
            this.QiMessaging.raiseALMemoryEvent('Chokaigi2015/System/Breath/' + state, '');
        }

        public unlockSafetyChange(value) {
            var state = value ? 'On' : 'Off';
            this.QiMessaging.raiseALMemoryEvent('Chokaigi2015/System/UnlockSafety/' + state, '');
        }

        public wakeup() {
            this.ALMotion.wakeUp();
        }

        public rest() {
            this.ALMotion.rest();
        }

        public stand() {
            this.ALRobotPosture.applyPosture("Stand", 1);
        }
    }
}
