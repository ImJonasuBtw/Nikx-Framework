import NikxVisitor from '../generated/NikxVisitor'
import Node from '../nodes/Node'
import {VariableDeclarationContext} from '../generated/NikxParser'
import VariableDeclarationNode from '../nodes/VariableDeclarationNode'

export default class NikxAstVisitor extends NikxVisitor<Node> {
    visitVariableDeclaration = (ctx: VariableDeclarationContext): VariableDeclarationNode => {
        return {
            type: 'VariableDeclaration',
            name: ctx.Identifier().getText(),
            value: ctx.literal()?.getText()
        }
    }
}