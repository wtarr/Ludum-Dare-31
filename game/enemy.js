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
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game, x, y, playref, mainref) {
            _super.call(this, game, x, y, 'snowman', 0);
            this.nextFire = 0;
            this.fireRate = 2000;
            this.game = game;
            this.main = mainref;
            this.playerref = playref;
            this.game.physics.enable(this);
            this.body.immovable = true;
            this.anchor.setTo(0.5, 0.5);
            this.animations.add('walk', [1, 2], 10, true);
            this.InitialiseSnowballGroup();
            game.add.existing(this);
        }
        Enemy.prototype.InitialiseSnowballGroup = function () {
            this.snowballGroup = this.game.add.group();
            this.snowballGroup.enableBody = true;
            this.snowballGroup.physicsBodyType = Phaser.Physics.ARCADE;
            this.snowballGroup.createMultiple(100, 'snowball', 0, false);
            this.snowballGroup.setAll('anchor.x', 0.5);
            this.snowballGroup.setAll('anchor.y', 0.5);
            this.snowballGroup.setAll('outOfBoundsKill', true);
            this.snowballGroup.setAll('checkWorldBounds', true);
        };
        Enemy.prototype.update = function () {
            this.game.physics.arcade.collide(this.playerref, this.snowballGroup, this.snowBallHitPlayer, null, this);
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.body.angularVelocity = 0;
            if (this.game.physics.arcade.distanceBetween(this, this.playerref) > 100) {
                this.rotation = this.game.physics.arcade.moveToObject(this, this.playerref, 30);
            }
            else {
                if (this.game.time.now > this.nextFire && this.snowballGroup.countDead() > 0 && this.alive) {
                    this.nextFire = this.game.time.now + this.fireRate;
                    var snowball = this.snowballGroup.getFirstExists(false);
                    snowball.reset(this.x, this.y);
                    snowball.lifespan = 2000;
                    this.game.physics.arcade.moveToObject(snowball, this.playerref, 50);
                }
            }
            //if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            //this.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.playerref.angle, 50));
            //this.animations.play('walk');
            //}
            //else {
            //    this.frame = 0;
            //}
        };
        Enemy.prototype.snowBallHitPlayer = function (player, snowball) {
            snowball.kill();
            this.main.playerTakeDamage();
            console.log("Player hit by snowball");
        };
        return Enemy;
    })(Phaser.Sprite);
    LD31.Enemy = Enemy;
})(LD31 || (LD31 = {}));
//# sourceMappingURL=enemy.js.map