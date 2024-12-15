import NikxVisitor from '../generated/NikxVisitor.js'
import {VariableDeclarationContext} from '../generated/NikxParser.js'

export default class NikxVisitorImpl extends NikxVisitor<string> {

    visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
        const identifier = ctx.Identifier().getText();
        const literal = ctx.literal() ? ctx.literal().getText() : 'undefined';
        return `${identifier} = ${literal}`;
    }
}