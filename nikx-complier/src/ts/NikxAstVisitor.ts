import NikxVisitor from '../generated/NikxVisitor'
import Node from '../nodes/Node'
import {LiteralContext, ProgramContext, StatementContext, VariableDeclarationContext} from '../generated/NikxParser'
import VariableDeclarationNode from '../nodes/VariableDeclarationNode'
import LiteralNode from "../nodes/LieralNode";
import ProgramNode from "../nodes/ProgramNode";
import StatementNode from "../nodes/StatementNode";

export default class NikxAstVisitor extends NikxVisitor<Node> {


    visitProgram = (ctx: ProgramContext): ProgramNode => {
        const programNode: ProgramNode = { statements: [], type: 'Program' };
        const statementList = ctx.statement_list();
        if (statementList) {
            statementList.forEach((statement: StatementContext) => {
                const statementNode: StatementNode | null = this.visitStatement(statement);
                if (statementNode) {
                    programNode.statements.push(statementNode);
                }
            });
        }
        return programNode;
    }

    visitStatement = (ctx: StatementContext): StatementNode | null => {
        if (ctx.variableDeclaration()) {
            return { type: 'Statement', value: this.visitVariableDeclaration(ctx.variableDeclaration()) };
        }
        return null;
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext): VariableDeclarationNode => {
        const literalNode = ctx.literal() ? this.visitLiteral(ctx.literal()) : undefined;
        return {
            type: 'VariableDeclaration',
            name: ctx.Identifier().getText(),
            value: literalNode ? literalNode.value : undefined
        }
    }

    visitLiteral = (ctx: LiteralContext): LiteralNode => {
        let value: string | number | boolean;
        if (ctx.NumberLiteral()) {
            value = parseInt(ctx.NumberLiteral().getText());
        } else if (ctx.StringLiteral()) {
            value = ctx.StringLiteral().getText();
        } else if (ctx.BooleanLiteral()) {
            value = ctx.BooleanLiteral().getText() === 'true';
        } else {
            throw new Error('Unknown literal type');
        }
        return { type: 'Literal', value };
    }
}