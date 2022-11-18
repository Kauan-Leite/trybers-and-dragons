import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static mageCount = 0;
  private _energy:EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    this.mageCount += 1;
    return this.mageCount;
  }
}

export default Mage;