// Generated from antlr/Nikx.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import NikxListener from "./NikxListener";
import NikxVisitor from "./NikxVisitor";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class NikxParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly BOX = 3;
	public static readonly FUN = 4;
	public static readonly BooleanLiteral = 5;
	public static readonly NumberLiteral = 6;
	public static readonly StringLiteral = 7;
	public static readonly Identifier = 8;
	public static readonly SEMICOLON = 9;
	public static readonly COMMA = 10;
	public static readonly ASSIGN = 11;
	public static readonly LPAREN = 12;
	public static readonly RPAREN = 13;
	public static readonly LBRACE = 14;
	public static readonly RBRACE = 15;
	public static readonly LT = 16;
	public static readonly GT = 17;
	public static readonly SLASH = 18;
	public static readonly WS = 19;
	public static readonly COMMENT = 20;
	public static override readonly EOF = Token.EOF;
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
	public static readonly RULE_htmlElement = 10;
	public static readonly RULE_htmlNormalElement = 11;
	public static readonly RULE_htmlSelfClosingElement = 12;
	public static readonly RULE_htmlContent = 13;
	public static readonly literalNames: (string | null)[] = [ null, "'</'",
                                                            "'/>'", "'box'",
                                                            "'fun'", null,
                                                            null, null,
                                                            null, "';'",
                                                            "','", "'='",
                                                            "'('", "')'",
                                                            "'{'", "'}'",
                                                            "'<'", "'>'",
                                                            "'/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null,
                                                             null, "BOX",
                                                             "FUN", "BooleanLiteral",
                                                             "NumberLiteral",
                                                             "StringLiteral",
                                                             "Identifier",
                                                             "SEMICOLON",
                                                             "COMMA", "ASSIGN",
                                                             "LPAREN", "RPAREN",
                                                             "LBRACE", "RBRACE",
                                                             "LT", "GT",
                                                             "SLASH", "WS",
                                                             "COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "functionDeclaration",
		"parameterList", "block", "expressionStatement", "functionCall", "argumentList",
		"literal", "htmlElement", "htmlNormalElement", "htmlSelfClosingElement",
		"htmlContent",
	];
	public get grammarFileName(): string { return "Nikx.g4"; }
	public get literalNames(): (string | null)[] { return NikxParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return NikxParser.symbolicNames; }
	public get ruleNames(): string[] { return NikxParser.ruleNames; }
	public get serializedATN(): number[] { return NikxParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, NikxParser._ATN, NikxParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, NikxParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66328) !== 0)) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, NikxParser.RULE_statement);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 36;
				this.variableDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 37;
				this.functionDeclaration();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 38;
				this.expressionStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 39;
				this.htmlElement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 5);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, NikxParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.match(NikxParser.BOX);
			this.state = 44;
			this.match(NikxParser.Identifier);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===11) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, NikxParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			if (_la===8) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, NikxParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(NikxParser.Identifier);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, NikxParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(NikxParser.LBRACE);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66328) !== 0)) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, NikxParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.functionCall();
			this.state = 78;
			this.match(NikxParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, NikxParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 80;
			this.match(NikxParser.Identifier);
			this.state = 81;
			this.match(NikxParser.LPAREN);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0)) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, NikxParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.literal();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===10) {
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, NikxParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlElement(): HtmlElementContext {
		let localctx: HtmlElementContext = new HtmlElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, NikxParser.RULE_htmlElement);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 97;
				this.htmlSelfClosingElement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 98;
				this.htmlNormalElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlNormalElement(): HtmlNormalElementContext {
		let localctx: HtmlNormalElementContext = new HtmlNormalElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, NikxParser.RULE_htmlNormalElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
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
			while (_la===7 || _la===16) {
				{
				{
				this.state = 104;
				this.htmlContent();
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlSelfClosingElement(): HtmlSelfClosingElementContext {
		let localctx: HtmlSelfClosingElementContext = new HtmlSelfClosingElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, NikxParser.RULE_htmlSelfClosingElement);
		try {
			this.enterOuterAlt(localctx, 1);
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
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public htmlContent(): HtmlContentContext {
		let localctx: HtmlContentContext = new HtmlContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, NikxParser.RULE_htmlContent);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 118;
				this.htmlElement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 119;
				this.match(NikxParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,20,123,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,
	0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,
	1,3,1,3,1,3,1,3,3,3,56,8,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,64,8,4,10,4,12,4,
	67,9,4,1,5,1,5,5,5,71,8,5,10,5,12,5,74,9,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,
	1,7,3,7,84,8,7,1,7,1,7,1,8,1,8,1,8,5,8,91,8,8,10,8,12,8,94,9,8,1,9,1,9,
	1,10,1,10,3,10,100,8,10,1,11,1,11,1,11,1,11,5,11,106,8,11,10,11,12,11,109,
	9,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,3,13,121,8,13,1,
	13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,1,1,0,5,7,122,0,31,1,0,
	0,0,2,41,1,0,0,0,4,43,1,0,0,0,6,51,1,0,0,0,8,60,1,0,0,0,10,68,1,0,0,0,12,
	77,1,0,0,0,14,80,1,0,0,0,16,87,1,0,0,0,18,95,1,0,0,0,20,99,1,0,0,0,22,101,
	1,0,0,0,24,114,1,0,0,0,26,120,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,
	1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,0,33,31,1,0,0,0,34,35,5,
	0,0,1,35,1,1,0,0,0,36,42,3,4,2,0,37,42,3,6,3,0,38,42,3,12,6,0,39,42,3,20,
	10,0,40,42,5,9,0,0,41,36,1,0,0,0,41,37,1,0,0,0,41,38,1,0,0,0,41,39,1,0,
	0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,5,3,0,0,44,47,5,8,0,0,45,46,5,11,0,
	0,46,48,3,18,9,0,47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,9,0,
	0,50,5,1,0,0,0,51,52,5,4,0,0,52,53,5,8,0,0,53,55,5,12,0,0,54,56,3,8,4,0,
	55,54,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,13,0,0,58,59,3,10,5,0,
	59,7,1,0,0,0,60,65,5,8,0,0,61,62,5,10,0,0,62,64,5,8,0,0,63,61,1,0,0,0,64,
	67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,67,65,1,0,0,0,68,72,
	5,14,0,0,69,71,3,2,1,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,
	1,0,0,0,73,75,1,0,0,0,74,72,1,0,0,0,75,76,5,15,0,0,76,11,1,0,0,0,77,78,
	3,14,7,0,78,79,5,9,0,0,79,13,1,0,0,0,80,81,5,8,0,0,81,83,5,12,0,0,82,84,
	3,16,8,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,86,5,13,0,0,86,15,
	1,0,0,0,87,92,3,18,9,0,88,89,5,10,0,0,89,91,3,18,9,0,90,88,1,0,0,0,91,94,
	1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,17,1,0,0,0,94,92,1,0,0,0,95,96,7,
	0,0,0,96,19,1,0,0,0,97,100,3,24,12,0,98,100,3,22,11,0,99,97,1,0,0,0,99,
	98,1,0,0,0,100,21,1,0,0,0,101,102,5,16,0,0,102,103,5,8,0,0,103,107,5,17,
	0,0,104,106,3,26,13,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,
	108,1,0,0,0,108,110,1,0,0,0,109,107,1,0,0,0,110,111,5,1,0,0,111,112,5,8,
	0,0,112,113,5,17,0,0,113,23,1,0,0,0,114,115,5,16,0,0,115,116,5,8,0,0,116,
	117,5,2,0,0,117,25,1,0,0,0,118,121,3,20,10,0,119,121,5,7,0,0,120,118,1,
	0,0,0,120,119,1,0,0,0,121,27,1,0,0,0,11,31,41,47,55,65,72,83,92,99,107,
	120];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NikxParser.__ATN) {
			NikxParser.__ATN = new ATNDeserializer().deserialize(NikxParser._serializedATN);
		}

		return NikxParser.__ATN;
	}


	static DecisionsToDFA = NikxParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(NikxParser.EOF, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_program;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitProgram) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public htmlElement(): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, 0) as HtmlElementContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(NikxParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_statement;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitStatement) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOX(): TerminalNode {
		return this.getToken(NikxParser.BOX, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(NikxParser.Identifier, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(NikxParser.SEMICOLON, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(NikxParser.ASSIGN, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_variableDeclaration;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitVariableDeclaration) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUN(): TerminalNode {
		return this.getToken(NikxParser.FUN, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(NikxParser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(NikxParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(NikxParser.RPAREN, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_functionDeclaration;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitFunctionDeclaration) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(NikxParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(NikxParser.Identifier, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(NikxParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(NikxParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_parameterList;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitParameterList) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(NikxParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(NikxParser.RBRACE, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_block;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitBlock) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(NikxParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_expressionStatement;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitExpressionStatement) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(NikxParser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(NikxParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(NikxParser.RPAREN, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_functionCall;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitFunctionCall) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(NikxParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(NikxParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_argumentList;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitArgumentList) {
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
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NumberLiteral(): TerminalNode {
		return this.getToken(NikxParser.NumberLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(NikxParser.StringLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(NikxParser.BooleanLiteral, 0);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_literal;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitLiteral) {
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


export class HtmlElementContext extends ParserRuleContext {
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public htmlSelfClosingElement(): HtmlSelfClosingElementContext {
		return this.getTypedRuleContext(HtmlSelfClosingElementContext, 0) as HtmlSelfClosingElementContext;
	}
	public htmlNormalElement(): HtmlNormalElementContext {
		return this.getTypedRuleContext(HtmlNormalElementContext, 0) as HtmlNormalElementContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_htmlElement;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterHtmlElement) {
	 		listener.enterHtmlElement(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitHtmlElement) {
	 		listener.exitHtmlElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitHtmlElement) {
			return visitor.visitHtmlElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlNormalElementContext extends ParserRuleContext {
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(NikxParser.LT, 0);
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(NikxParser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(NikxParser.Identifier, i);
	}
	public GT_list(): TerminalNode[] {
	    	return this.getTokens(NikxParser.GT);
	}
	public GT(i: number): TerminalNode {
		return this.getToken(NikxParser.GT, i);
	}
	public htmlContent_list(): HtmlContentContext[] {
		return this.getTypedRuleContexts(HtmlContentContext) as HtmlContentContext[];
	}
	public htmlContent(i: number): HtmlContentContext {
		return this.getTypedRuleContext(HtmlContentContext, i) as HtmlContentContext;
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_htmlNormalElement;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterHtmlNormalElement) {
	 		listener.enterHtmlNormalElement(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitHtmlNormalElement) {
	 		listener.exitHtmlNormalElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitHtmlNormalElement) {
			return visitor.visitHtmlNormalElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlSelfClosingElementContext extends ParserRuleContext {
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(NikxParser.LT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(NikxParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_htmlSelfClosingElement;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterHtmlSelfClosingElement) {
	 		listener.enterHtmlSelfClosingElement(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitHtmlSelfClosingElement) {
	 		listener.exitHtmlSelfClosingElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitHtmlSelfClosingElement) {
			return visitor.visitHtmlSelfClosingElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HtmlContentContext extends ParserRuleContext {
	constructor(parser?: NikxParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public htmlElement(): HtmlElementContext {
		return this.getTypedRuleContext(HtmlElementContext, 0) as HtmlElementContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(NikxParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return NikxParser.RULE_htmlContent;
	}
	public enterRule(listener: NikxListener): void {
	    if(listener.enterHtmlContent) {
	 		listener.enterHtmlContent(this);
		}
	}
	public exitRule(listener: NikxListener): void {
	    if(listener.exitHtmlContent) {
	 		listener.exitHtmlContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: NikxVisitor<Result>): Result {
		if (visitor.visitHtmlContent) {
			return visitor.visitHtmlContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
