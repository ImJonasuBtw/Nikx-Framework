import {expect, test} from "vitest";
import {parseToAst} from "../../src/ts";
import ProgramNode from "../../dist/nodes/ProgramNode";

test('should parse simple function declaration', () => {
    const code = `
      fun greet(box name) {
        // empty body
      }
    `;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'FunctionDeclaration',
                    name: 'greet',
                    parameters: ['name'],
                    body: {
                        type: 'Block',
                        statements: []
                    }
                }
            }
        ]
    })
})

test('should parse function declaration with multiple parameters', () => {
    const code = `
      fun greet(box name, box age) {
        // empty body
      }
    `;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'FunctionDeclaration',
                    name: 'greet',
                    parameters: ['name', 'age'],
                    body: {
                        type: 'Block',
                        statements: []
                    }
                }
            }
        ]
    })
})

test('should parse function declaration with empty body', () => {
    const code = `
      fun greet(box name) {}
    `;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'FunctionDeclaration',
                    name: 'greet',
                    parameters: ['name'],
                    body: {
                        type: 'Block',
                        statements: []
                    }
                }
            }
        ]
    })
})