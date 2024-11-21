import { expect, test } from 'vitest'
import { f } from '../src/ts'

test('f should return 42', (): void => {
    expect(f()).toBe(42)
})
