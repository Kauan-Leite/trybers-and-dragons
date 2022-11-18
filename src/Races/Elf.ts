import Race from './Race';

class Elf extends Race {
  private static elfCount = 0;
  private _lifePoints = 99;

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances() {
    this.elfCount += 1;
    return this.elfCount;
  }
}

export default Elf;