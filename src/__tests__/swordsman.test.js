import Swordsman from '../swordsman';

test.each([
  ['Alise', 'Swordsman', 
    {
      name: 'Alise', 
      type: 'Swordsman', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Swordsman', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Swordsman(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Swordsman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Swordsman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Swordsman(name, type);
  }
  expect(result).toThrow(expected);
});


test.each([
  ['Alise', 'Swordsman', 1, 2],
  ['Bob', 'Swordsman', 9, 10],
  ['Zombie', 'Swordsman', 100, 101]
])// eslint-disable-next-line
('testin levelUp method with %s name, %s type and %i levelUp', (name, type, index, expected) => {
  const result = new Swordsman(name, type);
  for (let i = 0; i < index; i += 1) {
    result.levelUp();
  }
  expect(result.level).toEqual(expected);
});

test.each([
  ['Zombie', 'Swordsman', new Error("Нельзя повысить левел умершего")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    const result = new Swordsman(name, type);
    result.damage(1000);
    result.levelUp();
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Swordsman', 1000, 0],
  ['Bob', 'Swordsman', 100, 10]
])// eslint-disable-next-line
('testin damage method with %s name, %s type and %i points', (name, type, points, expected) => {
  const result = new Swordsman(name, type);
  result.damage(points);
  expect(result.health).toEqual(expected);
});