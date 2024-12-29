import {expect, test} from "vitest";
import {compile} from "../../src/ts";

test('should compile function declaration with empty body', () => {
        const code = `
        fun greet(name) {}
    `;
        const output
            = compile(code);
    expect(output).toBe(`function greet(name) {\n\n}\n`);
    }
)

test('should compile function declaration with body', () => {
        const code = `
        fun greet(name) {
            box message = "Hello";
        }
    `;
        const output
            = compile(code);
    expect(output).toBe(`function greet(name) {\nconst message = "Hello";\n}\n`);
    }
)