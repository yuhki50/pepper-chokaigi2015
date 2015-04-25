/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class VoiceCtrl {
        private ALAnimatedSpeech;

        public speechText = '';

        public static $inject = [
            '$timeout',
            'QiMessaging'
        ];

        constructor(private $timeout,
                    private QiMessaging) {

            QiMessaging.getService('ALAnimatedSpeech', (service) => {
                this.ALAnimatedSpeech = service;
            });
        }

        say(speech):void {
            this.ALAnimatedSpeech.say(speech);
            this.speechText = '';
        }
    }
}
