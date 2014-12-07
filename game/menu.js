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
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.apply(this, arguments);
            this.startTriggered = false;
        }
        Menu.prototype.preload = function () {
            this.game.load.image('start', 'assets/startscreen.png');
            this.game.load.image('tree', 'assets/tree.png');
            this.game.load.image('snow', 'assets/snow.png');
            this.game.load.image('arrow', 'assets/arrow.png');
            this.game.load.image('arrowpickup', 'assets/arrowpickup.png');
            this.game.load.image('snowball', 'assets/snowball.png');
            this.game.load.audio('forage', 'audio/forage.wav');
            this.game.load.audio('hit', 'audio/hithurt.wav');
            this.game.load.audio('theme', 'audio/theme.wav');
            this.game.load.image('stone', 'assets/stone.png');
            //this.game.load.image('player', 'assets/player.png');
            this.game.load.spritesheet('player', 'assets/playerspritesheet.png', 20, 32);
            this.game.load.spritesheet('snowman', 'assets/snowmanspritesheet.png', 20, 32);
            this.game.load.image('inventory', 'assets/inventory.png');
            this.game.load.spritesheet('button', 'assets/craftBtn.png', 64, 32);
            this.game.load.image('end', 'assets/endscreen.png');
        };
        Menu.prototype.create = function () {
            var _this = this;
            this.game.add.image(0, 0, 'start');
            this.game.input.keyboard.onDownCallback = function () {
                if (!_this.startTriggered) {
                    console.log("start triggered!");
                    _this.startTriggered = true;
                    _this.game.state.start('Main', true, false);
                }
            };
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype.render = function () {
        };
        return Menu;
    })(Phaser.State);
    LD31.Menu = Menu;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=menu.js.map