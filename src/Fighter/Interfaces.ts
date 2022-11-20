import Energy from '../Energy';

interface BasicChar {
  lifePoints: number;
  strength: number;

  receiveDamage(attackPoints:number): number;
}

interface FullChar extends BasicChar {
  defense: number;
  energy?: Energy;
}

export {
  BasicChar,
  FullChar,
};