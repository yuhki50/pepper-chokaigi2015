/// <reference path='../_all.ts' />

// require socket.io-client

module chokaigi2015 {
    'use strict';

    export class QiMessaging {
        public static $inject = [];

        constructor() {
        }

        getService(name:string, doneCallback:Function):void {
            var jq:any = $;
            jq.getService(name, doneCallback);
        }

        raiseALMemoryEvent(name:string, value:any):void {
            var jq:any = $;
            jq.raiseALMemoryEvent(name, value);
        }

        subscribeToALMemoryEvent(name:string, eventCallback:Function, subscribeDoneCallback:Function):void {
            var jq:any = $;
            jq.subscribeToALMemoryEvent(name, eventCallback, subscribeDoneCallback);
        }

        socket():SocketIOClient.Socket {
            var jq:any = $;
            return jq.qim.socket();
        }
    }
}
