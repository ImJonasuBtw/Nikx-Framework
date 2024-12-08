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
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'</'", 
                                                            "'/>'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'var'", "'fun'", 
                                                            "';'", "','", 
                                                            "'='", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'<'", 
                                                            "'>'", "'/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "BooleanLiteral", 
                                                             "NumberLiteral", 
                                                             "StringLiteral", 
                                                             "CharacterData", 
                                                             "Identifier", 
                                                             "VAR", "FUN", 
                                                             "SEMICOLON", 
                                                             "COMMA", "ASSIGN", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LT", "GT", 
                                                             "SLASH", "WS", 
                                                             "COMMENT" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "BooleanLiteral", "NumberLiteral", "StringLiteral", "EscapeSequence", 
		"CharacterData", "Identifier", "VAR", "FUN", "SEMICOLON", "COMMA", "ASSIGN", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LT", "GT", "SLASH", "Letter", 
		"Digit", "WS", "COMMENT",
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

	public static readonly _serializedATN: number[] = [4,0,21,156,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,65,8,2,
	1,3,4,3,68,8,3,11,3,12,3,69,1,3,1,3,4,3,74,8,3,11,3,12,3,75,3,3,78,8,3,
	1,4,1,4,1,4,5,4,83,8,4,10,4,12,4,86,9,4,1,4,1,4,1,5,1,5,1,5,1,6,4,6,94,
	8,6,11,6,12,6,95,1,7,1,7,1,7,1,7,5,7,102,8,7,10,7,12,7,105,9,7,1,8,1,8,
	1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,
	14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,
	1,22,4,22,140,8,22,11,22,12,22,141,1,22,1,22,1,23,1,23,1,23,1,23,5,23,150,
	8,23,10,23,12,23,153,9,23,1,23,1,23,0,0,24,1,1,3,2,5,3,7,4,9,5,11,0,13,
	6,15,7,17,8,19,9,21,10,23,11,25,12,27,13,29,14,31,15,33,16,35,17,37,18,
	39,19,41,0,43,0,45,20,47,21,1,0,7,4,0,10,10,13,13,34,34,92,92,8,0,34,34,
	39,39,92,92,98,98,102,102,110,110,114,114,116,116,4,0,60,60,62,62,123,123,
	125,125,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,2,0,10,10,13,13,
	164,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,13,1,
	0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
	0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
	0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,
	3,52,1,0,0,0,5,64,1,0,0,0,7,67,1,0,0,0,9,79,1,0,0,0,11,89,1,0,0,0,13,93,
	1,0,0,0,15,97,1,0,0,0,17,106,1,0,0,0,19,110,1,0,0,0,21,114,1,0,0,0,23,116,
	1,0,0,0,25,118,1,0,0,0,27,120,1,0,0,0,29,122,1,0,0,0,31,124,1,0,0,0,33,
	126,1,0,0,0,35,128,1,0,0,0,37,130,1,0,0,0,39,132,1,0,0,0,41,134,1,0,0,0,
	43,136,1,0,0,0,45,139,1,0,0,0,47,145,1,0,0,0,49,50,5,60,0,0,50,51,5,47,
	0,0,51,2,1,0,0,0,52,53,5,47,0,0,53,54,5,62,0,0,54,4,1,0,0,0,55,56,5,116,
	0,0,56,57,5,114,0,0,57,58,5,117,0,0,58,65,5,101,0,0,59,60,5,102,0,0,60,
	61,5,97,0,0,61,62,5,108,0,0,62,63,5,115,0,0,63,65,5,101,0,0,64,55,1,0,0,
	0,64,59,1,0,0,0,65,6,1,0,0,0,66,68,3,43,21,0,67,66,1,0,0,0,68,69,1,0,0,
	0,69,67,1,0,0,0,69,70,1,0,0,0,70,77,1,0,0,0,71,73,5,46,0,0,72,74,3,43,21,
	0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,
	77,71,1,0,0,0,77,78,1,0,0,0,78,8,1,0,0,0,79,84,5,34,0,0,80,83,3,11,5,0,
	81,83,8,0,0,0,82,80,1,0,0,0,82,81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,
	85,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,88,5,34,0,0,88,10,1,0,0,0,89,
	90,5,92,0,0,90,91,7,1,0,0,91,12,1,0,0,0,92,94,8,2,0,0,93,92,1,0,0,0,94,
	95,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,14,1,0,0,0,97,103,3,41,20,0,98,
	102,3,41,20,0,99,102,3,43,21,0,100,102,5,95,0,0,101,98,1,0,0,0,101,99,1,
	0,0,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,
	16,1,0,0,0,105,103,1,0,0,0,106,107,5,118,0,0,107,108,5,97,0,0,108,109,5,
	114,0,0,109,18,1,0,0,0,110,111,5,102,0,0,111,112,5,117,0,0,112,113,5,110,
	0,0,113,20,1,0,0,0,114,115,5,59,0,0,115,22,1,0,0,0,116,117,5,44,0,0,117,
	24,1,0,0,0,118,119,5,61,0,0,119,26,1,0,0,0,120,121,5,40,0,0,121,28,1,0,
	0,0,122,123,5,41,0,0,123,30,1,0,0,0,124,125,5,123,0,0,125,32,1,0,0,0,126,
	127,5,125,0,0,127,34,1,0,0,0,128,129,5,60,0,0,129,36,1,0,0,0,130,131,5,
	62,0,0,131,38,1,0,0,0,132,133,5,47,0,0,133,40,1,0,0,0,134,135,7,3,0,0,135,
	42,1,0,0,0,136,137,7,4,0,0,137,44,1,0,0,0,138,140,7,5,0,0,139,138,1,0,0,
	0,140,141,1,0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,
	6,22,0,0,144,46,1,0,0,0,145,146,5,47,0,0,146,147,5,47,0,0,147,151,1,0,0,
	0,148,150,8,6,0,0,149,148,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,
	1,0,0,0,152,154,1,0,0,0,153,151,1,0,0,0,154,155,6,23,0,0,155,48,1,0,0,0,
	12,0,64,69,75,77,82,84,95,101,103,141,151,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!NikxLexer.__ATN) {
			NikxLexer.__ATN = new ATNDeserializer().deserialize(NikxLexer._serializedATN);
		}

		return NikxLexer.__ATN;
	}


	static DecisionsToDFA = NikxLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}