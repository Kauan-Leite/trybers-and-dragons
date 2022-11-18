import Race from './Race';

class Dwarf extends Race {
  private static dwarfCount = 0;
  private _lifePoints = 80;

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances() {
    this.dwarfCount += 1;
    return this.dwarfCount;
  }
}

export default Dwarf;