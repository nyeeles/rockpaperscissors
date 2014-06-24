describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;

  beforeEach(function() {
    player1 = new Player('Alex');
    player2 = new Player('Bob');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });

      it('should lose to spock', function() {

        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('should beat spock', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });

       it('should lose to lizard', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should beat lizard', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to spock', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {

        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);

      });

      it('should beat paper', function() {

        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });
    });

    describe('spock', function() {

      it('should beat scissors', function() {

        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

      it('should beat rock', function() {

        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to lizard', function() {

        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);

      });

      it('should lose to paper', function() {

        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
        expect(game.loser()).toBe(player2);

      });
    });
  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

  describe('winners message', function() {

    describe('should say', function() {

      it('winners name', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winnerName()).toEqual(player1.name);
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winnerName()).toEqual(player2.name);
      });

      it('losers name', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.loserName()).toEqual(player2.name);
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.loserName()).toEqual(player1.name);
      });

      it("'draw' if no player wins", function() {
        player1.picks('rock');
        player2.picks('rock');
        expect(game.isDraw()).toEqual('draw');
      });


      it("correct key word for winner\'s choice", function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.messageVerb()).toEqual('crushes');
      });

      it("correct key word for winner\'s choice", function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.messageVerb()).toEqual('crushes');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.messageVerb()).toEqual('cuts');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.messageVerb()).toEqual('decapitates');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.messageVerb()).toEqual('smashes');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.messageVerb()).toEqual('vapourises');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.messageVerb()).toEqual('poisons');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.messageVerb()).toEqual('eats');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.messageVerb()).toEqual('disproves');
      });

       it("correct key word for winner\'s choice", function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.messageVerb()).toEqual('covers');
      });
    });

  });

});

