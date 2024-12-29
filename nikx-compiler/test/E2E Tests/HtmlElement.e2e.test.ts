import {expect, vi, describe, afterEach, it} from "vitest";
import {compile} from "../../src/ts";

vi.mock('nanoid', () => ({
    nanoid: () => 'test-id',
}));

describe('compile', () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should compile self-closing HTML element with mocked ID', () => {
        const code = `<div />`;
        const output = compile(code);

        const expectedOutput = `
      const _div_test_id = document.createElement("div");\ndocument.getElementById("app").appendChild(_div_test_id);
    `.trim();

        expect(output.trim()).toBe(expectedOutput);
    });

    it('should compile nested HTML elements with mocked IDs', () => {
        const code = `<div><span /></div>`;
        const output = compile(code);

        const expectedOutput = `
            const _div_test_id = document.createElement("div");\nconst _span_test_id = document.createElement("span");\n_div_test_id.appendChild(_span_test_id);\ndocument.getElementById("app").appendChild(_div_test_id);
    `.trim();

        expect(output.trim()).toBe(expectedOutput);
    });

    it('should compile nested HTML elements with text in them with mocked IDs', () => {
        const code = `<div>"Hello" <span>"World"</span></div>`;
        const output = compile(code);

        const expectedOutput = `
            const _div_test_id = document.createElement("div");\n_div_test_id.appendChild(document.createTextNode("Hello"));\nconst _span_test_id = document.createElement("span");\n_span_test_id.appendChild(document.createTextNode("World"));\n_div_test_id.appendChild(_span_test_id);\ndocument.getElementById("app").appendChild(_div_test_id);
    `.trim();

            expect(output.trim()).toBe(expectedOutput);


    });

});