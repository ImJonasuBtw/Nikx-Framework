// Generated from antlr/Nikx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `NikxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface NikxVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `NikxParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.jsxElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxElement?: (ctx: JsxElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.jsxNormalElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxNormalElement?: (ctx: JsxNormalElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.jsxSelfClosingElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxSelfClosingElement?: (ctx: JsxSelfClosingElementContext) => Result;

	/**
	 * Visit a parse tree produced by `NikxParser.jsxContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJsxContent?: (ctx: JsxContentContext) => Result;
}

