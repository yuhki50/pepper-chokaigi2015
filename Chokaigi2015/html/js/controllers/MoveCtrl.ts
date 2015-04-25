/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class MoveCtrl {
        public ALMotion;

        public static $inject = [
            '$interval',
            'QiMessaging'
        ];

        constructor(private $interval,
                    private QiMessaging) {
            QiMessaging.getService('ALMotion', (service) => {
                this.ALMotion = service;
            });
        }

        public msg = '';

        private dx:number = 0;
        private dy:number = 0;
        private rotation:number = 0;

        private intervalPromise:angular.IPromise<any>;

        public handleRotationGesture($event:HammerInput) {
            console.log('button event', $event);

            var dx = $event.deltaX / 300 * -1;
            var dy = $event.deltaY / 300 * -1;
            var angleRad = $event.angle * 3.14 / 180;
            var rotationRad = $event.rotation * 3.14 / 180 * -1;
            var distance = $event.distance / 100;

            this.msg = '';
            this.msg += 'type:' + $event.type + '\n';
            this.msg += 'angle:' + $event.angle + '\n';
            this.msg += 'rotation:' + rotationRad + '\n';
            this.msg += 'distance:' + $event.distance + '\n';
            this.msg += 'deltaX:' + dx + '\n';
            this.msg += 'deltaY:' + dy + '\n';

            this.dx = -Math.sin(angleRad) * distance;
            this.dy = -Math.cos(angleRad) * distance;
            this.rotation = rotationRad;

            this.ALMotion.moveToward(this.dx, this.dy, this.rotation);

            $event.srcEvent.stopPropagation();
        }

        public panstart($event:HammerInput) {

        }

        public panend($event:HammerInput) {
            this.stop($event);
        }

        public stop($event:HammerInput) {
            this.$interval.cancel(this.intervalPromise);

            this.ALMotion.move(0, 0, 0);

            this.$interval(() => {
                this.ALMotion.move(0, 0, 0);
                this.msg = 'stop';
            }, 100, 5);

            this.msg = 'stop';
        }
    }
}
