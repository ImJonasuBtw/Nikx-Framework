import NikxVisitor from '../generated/NikxVisitor.js'
import {VariableDeclarationContext} from '../generated/NikxParser.js'

export default class NikxVisitorImpl extends NikxVisitor<string> {

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        return ctx.Identifier().getText() + ' = ' + ctx.literal().getText()
    }
}