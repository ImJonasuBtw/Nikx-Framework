import NikxVisitor from '../generated/NikxVisitor.js'
import Node from '../nodes/Node'
import {
    BlockContext,
    FunctionDeclarationContext,
    HtmlContentContext,
    HtmlElementContext,
    HtmlNormalElementContext,
    HtmlSelfClosingElementContext,
    LiteralContext,
    ParameterListContext,
    ProgramContext,
    StatementContext,
    VariableDeclarationContext
} from '../generated/NikxParser.js'
import VariableDeclarationNode from '../nodes/VariableDeclarationNode'
import LiteralNode from "../nodes/LiteralNode";
import ProgramNode from "../nodes/ProgramNode";
import StatementNode from "../nodes/StatementNode";
import FunctionDeclarationNode from "../nodes/FunctionDeclarationNode";
import ParameterListNode from "../nodes/ParameterListNode";
import BlockNode from "../nodes/BlockNode";
import htmlElementNode from "../nodes/htmlElementNode";

export default class NikxAstVisitor extends NikxVisitor<Node> {


    visitProgram = (ctx: ProgramContext): ProgramNode => {
        const programNode: ProgramNode = {statements: [], type: 'Program'};
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
            return {type: 'Statement', value: this.visitVariableDeclaration(ctx.variableDeclaration())};
        }

        if (ctx.functionDeclaration()) {
            return {type: 'Statement', value: this.visitFunctionDeclaration(ctx.functionDeclaration())};
        }

        if (ctx.htmlElement()) {
            return {type: 'Statement', value: this.visitHtmlElement(ctx.htmlElement())};
        }
        return null;
    }

    visitHtmlElement = (ctx: HtmlElementContext): htmlElementNode => {

        if (ctx.htmlSelfClosingElement()) {
            return this.visitHtmlSelfClosingElement(ctx.htmlSelfClosingElement());
        }

        return this.visitHtmlNormalElement(ctx.htmlNormalElement());
    }

    visitHtmlNormalElement = (ctx: HtmlNormalElementContext): htmlElementNode => {
        const openTag = ctx.Identifier(0).getText();
        const closeTag = ctx.Identifier(1).getText();

        if (openTag !== closeTag) {
            throw new Error('Mismatched tags, big nono');
        }

        const children: (htmlElementNode | string)[] = [];

        for (const c of ctx.htmlContent_list()) {
            if (c.htmlElement()) {
                children.push(this.visitHtmlElement(c.htmlElement()));
            } else {
                children.push(c.getText());
            }
        }

        return {
            type: 'htmlElement',
            tag: openTag,
            selfClosing: false,
            children
        };

    }

    visitHtmlContent = (ctx: HtmlContentContext): Node => {
        if (ctx.htmlElement()) {
            return this.visitHtmlElement(ctx.htmlElement());
        }

        if (ctx.StringLiteral()) {
            const txt = ctx.StringLiteral()!.getText();
            return {
                type: 'Literal',
                value: txt.slice(1, -1)
            } as LiteralNode;
        }

        return {
            type: 'Literal',
            value: ''
        } as LiteralNode;

    }

    visitHtmlSelfClosingElement = (ctx: HtmlSelfClosingElementContext): htmlElementNode => {
        return {
            type: 'htmlElement',
            tag: ctx.Identifier().getText(),
            selfClosing: true,
            children: []
        }
    }

    visitVariableDeclaration = (ctx: VariableDeclarationContext): VariableDeclarationNode => {
        const literalNode = ctx.literal() ? this.visitLiteral(ctx.literal()) : undefined;
        return {
            type: 'VariableDeclaration',
            name: ctx.Identifier().getText(),
            value: literalNode ? literalNode.value : undefined
        }
    }


    visitParameterList = (ctx: ParameterListContext): ParameterListNode => {
        const parameterListNode: ParameterListNode = {
            type: 'ParameterList',
            parameters: []
        }

        const idTokens = ctx.Identifier_list();
        idTokens.forEach(idToken => {
            parameterListNode.parameters.push(idToken.getText());
        });

        return parameterListNode;
    }

    visitBlock = (ctx: BlockContext): BlockNode => {
        const stmts: StatementNode[] = [];
        const statements = ctx.statement_list();

        statements.forEach(stmtCtx => {
            const statementNode = this.visitStatement(stmtCtx);
            if (statementNode) {
                stmts.push(statementNode);
            }
        });

        return {
            type: 'Block',
            statements: stmts
        }
    }

    visitFunctionDeclaration = (ctx: FunctionDeclarationContext): FunctionDeclarationNode => {
        const parameters: ParameterListNode = ctx.parameterList()
            ? this.visitParameterList(ctx.parameterList()!)
            : {type: 'ParameterList', parameters: []};

        const body = this.visitBlock(ctx.block())
        return {
            type: 'FunctionDeclaration',
            name: ctx.Identifier().getText(),
            parameters: parameters.parameters,
            body: body
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
        return {type: 'Literal', value};
    }
}