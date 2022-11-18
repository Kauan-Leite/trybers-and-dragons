import Race from './Race';

class Halfling extends Race {
  private static halflingCount = 0;
  private _lifePoints = 60;

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances() {
    this.halflingCount += 1;
    return this.halflingCount;
  }
}

export default Halfling;