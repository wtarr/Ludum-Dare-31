/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LD31;
(function (LD31) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.apply(this, arguments);
        }
        GameOver.prototype.preload = function () {
        };
        GameOver.prototype.create = function () {
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype.render = function () {
            this.game.debug.text("Game over", 0, 80);
        };
        return GameOver;
    })(Phaser.State);
    LD31.GameOver = GameOver;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=gameover.js.map