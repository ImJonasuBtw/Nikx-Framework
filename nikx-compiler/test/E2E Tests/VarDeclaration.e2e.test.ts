import {expect, test} from "vitest";
import {compile} from "../../src/ts";

test('should compile variable dcl with a value', () => {
    const code = `box x = 42;`;
    const output = compile(code);

    expect(output).toBe(`const x = 42;\n`);
})

test('should compile variable dcl without a value', () => {
    const code = `box x;`;
    const output
        = compile(code);

    expect(output).toBe(`const x= undefined;\n`);
})