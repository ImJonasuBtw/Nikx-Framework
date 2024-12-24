import {expect, test} from "vitest";
import {compile} from "../src/ts";

test('variable declaration', (): void => {
    const transpiledCode = compile('box x = 42;\nbox y = "hello";\nbox z = true;')
    expect(transpiledCode).toBe('const x = 42;\nconst y = "hello";\nconst z = true;\n');

})

test('function declaration', (): void => {
    const transpiledCode = compile('fun hello(name) {\n  box greeting = "Hi";\n}')
    expect(transpiledCode).toBe('function hello(name) {\nconst greeting = "Hi";\n}\n');
})

test('html element', (): void => {
        const transpiledCode = compile('<div>"hello"</div>')
        expect(transpiledCode).toBe('const _div_1 = document.createElement("div");\n_div_1.appendChild(document.createTextNode("hello"));\n_div_1\n');
    }
)

test('html element with children', (): void => {
        const transpiledCode = compile('<div><span>"hello"</span></div>')
        expect(transpiledCode).toBe('const _div_1 = document.createElement("div");\nconst _span_2 = document.createElement("span");\n_span_2.appendChild(document.createTextNode("hello"));\n_div_1.appendChild(_span_2);\n_div_1\n');
    }
)

test('html element with lost of spaces , should still work', (): void => {
        const transpiledCode = compile('<div   > <span   > "hello" </   span> </   div>')
        expect(transpiledCode).toBe('const _div_1 = document.createElement("div");\nconst _span_2 = document.createElement("span");\n_span_2.appendChild(document.createTextNode("hello"));\n_div_1.appendChild(_span_2);\n_div_1\n');
    })

test('html self closing element', (): void => {
        const transpiledCode = compile('<div/>')
        expect(transpiledCode).toBe('document.createElement("div")\n');
    })

test('html self closing with lots of children', (): void => {
        const transpiledCode = compile('<div><span/><span/><span/></div>')
        expect(transpiledCode).toBe('const _div_1 = document.createElement("div");\nconst _span_2 = document.createElement("span");\n_div_1.appendChild(_span_2);\nconst _span_3 = document.createElement("span");\n_div_1.appendChild(_span_3);\nconst _span_4 = document.createElement("span");\n_div_1.appendChild(_span_4);\n_div_1\n');
    }
)


