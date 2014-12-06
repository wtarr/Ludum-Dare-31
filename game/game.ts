/**
 * Created by William on 06/12/2014.
 */
/**
 * Created by William on 05/12/2014.
 */
/// <reference path="../js/phaser.d.ts"/>
/// <reference path="menu.ts"/>
/// <reference path="main.ts"/>
/// <reference path="gameover.ts"/>

module LD31 {
    export class LudumGame extends Phaser.Game {
        constructor() {
            super({width: 870, height: 608, renderer: Phaser.AUTO, parent: 'content', state: null})
            this.state.add('Main', LD31.Main, true);
        }
    }
}

window.onload = () => {
    new LD31.LudumGame();
};