"use strict";
const deckStore = require("../constants/deck");
const constants = require("../constants/constants");
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

  static toss(n,user) {
    let i = 0;
    let toss = [];
    let max = {};
    n--;
    while (n >= 0) {
      i = Math.floor(Math.random() * deck.length);
      deck[i].user = n;
      toss.push(deck[i]);
      deck.splice(i, 1);
      n--;
    }
    return this.sortToss(toss,[1,2,3,4,5,6]);
  }

  static sortToss(toss,user) {
    let iIndex, jIndex, iSymbolIndex, jSymbolIndex;
    for (var i = 0; i < toss.length; i++) {
      for (var j = i; j < toss.length; j++) {
        iIndex = toss[i].card.value === constants.joker ? constants.cards.indexOf("A") : constants.cards.indexOf(toss[i].card.value);
        jIndex = toss[i].card.value === constants.joker ? constants.cards.indexOf("A") : constants.cards.indexOf(toss[j].card.value);

        if (iIndex < jIndex) {
          toss[i] = [toss[j], toss[j] = toss[i]][0];
          user[i] = [user[j], user[j]=user[i]][0];
        } else if (iIndex === jIndex) {
          iSymbolIndex = constants.symbols.indexOf(toss[i].card.category);
          jSymbolIndex = constants.symbols.indexOf(toss[j].card.category);
          if (iSymbolIndex < jSymbolIndex) {
            toss[i] = [toss[j], toss[j] = toss[i]][0];
            user[i] = [user[j], user[j]=user[i]][0];
          }
          //todo: if the user cards are same then make them choose again till they are not choosing the same card
        }
      }
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
    console.log("distribute cards : distribute card called");
    deck = deck.concat(deck);
    deck = deck.splice(n, deck.length).concat(deck.splice(0, n));

    const arena = this.createArena(n);
    var player = 0;
    for (var i = 0; i < n * 13; i++) {
      if (player === n) {
        player = 0;
      }
      arena[player].push(deck[i]);
      player++;
    }
    console.log(arena);
    return arena;
  }

}

module.exports = LifeCycle;
