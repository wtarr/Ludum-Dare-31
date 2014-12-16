/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../../lib/phaser.d.ts"/>
module LD31 {
    export class Menu extends Phaser.State {
        game:Phaser.Game;

        startTriggered : boolean = false;

        preload() {

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