import {expect, test} from "vitest";
import {parseToAst} from "../../src/ts";
import ProgramNode from "../../dist/nodes/ProgramNode";

test('should parse simple function declaration', () => {
    const code = `
      fun greet(name) {
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
      fun greet( name, age) {
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
      fun greet(name) {}
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

test('should parse function declaration with body', () => {
    const code = `
      fun print(name) {}
      fun greet(name) {
        print("name");
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
                        statements: [
                            {
                                type: 'Statement',
                                value: {
                                    type: 'ExpressionStatement',
                                    expression: {
                                        type: 'FunctionCall',
                                        functionName: 'print',
                                        arguments: {
                                            type: 'ArgumentList',
                                            arguments: ['name']
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        ]
    })
})

test('should throw error if function is already declared', () => {
    const code = `
      fun greet(name) {}
      fun greet(name) {}
    `;
    expect(() => parseToAst(code)).toThrowError(`Function "greet" is already declared :(`);
})