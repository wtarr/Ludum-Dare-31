/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
/// <reference path="main.ts"/>
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
            this.game.add.image(0, 0, 'end');
            this.finalScore = this.game.add.text(this.game.width / 2 - 40, 10, "00:00:00", {
                font: "20px Arial",
                fill: "#ff0000",
                align: "right"
            });
            var seconds = LD31.Main.Timetotal;
            var h = Math.floor(seconds / 3600);
            var m = Math.floor((seconds - (h * 3600)) / 60);
            var s = seconds - (h * 3600) - (m * 60);
            var hs, ms, ss;
            hs = (h < 10) ? "0" + h.toString() : +h.toString();
            ms = (m < 10) ? "0" + m.toString() : +m.toString();
            ss = (s < 10) ? "0" + s.toString() : +s.toString();
            this.finalScore.text = hs + ":" + ms + ":" + ss;
        };
        GameOver.prototype.update = function () {
        };
        GameOver.prototype.render = function () {
        };
        return GameOver;
    })(Phaser.State);
    LD31.GameOver = GameOver;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=gameover.js.map