import parseJson from './parseJson';

describe('parseJson', () => {
  it('should return null fro wrong json string', () => {
    expect(parseJson('wrong json string')).toBeNull();
  });

  it('should return parsed json', () => {
    expect(parseJson('{"x": 1}')).toEqual({ x: 1 });
  });
});
