function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  if(this._isSamePick()) return null;

  if(this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1) {
  	return this.player1;
  } else {
  	return this.player2;
  }
};

Game.prototype.loser = function() {
  return (this.winner() === this.player1) ? this.player2 : this.player1;
};

Game.prototype.PAIRS = {
	rock:     { beats: ['scissors','lizard'] },
  paper:    { beats: ['rock', 'spock'] },
  scissors: { beats: ['paper', 'lizard'] },
  spock: 		{ beats: ['scissors', 'rock'] },
  lizard: 	{ beats: ['spock', 'paper'] }
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.winnerName = function() {
  if (this.winner() === this.player1) {
    return this.player1.name;
  } else {
    return this.player2.name;
  };
};

Game.prototype.loserName = function() {
  return (this.winnerName() === this.player1.name) ? this.player2.name : this.player1.name;
};

Game.prototype.isDraw = function() {
  if(this.winner() === null) {
    return 'draw';
  };
};

Game.prototype.messageVerb = function() {

  if ((this.winner().pick === 'rock') && (this.loser().pick === 'scissors' || 'lizard')) {
    return 'crushes'
  } else if ((this.winner().pick === 'scissors') && (this.loser().pick === 'paper')) {
    return 'cuts'
  } else if ((this.winner().pick === 'scissors') && (this.loser().pick === 'lizard')) {
    return 'decapitates'
   } else if ((this.winner().pick === 'spock') && (this.loser().pick === 'scissors')) {
    return 'smashes'
   } else if ((this.winner().pick === 'spock') && (this.loser().pick === 'rock')) {
    return 'vapourises'
  } else if ((this.winner().pick === 'lizard') && (this.loser().pick === 'paper')) {
    return 'eats'
   } else if ((this.winner().pick === 'lizard') && (this.loser().pick === 'spock')) {
    return 'poisons'
  } else if ((this.winner().pick === 'paper') && (this.loser().pick === 'rock')) {
    return 'covers'
   } else if ((this.winner().pick === 'paper') && (this.loser().pick === 'spock')) {
    return 'disproves'
  };
};

Game.prototype.winningMessage = function() {
  var message = [this.winnerName(), this.messageVerb(), this.loserName()];
  return message.join(" ");
};












