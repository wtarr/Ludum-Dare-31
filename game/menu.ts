/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
module LD31 {
    export class Menu extends Phaser.State {
        game:Phaser.Game;

        startTriggered : boolean = false;

        preload() {
            this.game.load.image('start', 'assets/startscreen.png');

            this.game.load.image('tree', 'assets/tree.png');
            this.game.load.image('snow', 'assets/snow.png');
            this.game.load.image('arrow', 'assets/arrow.png');
            this.game.load.image('arrowpickup', 'assets/arrowpickup.png')
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

        }

        create() {

            this.game.add.image(0, 0, 'start');

            this.game.input.keyboard.onDownCallback = () => {
                if (!this.startTriggered) {
                    console.log("start triggered!");
                    this.startTriggered = true;
                    this.game.state.start('Main', true, false);
                }
            }
        }

        update() {

        }

        render() {

        }


    }
}