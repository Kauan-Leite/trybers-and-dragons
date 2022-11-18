import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static warriorCount = 0;
  private _energy:EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    this.warriorCount += 1;
    return this.warriorCount;
  }
}

export default Warrior;