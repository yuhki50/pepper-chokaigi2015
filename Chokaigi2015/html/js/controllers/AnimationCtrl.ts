/// <reference path='../_all.ts' />

module chokaigi2015 {
    'use strict';

    export class AnimationCtrl {
        private ALBehaviorManager;
        private ALTextToSpeech;

        private randomIntervalTimer;
        private randomIntervalState = false;

        public animationBehaviorItems:AnimationBehaviorItem[] = [
            new AnimationBehaviorItem('やっほー　みなさん、Pepperです', '馬車', 'yoshimotomotion-efa3ec/ノーマル/n_片手上げて見渡す', 2000, ['やっほー', 'みなさーん、Pepperでーす！', 'こっちみてくださーい']),
            new AnimationBehaviorItem('やっほー　みなさん、Pepperです', '馬車', 'yoshimotomotion-efa3ec/ノーマル/n_片手高く上げてバイバイ', 2000, ['やっほー', 'みなさーん、Pepperでーす！']),
            new AnimationBehaviorItem('いってらっしゃーい', '馬車', 'yoshimotomotion-efa3ec/ノーマル/n_片手高く上げてバイバイ', 2000, ['いってらっしゃーい', 'ばいばーい']),

            new AnimationBehaviorItem('いっくぞー！', '馬車', 'yoshimotomotion-efa3ec/ポジティブ/+_いっくぞー！', 2000, ['いくぞー！']),
            new AnimationBehaviorItem('わくわく', '馬車', 'yoshimotomotion-efa3ec/ポジティブ/+_わくわく', 1500, ['わくわく', 'わくわく、、、わくわく']),

            new AnimationBehaviorItem('やっほー　みなさん、Pepperです long', '馬車', 'basha/motion1', 2000, ['やっほー', 'みなさーん、Pepperでーす！', 'こっちみてくださーい']),
            new AnimationBehaviorItem('やっほー　みなさん、Pepperです long', '馬車', 'basha/motion2', 2000, ['やっほー', 'みなさーん、Pepperでーす！']),
            new AnimationBehaviorItem('いってらっしゃーい long', '馬車', 'basha/motion1', 2000, ['いってらっしゃーい', 'ばいばーい']),

            new AnimationBehaviorItem('足元に気をつけてくださいね', '馬車', 'yoshimotomotion-efa3ec/ノーマル/n_やや右！', 1000, ['足元に気をつけてくださいね', '焦っちゃダメですよ']),

            new AnimationBehaviorItem('お帰りなさーい long', '馬車', 'basha/motion1', 2000, ['皆さん、お帰りなさーい、忘れ物をしないように気を付けてね！', '皆さん、お帰りなさーい']),

            new AnimationBehaviorItem('オッス！', '馬車', 'yoshimotomotion-efa3ec/ノーマル/n_オッス！', 1500, ['おっす！', 'やあ！', 'こんにちわ']),


            new AnimationBehaviorItem('いっくぞー！', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_いっくぞー！', 2000, ['いくぞー！']),
            new AnimationBehaviorItem('わくわく', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_わくわく', 1500, ['わくわく', 'わくわく、、、わくわく']),
            new AnimationBehaviorItem('エクセレント！', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_エクセレント！', 1500, ['エクセレント！', 'すごいぞー！']),
            new AnimationBehaviorItem('ドヤ', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_ドヤ', 1000, ['どやー']),
            new AnimationBehaviorItem('バンザイ', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_バンザイ', 1500, ['ばんざぁーい']),
            new AnimationBehaviorItem('バンザイ2', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_バンザイ2', 2000, ['ばんざぁーい、、、ばんざぁーい']),
            new AnimationBehaviorItem('パーフェクト！', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_パーフェクト！', 2000, ['パーフェクト']),
            new AnimationBehaviorItem('上向きガッツ', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_上向きガッツ', 0, ['よっしゃー', 'よし']),
            new AnimationBehaviorItem('片手ずつバンザイ', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_片手ずつバンザイ', 2000, ['ばんざぁーい、ばんざぁーい']),
            new AnimationBehaviorItem('片手でガッツポーズ', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_片手でガッツポーズ', 1000, ['よっしゃー']),
            new AnimationBehaviorItem('腕自慢', 'ポジティブ', 'yoshimotomotion-efa3ec/ポジティブ/+_腕自慢', 1800, ['へへっ、、']),

            new AnimationBehaviorItem('あせってフリック', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_あせってフリック', 2000, ['どーしよー']),
            new AnimationBehaviorItem('いいですか？', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_いいですか？', 2000, ['いいですか？']),
            new AnimationBehaviorItem('うなずき', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_うなずき', 0, ['うん', 'はい', 'そうですか']),
            new AnimationBehaviorItem('お辞儀', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_お辞儀', 1000, ['どうもー']),
            new AnimationBehaviorItem('がっかり', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_がっかり', 2000, ['君にはがっかりです', 'がっかりです', 'がっかり']),
            new AnimationBehaviorItem('これです', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_これです', 1000, ['これです', 'これですよー', 'はい、これ']),
            new AnimationBehaviorItem('どうです皆さん', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_どうです皆さん', 1000, ['どうですか？皆さん', 'どうです皆さん', 'どうです？']),
            new AnimationBehaviorItem('もっとがっかり', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_もっとがっかり', 1000, ['君にはすごいがっかりです', 'すごいがっかりです', 'すごいがっかり']),
            new AnimationBehaviorItem('やや右！', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_やや右！', 1000, ['やや右！', 'やや右ですよー']),
            new AnimationBehaviorItem('わかりましたね？', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_わかりましたね？', 1500, ['分かりましたか？', '分かりましたね！']),
            new AnimationBehaviorItem('オッス！', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_オッス！', 1500, ['おっす！']),
            new AnimationBehaviorItem('タブレットに注目', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_タブレットに注目', 1300, ['タブレットに注目！']),
            new AnimationBehaviorItem('タブレットを読む', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_タブレットを読む', 5000, ['ふむふむ', 'ふむふむ、タブレットの情報によると']),
            new AnimationBehaviorItem('両手でしゅーりょー！', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手でしゅーりょー！', 2000, ['しゅーりょおー']),
            new AnimationBehaviorItem('両手で煽りもっと', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手で煽りもっと', 2000, ['もっともっとー']),
            new AnimationBehaviorItem('両手で胸おさえ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手で胸おさえ', 2000, ['えーとー']),
            new AnimationBehaviorItem('両手ひろげ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手ひろげ', 1000, ['どうです？']),
            //new AnimationBehaviorItem('両手ひろげ後上げ下げなんてこった', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手ひろげ後上げ下げなんてこった', 2000, ['']),
            new AnimationBehaviorItem('両手ウッス腰へ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手ウッス腰へ', 2000, ['うっす']),
            new AnimationBehaviorItem('両手肩位置でバイバイ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_両手肩位置でバイバイ', 2000, ['ばいばーい']),
            //new AnimationBehaviorItem('口でカメラ撮影', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_口でカメラ撮影', 2000, ['']),
            new AnimationBehaviorItem('右も左も', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右も左も', 1600, ['右もー、左もー']),
            new AnimationBehaviorItem('右側のみなさん', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右側のみなさん', 2000, ['右側の皆さん']),
            //new AnimationBehaviorItem('右向き手招き', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右向き手招き', 2000, ['']),
            //new AnimationBehaviorItem('右向き頼む', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右向き頼む', 2000, ['']),
            //new AnimationBehaviorItem('右手ひろげ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右手ひろげ', 2000, ['']),
            new AnimationBehaviorItem('右手肩からバイバイロング', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右手肩からバイバイロング', 2000, ['ばいばーい']),
            new AnimationBehaviorItem('右手肩位置でバイバイ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_右手肩位置でバイバイ', 2000, ['ばいばーい']),
            //new AnimationBehaviorItem('基本姿勢', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_基本姿勢', 2000, ['']),
            //new AnimationBehaviorItem('天を仰ぐ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_天を仰ぐ', 2000, ['']),
            new AnimationBehaviorItem('左側のみなさん', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_左側のみなさん', 2000, ['左側の皆さん']),
            new AnimationBehaviorItem('左右どちら？', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_左右どちら？', 2000, ['左右どちら？']),
            //new AnimationBehaviorItem('左手ひろげ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_左手ひろげ', 2000, ['']),
            //new AnimationBehaviorItem('左手ひろげで、ですか？', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_左手ひろげで、ですか？', 2000, ['']),
            new AnimationBehaviorItem('技術部員さ～ん！', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_店員さ～ん！', 1000, ['技術部員さーん']),
            new AnimationBehaviorItem('手をポン、そうか', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_手をポン、そうか', 2000, ['そうか']),
            //new AnimationBehaviorItem('手を交互に広げ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_手を交互に広げ', 2000, ['']),
            new AnimationBehaviorItem('拍手', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_拍手', 2000, ['はくしゅー']),
            new AnimationBehaviorItem('指を広げてこんなに沢山', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_指を広げてこんなに沢山', 2000, ['こんなにたくさん']),
            //new AnimationBehaviorItem('歩く', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_歩く', 2000, ['']),
            new AnimationBehaviorItem('片手でどうぞ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_片手でどうぞ', 1000, ['どうぞ！']),
            new AnimationBehaviorItem('片手でタブレット注目', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_片手でタブレット注目', 1000, ['タブレットに注目ー', 'タブレットに注目ですよー']),
            //new AnimationBehaviorItem('片手で胸をグっ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_片手で胸をグっ', 2000, ['']),
            new AnimationBehaviorItem('片手上げて見渡す', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_片手上げて見渡す', 2000, ['']),
            new AnimationBehaviorItem('片手高く上げてバイバイ', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_片手高く上げてバイバイ', 2000, ['ばいばーい']),
            //new AnimationBehaviorItem('眺める', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_眺める', 2000, ['']),
            //new AnimationBehaviorItem('胸に手(閉じて）', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_胸に手(閉じて）', 2000, ['']),
            //new AnimationBehaviorItem('胸に手(開く）', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_胸に手(開く）', 2000, ['']),
            //new AnimationBehaviorItem('見渡す', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_見渡す', 2000, ['']),
            //new AnimationBehaviorItem('説得', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_説得', 2000, ['']),
            //new AnimationBehaviorItem('顔さし', 'ノーマル', 'yoshimotomotion-efa3ec/ノーマル/n_顔さし', 2000, ['']),

            new AnimationBehaviorItem('あきれ', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_あきれ', 2000, ['呆れちゃいますよー', '呆れました']),
            new AnimationBehaviorItem('あり得ない', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_あり得ない', 2000, ['あり得ないですよー', 'ありえないです！']),
            new AnimationBehaviorItem('いやいや', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_いやいや', 1500, ['いやっいやっ']),
            new AnimationBehaviorItem('え！？', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_え！？', 0, ['え！？']),
            new AnimationBehaviorItem('それはない', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_それはない%20', 2000, ['それはない', 'それはないです']),
            new AnimationBehaviorItem('だめだこりゃ', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_だめだこりゃ', 1000, ['だめだこりゃ']),
            new AnimationBehaviorItem('やれやれ', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_やれやれ', 1000, ['やれっ、やれっ']),
            new AnimationBehaviorItem('わかったわかった', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_わかったわかった', 1500, ['わかった、わかった']),
            new AnimationBehaviorItem('キャー', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_キャー', 500, ['キャー']),
            new AnimationBehaviorItem('ドンマイ', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_ドンマイ', 1000, ['どんまい']),
            //new AnimationBehaviorItem('下向き', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_下向き', 2000, ['']),
            //new AnimationBehaviorItem('伏し目', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_伏し目', 1500, ['']),
            new AnimationBehaviorItem('恥ずかし', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_恥ずかし', 1000, ['はずかしー', '恥ずかしいです']),
            new AnimationBehaviorItem('普通じゃん', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_普通じゃん', 1000, ['ふつうじゃん']),
            new AnimationBehaviorItem('照れ', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_照れ', 1000, ['照れちゃいます', '照れちゃいますよー']),
            new AnimationBehaviorItem('絶対無理', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_絶対無理', 1500, ['絶対無理', '絶対無理です', '絶対無理ですよー']),
            new AnimationBehaviorItem('頭かきかき', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_頭かきかき', 1500, ['かきかき']),
            new AnimationBehaviorItem('首横にふる', 'ネガティブ', 'yoshimotomotion-efa3ec/ネガティブ/-_首横にふる', 1500, ['いいえ', '違いますよー']),
        ];

        public animationTabItems:AnimationTabItem[] = [];

        public static $inject = [
            '$interval',
            '$timeout',
            'QiMessaging'
        ];

        constructor(private $interval,
                    private $timeout,
                    private QiMessaging) {

            this.animationBehaviorItems.forEach((v, i, arr) => {
                var matches = this.animationTabItems.filter((vv, ii, arr) => {
                    return vv.title == v.category;
                });

                if (matches.length == 0) {
                    this.animationTabItems.push(new AnimationTabItem(v.category, [v]));
                } else {
                    matches[0].animationBehaviorItems.push(v);
                }
            });

            QiMessaging.getService('ALBehaviorManager', (service) => {
                this.ALBehaviorManager = service;
            });

            QiMessaging.getService('ALTextToSpeech', (service) => {
                this.ALTextToSpeech = service;
            });
        }

        playMotion(animationBehaviorItem:AnimationBehaviorItem):void {
            var words = animationBehaviorItem.words;
            var wordIndex = Math.floor(Math.random() * words.length % words.length);

            this.ALBehaviorManager.startBehavior(animationBehaviorItem.behaviorName);
            console.log(animationBehaviorItem.behaviorName);

            this.$timeout(() => {
                this.ALTextToSpeech.say(animationBehaviorItem.words[wordIndex]);
                console.log(animationBehaviorItem.words[wordIndex]);
            }, animationBehaviorItem.delaySay);
        }

        playRandomMotion():void {
            var length = this.animationBehaviorItems.length;
            var behaviorItemIndex = Math.floor(Math.random() * length % length);
            this.playMotion(this.animationBehaviorItems[behaviorItemIndex]);
        }

        startIntervalPlayRandomMotion():void {
            if (this.randomIntervalState) {
                return;
            }

            this.randomIntervalState = true;

            this.playRandomMotion();

            this.randomIntervalTimer = this.$interval(() => {
                this.playRandomMotion();
            }, 5 * 1000);
        }

        stopIntervalPlayRandomMotion():void {
            if (this.randomIntervalState) {
                this.$interval.cancel(this.randomIntervalTimer);
                this.randomIntervalState = false;
            }
        }
    }
}
