import Zombie from '../zombie';

test.each([
  ['Alise', 'Zombie', 
    {
      name: 'Alise', 
      type: 'Zombie', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Zombie', 
      health: 100,
      level: 1,
      attack: 40,
      defence: 10
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Zombie(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Zombie', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Zombie', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Zombie(name, type);
  }
  expect(result).toThrow(expected);
});


test.each([
  ['Alise', 'Zombie', 1, 2],
  ['Bob', 'Zombie', 9, 10],
  ['Zombie', 'Zombie', 100, 101]
])// eslint-disable-next-line
('testin levelUp method with %s name, %s type and %i levelUp', (name, type, index, expected) => {
  const result = new Zombie(name, type);
  for (let i = 0; i < index; i += 1) {
    result.levelUp();
  }
  expect(result.level).toEqual(expected);
});

test.each([
  ['Zombie', 'Zombie', new Error("Нельзя повысить левел умершего")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    const result = new Zombie(name, type);
    result.damage(1000);
    result.levelUp();
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Undead', 1000, 0],
  ['Bob', 'Zombie', 100, 10]
])// eslint-disable-next-line
('testin damage method with %s name, %s type and %i points', (name, type, points, expected) => {
  const result = new Zombie(name, type);
  result.damage(points);
  expect(result.health).toEqual(expected);
});