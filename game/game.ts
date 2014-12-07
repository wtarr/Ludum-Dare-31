/**
 * Created by William on 06/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
/// <reference path="menu.ts"/>
/// <reference path="main.ts"/>
/// <reference path="gameover.ts"/>

module LD31 {
    export class LudumGame extends Phaser.Game {

        timeTotal : number;

        constructor() {
            super({width: 870, height: 608, renderer: Phaser.AUTO, parent: 'content', state: null});

            this.state.add('Menu', LD31.Menu, false);
            this.state.add('Main', LD31.Main, false);
            this.state.add('GameOver', LD31.GameOver, false);

            this.state.start('Menu');
        }
    }
}

window.onload = () => {
    new LD31.LudumGame();
};