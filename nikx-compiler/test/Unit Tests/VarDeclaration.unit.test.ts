import {expect, test} from "vitest";
import {parseToAst} from "../../src/ts";
import ProgramNode from "../../dist/nodes/ProgramNode";


test('should parse variable dcl with a value', () => {
    const code = `box x = 42;`;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'VariableDeclaration',
                    name: 'x',
                    value: 42
                }
            }
        ]
    })
})


test('should throw an error on variable dcl missing semicolon', () => {
    const code = `box x = 42`;
    expect(() => parseToAst(code)).toThrowError();
})


test('should parse variable declared without a value', () => {
    const code = `box y;`;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'VariableDeclaration',
                    name: 'y',
                    value: undefined
                }
            }
        ]
    })
})