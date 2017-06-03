"use strict";
let deckStore = require("../constants/deck");
let deck = deckStore.slice();

class LifeCycle {

	static init() {

	}

	static shuffle() {
		deck.push(deck);
		let m = deck.length;
		let t, i;
		// While there remain elements to shuffle…
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m);
			m -= 2;
			// And swap it with the current element.
			t = deck[m];
			deck[m] = deck[i];
			deck[i] = t;
		}
	}

	static toss(n) {
		let i = 0;
		let toss = [];
		while (n > 0) {
			i = Math.floor(Math.random() * deck.length);
			toss.push(deck[i]);
			deck.splice(i, 1);
			n--;
		}
		deck = deckStore.slice();
		return toss;
	}

	static createArena(n) {
		const arena = {};
		for (var i = 0; i < n; i++) {
			arena[i] = [];
		}
		return arena;
	}

	static distributeCards(n) {
		deck = deck.splice(n, deck.length).concat(deck.splice(0, n));
		const arena = this.createTeam();
		var player = 0;
		for (var i = 0; i < n * 13; i++) {
			if (player === n) {
				player = 0;
			}
			arena[player].push(deck[i]);
		}
	}


}

module.exports = LifeCycle;