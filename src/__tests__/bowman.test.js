import Bowman from '../bowman';

test.each([
  ['Alise', 'Bowman', 
    {
      name: 'Alise', 
      type: 'Bowman', 
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
  ],
  ['Bob', undefined,
    {
      name: 'Bob', 
      type: 'Bowman', 
      health: 100,
      level: 1,
      attack: 25,
      defence: 25
    }
  ]
])// eslint-disable-next-line
('testin Character class with %s name and %s type', (name, type, expected) => {
  const result = new Bowman(name, type);
  expect(result).toEqual(expected);
});

test.each([
  ['A', 'Bowman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Abrakadabra', 'Bowman', new Error("Имя должно быть не менее 2 и не более 10 символов")],
  ['Zombie', 'Abrakadabra', new Error("Тип не найден")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    new Bowman(name, type);
  }
  expect(result).toThrow(expected);
});


test.each([
  ['Alise', 'Bowman', 1, 2],
  ['Bob', 'Bowman', 9, 10],
  ['Zombie', 'Bowman', 100, 101]
])// eslint-disable-next-line
('testin levelUp method with %s name, %s type and %i levelUp', (name, type, index, expected) => {
  const result = new Bowman(name, type);
  for (let i = 0; i < index; i += 1) {
    result.levelUp();
  }
  expect(result.level).toEqual(expected);
});

test.each([
  ['Zombie', 'Bowman', new Error("Нельзя повысить левел умершего")]
])// eslint-disable-next-line
('testin throws Error with %s name and %s type', (name, type, expected) => {
  function result() {
    const result = new Bowman(name, type);
    result.damage(1000);
    result.levelUp();
  }
  expect(result).toThrow(expected);
});

test.each([
  ['Alise', 'Bowman', 1000, 0],
  ['Bob', 'Bowman', 100, 25]
])// eslint-disable-next-line
('testin damage method with %s name, %s type and %i points', (name, type, points, expected) => {
  const result = new Bowman(name, type);
  result.damage(points);
  expect(result.health).toEqual(expected);
});