// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  _playerB: Fighter;

  constructor(player:Fighter, playerB: Fighter) {
    super(player);
    this._playerB = playerB;
  }

  duel(): void {
    if (this.player.lifePoints !== -1) {
      this.player.attack(this._playerB);
    }

    if (this._playerB.lifePoints !== -1) {
      this._playerB.attack(this.player);
    }
  }

  fight(): number {
    do {
      this.duel();
    } while (this._playerB.lifePoints !== -1 && this.player.lifePoints !== -1);

    if (this.player.lifePoints !== -1) {
      return 1;
    }
    
    return -1;
  }
}

export default PVP;

// const fighter1 = new Character('Kauan');
// const fighter2 = new Character('Legolas');

// const p1 = new PVP(fighter1, fighter2);
// p1.fight();