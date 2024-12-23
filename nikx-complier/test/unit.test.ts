import {expect, test} from "vitest";
import {compile} from "../src/ts";

test('variable declaration', (): void => {
    const transpiledCode = compile('var x = 42;\nvar y = "hello";\nvar z = true;')
    expect(transpiledCode).toBe('const x = 42;\nconst y = "hello";\nconst z = true;\n');

})

test('function declaration', (): void => {
    const transpiledCode = compile('fun hello(name) {\n  var greeting = "Hi";\n}')
    expect(transpiledCode).toBe('function hello(name) {\nconst greeting = "Hi";\n}\n');
})