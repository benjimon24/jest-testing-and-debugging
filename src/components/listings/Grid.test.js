import data from '../../data/courses.json';

const dataLength = data.length;

describe('Number Tests', () => {
  test('Number of items = 12', () => {
    expect(dataLength).toBe(12);
  });

  test('Number of items >= 12', () => {
    expect(dataLength).toBeGreaterThanOrEqual(12);
  });
});

const dataItem = data[0].title;

describe('Strings', () => {
  test('There is a JS in the title', () => {
    expect(dataItem).toMatch(/JS/);
  });

  test('The title contains React', () => {
    expect(dataItem).toContain('React');
  });
});

const dataArray = ['React Native', 'MeteorJS'];

describe('Arrays', () => {
  test('The list of courses mentions React Native and MeteorJS', () => {
    // console.log(expect.arrayContaining(dataArray));
    expect(['React Native', 'MeteorJS', 'React']).toEqual(expect.arrayContaining(dataArray));
  });
});

describe('Objects', () => {
  test('The first course to have property of title', () => {
    expect(data[0]).toHaveProperty('title');
  });

  test('The first course to have property of title', () => {
    expect(data[0]).toHaveProperty('views', '31,266');
  });
});
