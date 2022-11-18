import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static rangerCount = 0;
  private _energy:EnergyType = 'stamina';

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    this.rangerCount += 1;
    return this.rangerCount;
  }
}

export default Ranger;