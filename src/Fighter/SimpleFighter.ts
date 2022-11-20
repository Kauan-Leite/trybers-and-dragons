import { BasicChar } from './Interfaces';

interface SimpleFighter extends BasicChar {
  attack(enemy:SimpleFighter): void;
}

export default SimpleFighter;