import { FullChar } from './Interfaces';
import SimpleFighter from './SimpleFighter';

interface Fighter extends FullChar {
  attack(enemy: SimpleFighter): void;

  special?(enemy: SimpleFighter): void;
  
  levelUp(): void;
}

export default Fighter;