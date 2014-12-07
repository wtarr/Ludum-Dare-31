/**
 * Created by William on 07/12/2014.
 */
/**
 * Created by William on 07/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
///<reference path="main.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LD31;
(function (LD31) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, mainref) {
            _super.call(this, game, x, y, 'player', 0);
            //playerCanMove: boolean = true;
            this.arrowCount = 3;
            this.nextFire = 0;
            this.fireRate = 500;
            this.playerCanMove = true;
            this.game = game;
            this.main = mainref;
            this.game.physics.enable(this);
            //this.body.immovable = true;
            this.anchor.setTo(0.5, 0.5);
            this.animations.add('walk', [1, 2], 10, true);
            game.add.existing(this);
            this.InitialiseArrowGroup();
        }
        Player.prototype.InitialiseArrowGroup = function () {
            this.arrowGroup = this.game.add.group();
            this.arrowGroup.enableBody = true;
            this.arrowGroup.physicsBodyType = Phaser.Physics.ARCADE;
            this.arrowGroup.createMultiple(20, 'arrow', 0, false);
            this.arrowGroup.setAll('anchor.x', 0.5);
            this.arrowGroup.setAll('anchor.y', 0.5);
            this.arrowGroup.setAll('scale.x', 1);
            this.arrowGroup.setAll('scale.y', 1);
            this.arrowGroup.setAll('outOfBoundsKill', true);
            this.arrowGroup.setAll('checkWorldBounds', true);
        };
        Player.prototype.update = function () {
            this.game.physics.arcade.collide(this.main.snowmanGroup, this.arrowGroup, this.arrowHitSnowman, null, this);
            this.game.physics.arcade.collide(this.main.collectableResourcesGroup, this, this.collideWithResourceCallback, null, this);
            this.game.physics.arcade.collide(this.main.arrowPickupGroup, this, this.collideWithPickup, null, this);
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.body.angularVelocity = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                this.body.angularVelocity = -200;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                this.body.angularVelocity = 200;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W) && this.playerCanMove) {
                this.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.angle, 100));
                this.animations.play('walk');
            }
            else {
                this.frame = 0;
            }
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                if (this.game.time.now > this.nextFire && this.arrowGroup.countDead() > 0 && this.arrowCount > 0) {
                    this.nextFire = this.game.time.now + this.fireRate;
                    var arrow = this.arrowGroup.getFirstExists(false);
                    arrow.reset(this.x, this.y);
                    arrow.rotation = this.rotation;
                    arrow.lifespan = 1000;
                    this.game.physics.arcade.velocityFromRotation(this.rotation, 200, arrow.body.velocity);
                    this.arrowCount--;
                    this.main.updateArrowCount(this.arrowCount);
                }
            }
        };
        Player.prototype.render = function () {
        };
        Player.prototype.collideWithResourceCallback = function (one, other) {
            var _this = this;
            this.playerCanMove = false;
            this.main.forageAudio.play();
            var key = other.key;
            other.kill();
            var item = other.name.split(":");
            var temp = this.game.add.sprite(parseInt(item[0]), parseInt(item[1]), key);
            //temp.body.immovable = true;
            this.main.itemMap[parseInt(item[2])] = 0;
            console.log("Collecting resource");
            this.game.add.tween(temp.scale).to({ x: 1.1, y: 1.1 }, 2000, Phaser.Easing.Bounce.InOut, true).onComplete.add(function () {
                _this.game.add.tween(temp).to({ x: 850, y: 10 }, 500, Phaser.Easing.Cubic.Out, true, 0, 0, false).onComplete.add(function () {
                    if (key === 'tree') {
                        _this.main.setWoodCount();
                        _this.main.playerIncereaseHealth();
                    }
                    else if (key === 'stone') {
                        _this.main.setIncrementStoneCount();
                    }
                    temp.kill();
                    _this.playerCanMove = true;
                }, _this);
            }, this);
        };
        Player.prototype.arrowHitSnowman = function (arrow, snowman) {
            this.main.hitSound.play();
            console.log("arrow hit snowman");
            arrow.kill();
            snowman.kill();
        };
        Player.prototype.collideWithPickup = function (player, pickup) {
            console.log("Collide with pickup");
            pickup.kill();
            this.arrowCount += 3;
            this.main.updateArrowCount(this.arrowCount);
        };
        return Player;
    })(Phaser.Sprite);
    LD31.Player = Player;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=player.js.map