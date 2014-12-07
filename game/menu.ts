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

        }

        create() {

            this.game.add.image(0, 0, 'start');

            this.game.input.keyboard.onDownCallback = () => {
                if (!this.startTriggered) {
                    this.startTriggered = true;
                    this.game.state.start('Main', true, false);
                }
            }
        }

        update() {

        }

        render() {
            //this.game.debug.text("Hello()", 0, 80);
        }


    }
}