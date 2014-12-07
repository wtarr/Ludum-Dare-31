/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
/// <reference path="enemy.ts"/>
/// <reference path="player.ts"/>

module LD31 {
    export class Main extends Phaser.State {

        game:Phaser.Game;

        spriteSize: number = 32;
        mapRows: number = 19;
        mapCols: number = 25;

        //player: Phaser.Sprite;


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
        collectableResourcesGroup: Phaser.Group;


        snowmanGroup: Phaser.Group;


        buildbtn : Phaser.Button;

        // Dashboard/Inventory
        woodCount: number = 0;
        woodText: Phaser.Text;
        stoneCount: number = 0;
        stoneText: Phaser.Text;

        playerHealthCount: number = 100;
        playerHealthText: Phaser.Text;

        arrowCountText: Phaser.Text;

        nextSpawn: number = 0;
        spawnRate: number = 10000;

        enemySpawnCount: number = 0;

        snowman : LD31.Enemy;
        player : LD31.Player;

        preload() {
            this.game.load.image('grass', 'assets/grass.png');
            this.game.load.image('tree', 'assets/tree.png');
            this.game.load.image('snow', 'assets/snow.png');
            this.game.load.image('arrow', 'assets/arrow.png');
            this.game.load.image('snowball', 'assets/snowball.png');


            this.game.load.image('stone', 'assets/stone.png');
            //this.game.load.image('player', 'assets/player.png');
            this.game.load.spritesheet('player', 'assets/playerspritesheet.png', 20, 32);
            this.game.load.spritesheet('snowman', 'assets/snowmanspritesheet.png', 20, 32);
            this.game.load.image('inventory', 'assets/inventory.png');

            this.game.load.spritesheet('button', 'assets/buildbtn.png', 64, 32);
            //this.game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
        }

        create() {

           this.game.world.setBounds(0, 0, 790, 608);
           this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.grassGroup = this.game.add.group();
            this.collectableResourcesGroup = this.game.add.group();
            this.collectableResourcesGroup.enableBody = true;
            this.collectableResourcesGroup.physicsBodyType = Phaser.Physics.ARCADE;

            this.CreateInitalMap();

            this.InitialisePlayer();
            //this.InitialiseSnowPersons();

            this.InitialiseDashboard();

        }

        private InitialiseDashboard() {
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

            this.arrowCountText = this.game.add.text(815, 75, '3', {
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



        private InitialisePlayer() {
            this.player = new LD31.Player(this.game, 300, 80, this);
        }

        private spawnSnowPersons() {

            var x = Math.floor( Math.random() * this.game.width + 100 );
            var y = Math.floor( Math.random() * this.game.width + 1 );

           this.snowmanGroup = this.game.add.group();

           var snowman = new LD31.Enemy(this.game, x, y, this.player, this);
           snowman.animations.play('walk');

           this.snowmanGroup.add(snowman);

        }

        private onClick(e)
        {
            console.log("clicked");
        }

        private CreateInitalMap() {
            var row = 0;
            var index = 0;
            for (var y = 0; y < this.mapRows; y++) {
                for (var x = 0; x < this.mapCols; x++) {
                    this.grassGroup.create(x * this.spriteSize, y * this.spriteSize, 'snow');

                    var key = this.itemMap[x + row];

                    if (key == 1) {
                        var temp = this.collectableResourcesGroup.create(x * this.spriteSize, y * this.spriteSize, 'tree');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }
                    else if (key == 2)
                    {
                        var temp = this.collectableResourcesGroup.create(x * this.spriteSize, y * this.spriteSize, 'stone');
                        temp.body.immovable = true;
                        temp.name = "" + (x * this.spriteSize) + ":" + (y * this.spriteSize) + ":" + index;
                    }

                    index ++;
                }
                row += this.mapCols;
            }

        }


        update() {
            if (this.game.time.now > this.nextSpawn)
            {
                this.nextSpawn = this.game.time.now + this.spawnRate;

                // todo spawn a new snowman enemy

                console.log("new enemy");

                this.spawnSnowPersons();
            }
        }

        render() {
            //this.game.debug.text("OMFG its really a game", 20, 80);
            //this.game.debug.spriteInfo(this.player, 32, 32);
        }

        setWoodCount(){
            this.woodCount++;
            this.woodText.text = this.woodCount.toString();
        }

        updateArrowCount(newcount: number) {
            this.arrowCountText.text = newcount.toString();
        }

        setIncrementStoneCount(){
            this.stoneCount++;
            this.stoneText.text = this.stoneCount.toString();
        }

        craftArrows() {

        }

        playerTakeDamage(){
            this.playerHealthCount -= 10;
            this.playerHealthText = this.playerHealthCount.toString();
        }






    }
}