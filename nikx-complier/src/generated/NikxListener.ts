// Generated from antlr/Nikx.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./NikxParser.js";
import { StatementContext } from "./NikxParser.js";
import { VariableDeclarationContext } from "./NikxParser.js";
import { FunctionDeclarationContext } from "./NikxParser.js";
import { ParameterListContext } from "./NikxParser.js";
import { BlockContext } from "./NikxParser.js";
import { ExpressionStatementContext } from "./NikxParser.js";
import { FunctionCallContext } from "./NikxParser.js";
import { ArgumentListContext } from "./NikxParser.js";
import { LiteralContext } from "./NikxParser.js";
import { HtmlElementContext } from "./NikxParser.js";
import { HtmlNormalElementContext } from "./NikxParser.js";
import { HtmlSelfClosingElementContext } from "./NikxParser.js";
import { HtmlContentContext } from "./NikxParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NikxParser`.
 */
export default class NikxListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `NikxParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.htmlElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlElement?: (ctx: HtmlElementContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.htmlNormalElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlNormalElement?: (ctx: HtmlNormalElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.htmlNormalElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlNormalElement?: (ctx: HtmlNormalElementContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.htmlSelfClosingElement`.
	 * @param ctx the parse tree
	 */
	enterHtmlSelfClosingElement?: (ctx: HtmlSelfClosingElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.htmlSelfClosingElement`.
	 * @param ctx the parse tree
	 */
	exitHtmlSelfClosingElement?: (ctx: HtmlSelfClosingElementContext) => void;
	/**
	 * Enter a parse tree produced by `NikxParser.htmlContent`.
	 * @param ctx the parse tree
	 */
	enterHtmlContent?: (ctx: HtmlContentContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.htmlContent`.
	 * @param ctx the parse tree
	 */
	exitHtmlContent?: (ctx: HtmlContentContext) => void;
}

