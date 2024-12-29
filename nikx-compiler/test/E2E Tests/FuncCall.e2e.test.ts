import {expect, test} from "vitest";
import {compile} from "../../src/ts";

test('should compile function call with no arguments', () => {
    const code = `
    fun greet() {
        box message = "Hello";
    }
    greet();
    `;
    const output = compile(code);
    expect(output).toBe(`function greet() {\nconst message = "Hello";\n}\ngreet();\n`);
})

test('should compile function call with arguments', () => {
    const code = `
    fun greet(name) {
        box message = "Hello";
    }
    greet("Nikx");
    `;
    const output = compile(code);
    expect(output).toBe(`function greet(name) {\nconst message = "Hello";\n}\ngreet("Nikx");\n`);
})