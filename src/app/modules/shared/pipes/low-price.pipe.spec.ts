import { LowPricePipe } from './low-price.pipe';

describe('LowPricePipe', () => {
  it('create an instance', () => {
    const pipe = new LowPricePipe();
    expect(pipe).toBeTruthy();
  });
});
