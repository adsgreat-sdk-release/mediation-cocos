// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var NBMediation = cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {


    },

    init (appid) {
        console.log("appid:" + appid);
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "initNBMediation", "(Ljava/lang/String;)V", appid);
    },

    isRewardedVideoReady() {
        return jsb.reflection.callStaticMethod("com/nbmediation/sdk/api/unity/NmSdk", "isRewardedVideoReady", "()Z");
    },

    showRewardedVideo() {
        jsb.reflection.callStaticMethod("com/nbmediation/sdk/api/unity/NmSdk", "showRewardedVideo", "()V");
    },

    isInterstitialReady() {
        return jsb.reflection.callStaticMethod("com/nbmediation/sdk/api/unity/NmSdk", "isInterstitialReady", "()Z");
    },

    showInterstitial() {
        jsb.reflection.callStaticMethod("com/nbmediation/sdk/api/unity/NmSdk", "showInterstitial", "()V");
    },

    loadBanner(slotid){
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadBanner", "(Ljava/lang/String;)V", slotid);
    },

    showBanner(slotid){
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "(Ljava/lang/String;)V", slotid);
    },

    hideBanner(slotid){
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "(Ljava/lang/String;)V", slotid);
    },

    isBannerReady(slotid){
        return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "isBannerReady", "(Ljava/lang/String;)Z", slotid);
    },

    showSplash(appid, appname, slotid){
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showSplash", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", appid, appname, slotid);
    }

    // update (dt) {},
});
module.exports = NBMediation;