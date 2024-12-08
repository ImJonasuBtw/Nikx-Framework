import NikxVisitor from '../generated/NikxVisitor'
import {VariableDeclarationContext} from '../generated/NikxParser'

export default class NikxVisitorImpl extends NikxVisitor<string> {

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        return ctx.Identifier().getText() + ' = ' + ctx.literal().getText()
    }
}