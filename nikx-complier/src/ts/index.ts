import {CharStream, CommonTokenStream} from 'antlr4'
import NikxLexer from '../generated/NikxLexer.js'
import NikxParser from '../generated/NikxParser.js'
import NikxVisitorImpl from './NikxVisitorImpl.js'

function parseText(input: string) {
    const chars = new CharStream(input)
    const lexer = new NikxLexer(chars)
    const tokens = new CommonTokenStream(lexer)
    const parser = new NikxParser(tokens)
    const tree = parser.program()

    const visitor = new NikxVisitorImpl()
    const result = visitor.visit(tree)
    console.log(result)
}

parseText('var x = 1')