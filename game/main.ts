/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>

module LD31 {
    export class Main extends Phaser.State {
        game:Phaser.Game;

        spriteSize: number = 32;
        mapRows: number = 19;
        mapCols: number = 25;

        player: Phaser.Sprite;


        itemMap : Array<number> = [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];


        grassGroup: Phaser.Group;
        treeGroup: Phaser.Group;
        arrowGroup: Phaser.Group;


        buildbtn : Phaser.Button;

        woodCount: number = 0;
        woodText: Phaser.Text;
        stoneCount: number = 0;
        stoneText: Phaser.Text;

        playerHealthCount: number = 100;
        playerHealthText: Phaser.Text;

        arrowCount: number = 0;
        arrowCountText: Phaser.Text;


        nextFire: number = 0;
        fireRate: number = 100;





        preload() {
            this.game.load.image('grass', 'assets/grass.png');
            this.game.load.image('tree', 'assets/tree.png');
            this.game.load.image('snow', 'assets/snow.png');
            this.game.load.image('arrow', 'assets/arrow.png');


            this.game.load.image('stone', 'assets/stone.png');
            //this.game.load.image('player', 'assets/player.png');
            this.game.load.spritesheet('player', 'assets/playerspritesheet.png', 20, 32);
            this.game.load.image('inventory', 'assets/inventory.png');

            this.game.load.spritesheet('button', 'assets/buildbtn.png', 64, 32);
            //this.game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
        }

        create() {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.grassGroup = this.game.add.group();
            this.treeGroup = this.game.add.group();
            this.treeGroup.enableBody = true;
            this.treeGroup.physicsBodyType = Phaser.Physics.ARCADE;

            this.CreateInitalMap();

            this.player = this.game.add.sprite(300, 80, 'player');
            this.player.animations.add('walk', [1, 2], 10, true);

            this.player.anchor.setTo(0.5, 0.5);
            //this.player.scale.x = 0.5;
            //this.player.scale.y = 0.5;
            this.game.physics.enable(this.player);


            this.arrowGroup = this.game.add.group();
            this.arrowGroup.enableBody = true;
            this.arrowGroup.physicsBodyType = Phaser.Physics.ARCADE;
            this.arrowGroup.createMultiple(20, 'arrow', 0, false);
            this.arrowGroup.setAll('anchor.x', 0.5);
            this.arrowGroup.setAll('anchor.y', 0.5);
            this.arrowGroup.setAll('outOfBoundsKill', true);
            this.arrowGroup.setAll('checkWorldBounds', true);

            this.game.add.sprite(800, 0, 'inventory');
            this.game.add.sprite(800 + 2, 21, 'tree');
            this.game.add.sprite(800 + 38, 21, 'stone');
            var arrow = this.game.add.sprite(800 + 2, 70, 'arrow');
            arrow.scale.x = 2;
            arrow.scale.y = 2;



            this.woodText = this.game.add.text(815, 40, this.woodCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "left"
            });

            this.stoneText = this.game.add.text(850, 40, this.stoneCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "right"
            });

            this.arrowCountText = this.game.add.text(815, 75, this.arrowCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "left"
            });

            this.playerHealthText = this.game.add.text(850, 75, this.playerHealthCount.toString(), {
                font: "10px Arial",
                fill: "#ffffff",
                align: "right"
            });

            this.buildbtn = this.game.add.button(800, 120, 'button', this.onClick, this, 1, 0, 0);
        }

        private onClick(e)
        {
            console.log("clicked");
        }



        CreateInitalMap() {
            var row = 0;
            var index = 0;
            for (var y = 0; y < this.mapRows; y++) {
                for (var x = 0; x < this.mapCols; x++) {
                    this.grassGroup.create(x * this.spriteSize, y * this.spriteSize, 'snow');

                    var key = this.itemMap[x + row];

                    if (key == 1) {
                        var temp = this.treeGroup.create(x * this.spriteSize, y * this.spriteSize, 'tree');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }
                    else if (key == 2)
                    {
                        var temp = this.treeGroup.create(x * this.spriteSize, y * this.spriteSize, 'stone');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }

                    index ++;
                }
                row += this.mapCols;
            }


        }



        collideCallback(one, other) {

            var key = other.key;
            other.kill();



            var item = other.name.split(":");

            var temp = this.game.add.sprite(parseInt(item[0]), parseInt(item[1]), key);
            //temp.body.immovable = true;

            this.itemMap[parseInt(item[2])] = 0;




           console.log("hit!!")
            //wother.body.enableBody = false;

            var to = this.game.add.tween(temp.scale).to({x: 1.1, y: 1.1}, 2000, Phaser.Easing.Bounce.InOut, true).onComplete.add(() => {

                var ti = this.game.add.tween(temp).to({x: 850, y: 10}, 500, Phaser.Easing.Cubic.Out, true, 0, 0, false).onComplete.add(() => {

                    if (key === 'tree')
                    {
                        this.woodCount++;
                        this.woodText.text = this.woodCount.toString();
                    }
                    else if (key === 'stone') {
                        this.stoneCount++;
                        this.stoneText.text = this.stoneCount.toString();
                    }

                    temp.kill();

                },this);

               }, this);

        }

        update() {

            this.game.physics.arcade.collide(this.treeGroup, this.player, this.collideCallback, null, this);

            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
            this.player.body.angularVelocity = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A))
            {
                this.player.body.angularVelocity = -200;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D))
            {
                this.player.body.angularVelocity = 200;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W))
            {
                this.player.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.player.angle, 100));
                this.player.animations.play('walk');

            }
            else
            {
                this.player.frame = 0;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
            {
                if (this.game.time.now > this.nextFire && this.arrowGroup.countDead() > 0)
                {
                    this.nextFire = this.game.time.now + this.fireRate;

                    var arrow = this.arrowGroup.getFirstExists(false);

                    arrow.reset(this.player.x, this.player.y);

                    arrow.rotation = this.player.rotation;

                    this.game.physics.arcade.velocityFromRotation(this.player.rotation, 400, arrow.body.velocity);
                }
            }

        }

        render() {
            //this.game.debug.text("OMFG its really a game", 20, 80);
            //this.game.debug.spriteInfo(this.player, 32, 32);
        }


    }
}