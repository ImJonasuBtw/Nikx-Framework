// Generated from antlr/Nikx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./NikxParser";
import { StatementContext } from "./NikxParser";
import { VariableDeclarationContext } from "./NikxParser";
import { FunctionDeclarationContext } from "./NikxParser";
import { ParameterListContext } from "./NikxParser";
import { BlockContext } from "./NikxParser";
import { ExpressionStatementContext } from "./NikxParser";
import { FunctionCallContext } from "./NikxParser";
import { ArgumentListContext } from "./NikxParser";
import { LiteralContext } from "./NikxParser";
import { JsxElementContext } from "./NikxParser";
import { JsxNormalElementContext } from "./NikxParser";
import { JsxSelfClosingElementContext } from "./NikxParser";
import { JsxContentContext } from "./NikxParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `NikxParser`.
 */
export interface NikxListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `NikxParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	enterJsxElement?: (ctx: JsxElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.jsxElement`.
	 * @param ctx the parse tree
	 */
	exitJsxElement?: (ctx: JsxElementContext) => void;

	/**
	 * Enter a parse tree produced by `NikxParser.jsxNormalElement`.
	 * @param ctx the parse tree
	 */
	enterJsxNormalElement?: (ctx: JsxNormalElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.jsxNormalElement`.
	 * @param ctx the parse tree
	 */
	exitJsxNormalElement?: (ctx: JsxNormalElementContext) => void;

	/**
	 * Enter a parse tree produced by `NikxParser.jsxSelfClosingElement`.
	 * @param ctx the parse tree
	 */
	enterJsxSelfClosingElement?: (ctx: JsxSelfClosingElementContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.jsxSelfClosingElement`.
	 * @param ctx the parse tree
	 */
	exitJsxSelfClosingElement?: (ctx: JsxSelfClosingElementContext) => void;

	/**
	 * Enter a parse tree produced by `NikxParser.jsxContent`.
	 * @param ctx the parse tree
	 */
	enterJsxContent?: (ctx: JsxContentContext) => void;
	/**
	 * Exit a parse tree produced by `NikxParser.jsxContent`.
	 * @param ctx the parse tree
	 */
	exitJsxContent?: (ctx: JsxContentContext) => void;
}

