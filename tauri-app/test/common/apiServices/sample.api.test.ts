import { describe, it, expect } from 'vitest';
import { SampleApi } from '../../../src/common/apiServices/sample.api';

describe('get', () => {
  it('Should response with number array with one element', async () => {
    // Arrange

    // Act
    const result = await SampleApi.get();

    // Assert
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(result).not.empty;
    console.log(result);
  });
});
