import Character from './character';
// eslint-disable-next-line
export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}