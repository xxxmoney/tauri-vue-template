export class SampleService {
  private readonly foo: string;

  constructor(foo: string) {
    this.foo = foo;
  }

  getFoo() {
    return this.foo;
  }
}
