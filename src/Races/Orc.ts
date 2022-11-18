import Race from './Race';

class Orc extends Race {
  private static orcCount = 0;
  private _lifePoints = 74;

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances() {
    this.orcCount += 1;
    return this.orcCount;
  }
}

export default Orc;