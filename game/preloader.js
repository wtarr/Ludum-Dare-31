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
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            _super.apply(this, arguments);
        }
        Preloader.prototype.preload = function () {
            this.loadingBar = this.add.sprite(200, 250, 'loading');
            this.load.setPreloadSprite(this.loadingBar);
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
        Preloader.prototype.create = function () {
            var _this = this;
            var tween = this.add.tween(this.loadingBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(function () {
                _this.game.state.start('Menu', true, false);
            }, this);
        };
        Preloader.prototype.update = function () {
        };
        Preloader.prototype.render = function () {
        };
        return Preloader;
    })(Phaser.State);
    LD31.Preloader = Preloader;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=preloader.js.map