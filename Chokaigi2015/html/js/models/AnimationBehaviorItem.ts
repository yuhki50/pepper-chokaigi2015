/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class AnimationBehaviorItem {
        public buttonClass:string;

        constructor(public name:string,
                    public category:string,
                    public behaviorName:string,
                    public delaySay:number,
                    public words:string[]) {

            if (this.category == '馬車') {
                this.buttonClass = 'info';
            } else if (this.category == 'ポジティブ') {
                this.buttonClass = 'alert';
            } else if (this.category == 'ノーマル') {
                this.buttonClass = 'success';
            } else if (this.category == 'ネガティブ') {
                this.buttonClass = '';
            }
        }
    }
}
