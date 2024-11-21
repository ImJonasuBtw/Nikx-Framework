import { f } from '../src/ts/function'

test('f should return 42', (): void => {
    expect(f()).toBe(42)
})
