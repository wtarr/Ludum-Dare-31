var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
var LD31;
(function (LD31) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
            this.startTriggered = false;
        }
        Boot.prototype.preload = function () {
            this.load.image('loading', 'assets/loading.png');
        };
        Boot.prototype.create = function () {
            this.game.state.start('Preloader', true, false);
        };
        Boot.prototype.update = function () {
        };
        Boot.prototype.render = function () {
        };
        return Boot;
    })(Phaser.State);
    LD31.Boot = Boot;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=boot.js.map