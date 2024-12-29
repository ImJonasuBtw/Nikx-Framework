import {expect, test} from "vitest";
import {parseToAst} from "../../src/ts";
import ProgramNode from "../../dist/nodes/ProgramNode";

test('should parse self closing html element', () => {
    const code = `<button/>`;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'htmlElement',
                    selfClosing: true,
                    tag: "button",
                    children: []
                }
            }
        ]
    })
})

test ('should parse html element with text inside', () => {
    const code = `<button>"Click me"</button>`;
    const ast: ProgramNode = parseToAst(code);

    expect(ast).toEqual({
        type: 'Program',
        statements: [
            {
                type: 'Statement',
                value: {
                    type: 'htmlElement',
                    selfClosing: false,
                    tag: "button",
                    children: [
                        {
                            type: 'Literal',
                            value: 'Click me'
                        }
                    ]
                }
            }
        ]
    })
})