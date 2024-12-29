import {expect, test} from "vitest";
import {parseToAst} from "../../src/ts";
import ProgramNode from "../../dist/nodes/ProgramNode";


test('should parse function call to a declared function', () => {
    const code = `
        fun greet(name) {
            // function body
        }

        fun main() {
            greet();
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
            },
            {
                type: 'Statement',
                value: {
                    type: 'FunctionDeclaration',
                    name: 'main',
                    parameters: [],
                    body: {
                        type: 'Block',
                        statements: [
                            {
                                type: 'Statement',
                                value: {
                                    type: 'ExpressionStatement',
                                    expression: {
                                        type: 'FunctionCall',
                                        functionName: 'greet',
                                        arguments: {
                                            type: 'ArgumentList',
                                            arguments: []
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

test('should throw error when calling undeclared function', () => {
    const code = `
        fun main() {
            greet();
        }
    `;

    expect(() => parseToAst(code)).toThrowError(`You cannot call function "greet", because it is not declared , u dummy :p`);
})
