// Generated from antlr/Nikx.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { NikxListener } from "./NikxListener";
import { NikxVisitor } from "./NikxVisitor";


export class NikxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly BooleanLiteral = 3;
	public static readonly NumberLiteral = 4;
	public static readonly StringLiteral = 5;
	public static readonly CharacterData = 6;
	public static readonly Identifier = 7;
	public static readonly VAR = 8;
	public static readonly FUN = 9;
	public static readonly SEMICOLON = 10;
	public static readonly COMMA = 11;
	public static readonly ASSIGN = 12;
	public static readonly LPAREN = 13;
	public static readonly RPAREN = 14;
	public static readonly LBRACE = 15;
	public static readonly RBRACE = 16;
	public static readonly LT = 17;
	public static readonly GT = 18;
	public static readonly SLASH = 19;
	public static readonly WS = 20;
	public static readonly COMMENT = 21;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_parameterList = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_expressionStatement = 6;
	public static readonly RULE_functionCall = 7;
	public static readonly RULE_argumentList = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_jsxElement = 10;
	public static readonly RULE_jsxNormalElement = 11;
	public static readonly RULE_jsxSelfClosingElement = 12;
	public static readonly RULE_jsxContent = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "functionDeclaration", 
		"parameterList", "block", "expressionStatement", "functionCall", "argumentList", 
		"literal", "jsxElement", "jsxNormalElement", "jsxSelfClosingElement", 
		"jsxContent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'</'", "'/>'", undefined, undefined, undefined, undefined, 
		undefined, "'var'", "'fun'", "';'", "','", "'='", "'('", "')'", "'{'", 
		"'}'", "'<'", "'>'", "'/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "BooleanLiteral", "NumberLiteral", "StringLiteral", 
		"CharacterData", "Identifier", "VAR", "FUN", "SEMICOLON", "COMMA", "ASSIGN", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LT", "GT", "SLASH", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(NikxParser._LITERAL_NAMES, NikxParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return NikxParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Nikx.g4"; }

	// @Override
	public get ruleNames(): string[] { return NikxParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return NikxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(NikxParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, NikxParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NikxParser.Identifier) | (1 << NikxParser.VAR) | (1 << NikxParser.FUN) | (1 << NikxParser.SEMICOLON) | (1 << NikxParser.LT))) !== 0)) {
				{
				{
				this.state = 28;
				this.statement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
			this.match(NikxParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, NikxParser.RULE_statement);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NikxParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.variableDeclaration();
				}
				break;
			case NikxParser.FUN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.functionDeclaration();
				}
				break;
			case NikxParser.Identifier:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 38;
				this.expressionStatement();
				}
				break;
			case NikxParser.LT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				this.jsxElement();
				}
				break;
			case NikxParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 40;
				this.match(NikxParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, NikxParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(NikxParser.VAR);
			this.state = 44;
			this.match(NikxParser.Identifier);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NikxParser.ASSIGN) {
				{
				this.state = 45;
				this.match(NikxParser.ASSIGN);
				this.state = 46;
				this.literal();
				}
			}

			this.state = 49;
			this.match(NikxParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, NikxParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(NikxParser.FUN);
			this.state = 52;
			this.match(NikxParser.Identifier);
			this.state = 53;
			this.match(NikxParser.LPAREN);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === NikxParser.Identifier) {
				{
				this.state = 54;
				this.parameterList();
				}
			}

			this.state = 57;
			this.match(NikxParser.RPAREN);
			this.state = 58;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, NikxParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(NikxParser.Identifier);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NikxParser.COMMA) {
				{
				{
				this.state = 61;
				this.match(NikxParser.COMMA);
				this.state = 62;
				this.match(NikxParser.Identifier);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, NikxParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(NikxParser.LBRACE);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NikxParser.Identifier) | (1 << NikxParser.VAR) | (1 << NikxParser.FUN) | (1 << NikxParser.SEMICOLON) | (1 << NikxParser.LT))) !== 0)) {
				{
				{
				this.state = 69;
				this.statement();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(NikxParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, NikxParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.functionCall();
			this.state = 78;
			this.match(NikxParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, NikxParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(NikxParser.Identifier);
			this.state = 81;
			this.match(NikxParser.LPAREN);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NikxParser.BooleanLiteral) | (1 << NikxParser.NumberLiteral) | (1 << NikxParser.StringLiteral))) !== 0)) {
				{
				this.state = 82;
				this.argumentList();
				}
			}

			this.state = 85;
			this.match(NikxParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, NikxParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.literal();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === NikxParser.COMMA) {
				{
				{
				this.state = 88;
				this.match(NikxParser.COMMA);
				this.state = 89;
				this.literal();
				}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, NikxParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NikxParser.BooleanLiteral) | (1 << NikxParser.NumberLiteral) | (1 << NikxParser.StringLiteral))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsxElement(): JsxElementContext {
		let _localctx: JsxElementContext = new JsxElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, NikxParser.RULE_jsxElement);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.jsxSelfClosingElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.jsxNormalElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsxNormalElement(): JsxNormalElementContext {
		let _localctx: JsxNormalElementContext = new JsxNormalElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, NikxParser.RULE_jsxNormalElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(NikxParser.LT);
			this.state = 102;
			this.match(NikxParser.Identifier);
			this.state = 103;
			this.match(NikxParser.GT);
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << NikxParser.StringLiteral) | (1 << NikxParser.CharacterData) | (1 << NikxParser.LT))) !== 0)) {
				{
				{
				this.state = 104;
				this.jsxContent();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(NikxParser.T__0);
			this.state = 111;
			this.match(NikxParser.Identifier);
			this.state = 112;
			this.match(NikxParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsxSelfClosingElement(): JsxSelfClosingElementContext {
		let _localctx: JsxSelfClosingElementContext = new JsxSelfClosingElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, NikxParser.RULE_jsxSelfClosingElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(NikxParser.LT);
			this.state = 115;
			this.match(NikxParser.Identifier);
			this.state = 116;
			this.match(NikxParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jsxContent(): JsxContentContext {
		let _localctx: JsxContentContext = new JsxContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, NikxParser.RULE_jsxContent);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case NikxParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this.jsxElement();
				}
				break;
			case NikxParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.match(NikxParser.StringLiteral);
				}
				break;
			case NikxParser.CharacterData:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.match(NikxParser.CharacterData);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17~\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03,\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x042\n\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x05\x05:\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x07\x06B\n\x06\f\x06\x0E\x06E\v\x06\x03\x07\x03\x07\x07\x07" +
		"I\n\x07\f\x07\x0E\x07L\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x05\tV\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n]\n\n\f\n\x0E\n" +
		"`\v\n\x03\v\x03\v\x03\f\x03\f\x05\ff\n\f\x03\r\x03\r\x03\r\x03\r\x07\r" +
		"l\n\r\f\r\x0E\ro\v\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F|\n\x0F\x03\x0F\x02\x02\x02\x10\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x03\x03\x02\x05\x07\x02~\x02!\x03" +
		"\x02\x02\x02\x04+\x03\x02\x02\x02\x06-\x03\x02\x02\x02\b5\x03\x02\x02" +
		"\x02\n>\x03\x02\x02\x02\fF\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10R\x03" +
		"\x02\x02\x02\x12Y\x03\x02\x02\x02\x14a\x03\x02\x02\x02\x16e\x03\x02\x02" +
		"\x02\x18g\x03\x02\x02\x02\x1At\x03\x02\x02\x02\x1C{\x03\x02\x02\x02\x1E" +
		" \x05\x04\x03\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02!\"\x03\x02\x02\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07" +
		"\x02\x02\x03%\x03\x03\x02\x02\x02&,\x05\x06\x04\x02\',\x05\b\x05\x02(" +
		",\x05\x0E\b\x02),\x05\x16\f\x02*,\x07\f\x02\x02+&\x03\x02\x02\x02+\'\x03" +
		"\x02\x02\x02+(\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02\x02,\x05" +
		"\x03\x02\x02\x02-.\x07\n\x02\x02.1\x07\t\x02\x02/0\x07\x0E\x02\x0202\x05" +
		"\x14\v\x021/\x03\x02\x02\x0212\x03\x02\x02\x0223\x03\x02\x02\x0234\x07" +
		"\f\x02\x024\x07\x03\x02\x02\x0256\x07\v\x02\x0267\x07\t\x02\x0279\x07" +
		"\x0F\x02\x028:\x05\n\x06\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03" +
		"\x02\x02\x02;<\x07\x10\x02\x02<=\x05\f\x07\x02=\t\x03\x02\x02\x02>C\x07" +
		"\t\x02\x02?@\x07\r\x02\x02@B\x07\t\x02\x02A?\x03\x02\x02\x02BE\x03\x02" +
		"\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02D\v\x03\x02\x02\x02EC\x03" +
		"\x02\x02\x02FJ\x07\x11\x02\x02GI\x05\x04\x03\x02HG\x03\x02\x02\x02IL\x03" +
		"\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03" +
		"\x02\x02\x02MN\x07\x12\x02\x02N\r\x03\x02\x02\x02OP\x05\x10\t\x02PQ\x07" +
		"\f\x02\x02Q\x0F\x03\x02\x02\x02RS\x07\t\x02\x02SU\x07\x0F\x02\x02TV\x05" +
		"\x12\n\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02WX\x07" +
		"\x10\x02\x02X\x11\x03\x02\x02\x02Y^\x05\x14\v\x02Z[\x07\r\x02\x02[]\x05" +
		"\x14\v\x02\\Z\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03" +
		"\x02\x02\x02_\x13\x03\x02\x02\x02`^\x03\x02\x02\x02ab\t\x02\x02\x02b\x15" +
		"\x03\x02\x02\x02cf\x05\x1A\x0E\x02df\x05\x18\r\x02ec\x03\x02\x02\x02e" +
		"d\x03\x02\x02\x02f\x17\x03\x02\x02\x02gh\x07\x13\x02\x02hi\x07\t\x02\x02" +
		"im\x07\x14\x02\x02jl\x05\x1C\x0F\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02" +
		"mk\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02" +
		"pq\x07\x03\x02\x02qr\x07\t\x02\x02rs\x07\x14\x02\x02s\x19\x03\x02\x02" +
		"\x02tu\x07\x13\x02\x02uv\x07\t\x02\x02vw\x07\x04\x02\x02w\x1B\x03\x02" +
		"\x02\x02x|\x05\x16\f\x02y|\x07\x07\x02\x02z|\x07\b\x02\x02{x\x03\x02\x02" +
		"\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|\x1D\x03\x02\x02\x02\r!+19CJ" +
		"U^em{";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NikxParser.__ATN) {
			NikxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(NikxParser._serializedATN));
		}

		return NikxParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(NikxParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_program; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public jsxElement(): JsxElementContext | undefined {
		return this.tryGetRuleContext(0, JsxElementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(NikxParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_statement; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(NikxParser.VAR, 0); }
	public Identifier(): TerminalNode { return this.getToken(NikxParser.Identifier, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(NikxParser.SEMICOLON, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(NikxParser.ASSIGN, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUN(): TerminalNode { return this.getToken(NikxParser.FUN, 0); }
	public Identifier(): TerminalNode { return this.getToken(NikxParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NikxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NikxParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NikxParser.Identifier);
		} else {
			return this.getToken(NikxParser.Identifier, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NikxParser.COMMA);
		} else {
			return this.getToken(NikxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(NikxParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(NikxParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_block; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(NikxParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(NikxParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(NikxParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(NikxParser.RPAREN, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NikxParser.COMMA);
		} else {
			return this.getToken(NikxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(NikxParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(NikxParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(NikxParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_literal; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxElementContext extends ParserRuleContext {
	public jsxSelfClosingElement(): JsxSelfClosingElementContext | undefined {
		return this.tryGetRuleContext(0, JsxSelfClosingElementContext);
	}
	public jsxNormalElement(): JsxNormalElementContext | undefined {
		return this.tryGetRuleContext(0, JsxNormalElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_jsxElement; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterJsxElement) {
			listener.enterJsxElement(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitJsxElement) {
			listener.exitJsxElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitJsxElement) {
			return visitor.visitJsxElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxNormalElementContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NikxParser.LT, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NikxParser.Identifier);
		} else {
			return this.getToken(NikxParser.Identifier, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(NikxParser.GT);
		} else {
			return this.getToken(NikxParser.GT, i);
		}
	}
	public jsxContent(): JsxContentContext[];
	public jsxContent(i: number): JsxContentContext;
	public jsxContent(i?: number): JsxContentContext | JsxContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsxContentContext);
		} else {
			return this.getRuleContext(i, JsxContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_jsxNormalElement; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterJsxNormalElement) {
			listener.enterJsxNormalElement(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitJsxNormalElement) {
			listener.exitJsxNormalElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitJsxNormalElement) {
			return visitor.visitJsxNormalElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxSelfClosingElementContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(NikxParser.LT, 0); }
	public Identifier(): TerminalNode { return this.getToken(NikxParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_jsxSelfClosingElement; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterJsxSelfClosingElement) {
			listener.enterJsxSelfClosingElement(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitJsxSelfClosingElement) {
			listener.exitJsxSelfClosingElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitJsxSelfClosingElement) {
			return visitor.visitJsxSelfClosingElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JsxContentContext extends ParserRuleContext {
	public jsxElement(): JsxElementContext | undefined {
		return this.tryGetRuleContext(0, JsxElementContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(NikxParser.StringLiteral, 0); }
	public CharacterData(): TerminalNode | undefined { return this.tryGetToken(NikxParser.CharacterData, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return NikxParser.RULE_jsxContent; }
	// @Override
	public enterRule(listener: NikxListener): void {
		if (listener.enterJsxContent) {
			listener.enterJsxContent(this);
		}
	}
	// @Override
	public exitRule(listener: NikxListener): void {
		if (listener.exitJsxContent) {
			listener.exitJsxContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitJsxContent) {
			return visitor.visitJsxContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


