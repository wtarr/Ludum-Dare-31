/**
 * Created by William on 07/12/2014.
 */
/**
 * Created by William on 07/12/2014.
 */
/// <reference path="../lib/phaser.d.ts"/>
///<reference path="main.ts"/>

module LD31 {

    export class Player extends Phaser.Sprite {



        game : Phaser.Game;

        main: Main;

        arrowGroup: Phaser.Group;

        //playerCanMove: boolean = true;

        arrowCount: number = 3;


        nextFire: number = 0;
        fireRate: number = 500;

        playerCanMove: boolean = true;

        constructor(game: Phaser.Game,  x: number, y: number, mainref: Main) {

            super(game, x, y, 'player', 0);

            this.game = game;
            this.main = mainref;

            this.game.physics.enable(this);
            //this.body.immovable = true;
            this.anchor.setTo(0.5, 0.5);

            this.animations.add('walk', [1, 2], 10, true);

            game.add.existing(this);

            this.InitialiseArrowGroup();

        }

        private InitialiseArrowGroup() {
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
        }

        update() {

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
        }

        render(){

        }

        private collideWithResourceCallback(one, other) {

            this.playerCanMove = false;
            this.main.forageAudio.play();

            var key = other.key;
            other.kill();

            var item = other.name.split(":");

            var temp = this.game.add.sprite(parseInt(item[0]), parseInt(item[1]), key);
            //temp.body.immovable = true;

            this.main.itemMap[parseInt(item[2])] = 0;

            console.log("Collecting resource");

            this.game.add.tween(temp.scale).to({x: 1.1, y: 1.1}, 2000, Phaser.Easing.Bounce.InOut, true).onComplete.add(() => {

                this.game.add.tween(temp).to({x: 850, y: 10}, 500, Phaser.Easing.Cubic.Out, true, 0, 0, false).onComplete.add(() => {

                    if (key === 'tree')
                    {
                        this.main.setWoodCount();
                        this.main.playerIncereaseHealth();


                    }
                    else if (key === 'stone') {
                        this.main.setIncrementStoneCount();
                    }

                    temp.kill();
                    this.playerCanMove = true;

                },this);

            }, this);

        }

        arrowHitSnowman(arrow, snowman) {

            this.main.hitSound.play();
            console.log("arrow hit snowman");

            arrow.kill();
            snowman.kill();

        }

        collideWithPickup(player, pickup){

            console.log("Collide with pickup");

            pickup.kill();

            this.arrowCount += 3;
            this.main.updateArrowCount(this.arrowCount);

        }











    }


}