import { FullChar } from './Interfaces';

interface Fighter extends FullChar {
  attack(enemy:Fighter): void;

  special?(enemy:Fighter): void;
  
  levelUp(): void;
}

export default Fighter;