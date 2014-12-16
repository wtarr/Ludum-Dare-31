/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../lib/phaser.d.ts"/>
/// <reference path="preloader.ts"/>
/// <reference path="boot.ts"/>
/// <reference path="menu.ts"/>
/// <reference path="main.ts"/>
/// <reference path="gameover.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LD31;
(function (LD31) {
    var LudumGame = (function (_super) {
        __extends(LudumGame, _super);
        function LudumGame() {
            _super.call(this, { width: 870, height: 608, renderer: Phaser.AUTO, parent: 'content', state: null });
            this.state.add('Boot', LD31.Boot, false);
            this.state.add('Preloader', LD31.Preloader, false);
            this.state.add('Menu', LD31.Menu, false);
            this.state.add('Main', LD31.Main, false);
            this.state.add('GameOver', LD31.GameOver, false);
            this.state.start('Boot');
        }
        return LudumGame;
    })(Phaser.Game);
    LD31.LudumGame = LudumGame;
})(LD31 || (LD31 = {}));
window.onload = function () {
    new LD31.LudumGame();
};
//# sourceMappingURL=game.js.map