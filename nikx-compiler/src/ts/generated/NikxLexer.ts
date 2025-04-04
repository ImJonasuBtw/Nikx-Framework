// Generated from antlr/Nikx.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class NikxLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "BOX", "FUN", "BooleanLiteral", "NumberLiteral", "StringLiteral", 
		"EscapeSequence", "Identifier", "SEMICOLON", "COMMA", "ASSIGN", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LT", "GT", "SLASH", "Letter", "Digit", 
		"WS", "COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, NikxLexer._ATN, NikxLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Nikx.g4"; }

	public get literalNames(): (string | null)[] { return NikxLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return NikxLexer.symbolicNames; }
	public get ruleNames(): string[] { return NikxLexer.ruleNames; }

	public get serializedATN(): number[] { return NikxLexer._serializedATN; }

	public get channelNames(): string[] { return NikxLexer.channelNames; }

	public get modeNames(): string[] { return NikxLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,20,149,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,
	1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,3,4,71,8,4,1,5,4,5,74,8,5,11,5,12,5,75,1,5,1,5,4,5,80,8,5,11,
	5,12,5,81,3,5,84,8,5,1,6,1,6,1,6,5,6,89,8,6,10,6,12,6,92,9,6,1,6,1,6,1,
	7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,103,8,8,10,8,12,8,106,9,8,1,9,1,9,1,10,1,
	10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,
	1,18,1,18,1,19,1,19,1,20,1,20,1,21,4,21,133,8,21,11,21,12,21,134,1,21,1,
	21,1,22,1,22,1,22,1,22,5,22,143,8,22,10,22,12,22,146,9,22,1,22,1,22,0,0,
	23,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,0,17,8,19,9,21,10,23,11,25,12,27,13,
	29,14,31,15,33,16,35,17,37,18,39,0,41,0,43,19,45,20,1,0,6,4,0,10,10,13,
	13,34,34,92,92,8,0,34,34,39,39,92,92,98,98,102,102,110,110,114,114,116,
	116,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,2,0,10,10,13,13,156,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,13,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
	1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,
	0,0,37,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,1,47,1,0,0,0,3,50,1,0,0,0,5,53,
	1,0,0,0,7,57,1,0,0,0,9,70,1,0,0,0,11,73,1,0,0,0,13,85,1,0,0,0,15,95,1,0,
	0,0,17,98,1,0,0,0,19,107,1,0,0,0,21,109,1,0,0,0,23,111,1,0,0,0,25,113,1,
	0,0,0,27,115,1,0,0,0,29,117,1,0,0,0,31,119,1,0,0,0,33,121,1,0,0,0,35,123,
	1,0,0,0,37,125,1,0,0,0,39,127,1,0,0,0,41,129,1,0,0,0,43,132,1,0,0,0,45,
	138,1,0,0,0,47,48,5,60,0,0,48,49,5,47,0,0,49,2,1,0,0,0,50,51,5,47,0,0,51,
	52,5,62,0,0,52,4,1,0,0,0,53,54,5,98,0,0,54,55,5,111,0,0,55,56,5,120,0,0,
	56,6,1,0,0,0,57,58,5,102,0,0,58,59,5,117,0,0,59,60,5,110,0,0,60,8,1,0,0,
	0,61,62,5,116,0,0,62,63,5,114,0,0,63,64,5,117,0,0,64,71,5,101,0,0,65,66,
	5,102,0,0,66,67,5,97,0,0,67,68,5,108,0,0,68,69,5,115,0,0,69,71,5,101,0,
	0,70,61,1,0,0,0,70,65,1,0,0,0,71,10,1,0,0,0,72,74,3,41,20,0,73,72,1,0,0,
	0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,83,1,0,0,0,77,79,5,46,0,
	0,78,80,3,41,20,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,
	0,82,84,1,0,0,0,83,77,1,0,0,0,83,84,1,0,0,0,84,12,1,0,0,0,85,90,5,34,0,
	0,86,89,3,15,7,0,87,89,8,0,0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,92,1,0,0,
	0,90,88,1,0,0,0,90,91,1,0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,34,0,
	0,94,14,1,0,0,0,95,96,5,92,0,0,96,97,7,1,0,0,97,16,1,0,0,0,98,104,3,39,
	19,0,99,103,3,39,19,0,100,103,3,41,20,0,101,103,5,95,0,0,102,99,1,0,0,0,
	102,100,1,0,0,0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,
	1,0,0,0,105,18,1,0,0,0,106,104,1,0,0,0,107,108,5,59,0,0,108,20,1,0,0,0,
	109,110,5,44,0,0,110,22,1,0,0,0,111,112,5,61,0,0,112,24,1,0,0,0,113,114,
	5,40,0,0,114,26,1,0,0,0,115,116,5,41,0,0,116,28,1,0,0,0,117,118,5,123,0,
	0,118,30,1,0,0,0,119,120,5,125,0,0,120,32,1,0,0,0,121,122,5,60,0,0,122,
	34,1,0,0,0,123,124,5,62,0,0,124,36,1,0,0,0,125,126,5,47,0,0,126,38,1,0,
	0,0,127,128,7,2,0,0,128,40,1,0,0,0,129,130,7,3,0,0,130,42,1,0,0,0,131,133,
	7,4,0,0,132,131,1,0,0,0,133,134,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,
	135,136,1,0,0,0,136,137,6,21,0,0,137,44,1,0,0,0,138,139,5,47,0,0,139,140,
	5,47,0,0,140,144,1,0,0,0,141,143,8,5,0,0,142,141,1,0,0,0,143,146,1,0,0,
	0,144,142,1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,
	6,22,0,0,148,46,1,0,0,0,11,0,70,75,81,83,88,90,102,104,134,144,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NikxLexer.__ATN) {
			NikxLexer.__ATN = new ATNDeserializer().deserialize(NikxLexer._serializedATN);
		}

		return NikxLexer.__ATN;
	}


	static DecisionsToDFA = NikxLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}