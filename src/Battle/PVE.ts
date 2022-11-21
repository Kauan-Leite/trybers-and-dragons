import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  monsters: SimpleFighter[];

  constructor(player: Fighter, enemys: SimpleFighter[]) {
    super(player);
    this.monsters = enemys;
  }

  duel(): void {
    this.monsters.forEach((element) => {
      if (this.player.lifePoints > 0) {
        this.player.attack(element);
      }
      if (element.lifePoints > 0) {
        element.attack(this.player);
      }
    });
  }

  fight(): number {
    do {
      this.duel();
    } while (this.player.lifePoints !== -1 && (
      this.monsters.every((element) => element.lifePoints !== -1)));

    if (this.player.lifePoints !== -1) {
      return 1;
    }
    
    return -1;
  }
}

export default PVE;
