import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("name","string",'launchDate','orbitType',true)).toBeTruthy();
  });
});
