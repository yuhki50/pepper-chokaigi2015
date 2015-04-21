/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class AnimationTabItem {
        constructor(public title:string,
                    public animationBehaviorItems:AnimationBehaviorItem[],
                    public active?:boolean) {

        }
    }
}
