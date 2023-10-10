import Character from './character';
// eslint-disable-next-line
export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}