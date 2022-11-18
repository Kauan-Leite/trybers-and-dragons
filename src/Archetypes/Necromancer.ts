import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static necromancerCount = 0;
  private _energy:EnergyType = 'mana';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    this.necromancerCount += 1;
    return this.necromancerCount;
  }
}

export default Necromancer;