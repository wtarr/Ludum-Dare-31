/**
 * Created by William on 05/12/2014.
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
    var SimpleGame = (function (_super) {
        __extends(SimpleGame, _super);
        function SimpleGame() {
            _super.call(this, { width: 800, height: 600, renderer: Phaser.AUTO, parent: 'content', state: null });
            this.state.add('default', Menu, true);
        }
        return SimpleGame;
    })(Phaser.Game);
    LD31.SimpleGame = SimpleGame;
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
        }
        Menu.prototype.preload = function () {
        };
        Menu.prototype.create = function () {
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.render = function () {
            this.game.debug.text("Hello()", 0, 80);
        };
        return Menu;
    })(Phaser.State);
    LD31.Menu = Menu;
    var GameState = (function (_super) {
        __extends(GameState, _super);
        function GameState() {
            _super.apply(this, arguments);
        }
        GameState.prototype.preload = function () {
        };
        GameState.prototype.create = function () {
        };
        GameState.prototype.update = function () {
        };
        GameState.prototype.render = function () {
            this.game.debug.text("Hello()", 0, 80);
        };
        return GameState;
    })(Phaser.State);
    LD31.GameState = GameState;
    var GameOverState = (function (_super) {
        __extends(GameOverState, _super);
        function GameOverState() {
            _super.apply(this, arguments);
        }
        GameOverState.prototype.preload = function () {
        };
        GameOverState.prototype.create = function () {
        };
        GameOverState.prototype.update = function () {
        };
        GameOverState.prototype.render = function () {
            this.game.debug.text("Hello()", 0, 80);
        };
        return GameOverState;
    })(Phaser.State);
    LD31.GameOverState = GameOverState;
})(LD31 || (LD31 = {}));
window.onload = function () {
    var game = new LD31.SimpleGame();
};
//# sourceMappingURL=app.js.map