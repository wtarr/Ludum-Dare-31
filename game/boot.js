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
        Boot.prototype.create = function () {
            this.game.state.start('Menu', true, false);
        };
        Boot.prototype.update = function () {
        };
        Boot.prototype.render = function () {
            this.game.debug.text("Loading ...", 20, 80);
        };
        return Boot;
    })(Phaser.State);
    LD31.Boot = Boot;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=boot.js.map