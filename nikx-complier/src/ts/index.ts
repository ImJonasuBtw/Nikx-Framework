import {CharStream, CommonTokenStream} from 'antlr4'
import NikxLexer from '../generated/NikxLexer.js'
import NikxParser from '../generated/NikxParser.js'
import NikxAstVisitor from "./NikxAstVisitor.js";
import NikxVisitorImpl from "./NikxVisitorImpl.js";

function parseText(input: string) {
    const chars = new CharStream(input)
    const lexer = new NikxLexer(chars)
    const tokens = new CommonTokenStream(lexer)
    const parser = new NikxParser(tokens)
    const tree = parser.program()

    const visitor = new NikxAstVisitor()
    return visitor.visitProgram(tree)
}

export {parseText}

function loader(sourceCode: string): string {
    const ast =parseText(sourceCode);
    const visitor = new NikxVisitorImpl()
    return visitor.generate(ast);
}

const input = `
var x = 42;
`;
console.log(loader(input));