grammar Nikx;

// Parser Rules
program             : statement* EOF ;

statement
    : variableDeclaration
    | functionDeclaration
    | expressionStatement
    | jsxElement
    | ';'
    ;

variableDeclaration
    : 'var' Identifier ( '=' literal )? ';'
    ;

functionDeclaration
    : 'fun' Identifier '(' parameterList? ')' block
    ;

parameterList
    : Identifier ( ',' Identifier )*
    ;

block
    : '{' statement* '}'
    ;

expressionStatement
    : functionCall ';'
    ;

functionCall
    : Identifier '(' argumentList? ')'
    ;

argumentList
    : literal ( ',' literal )*
    ;

literal
    : NumberLiteral
    | StringLiteral
    | BooleanLiteral
    ;

jsxElement
    : jsxSelfClosingElement
    | jsxNormalElement
    ;

jsxNormalElement
    : '<' Identifier '>' jsxContent* '</' Identifier '>'
    ;

jsxSelfClosingElement
    : '<' Identifier '/>'
    ;

jsxContent
    : jsxElement
    | StringLiteral
    | CharacterData
    ;


// Lexer Rules
BooleanLiteral      : 'true' | 'false' ;

NumberLiteral
    : Digit+ ( '.' Digit+ )?
    ;

StringLiteral
    : '"' ( EscapeSequence | ~[\\"\r\n] )* '"'
    ;

fragment EscapeSequence
    : '\\' [btnfr"'\\]
    ;

CharacterData
    : ~[<>{}]+
    ;

Identifier
    : Letter ( Letter | Digit | '_' )*
    ;

// Keywords
VAR                 : 'var' ;
FUN                 : 'fun' ;

// Operators and Symbols
SEMICOLON           : ';' ;
COMMA               : ',' ;
ASSIGN              : '=' ;
LPAREN              : '(' ;
RPAREN              : ')' ;
LBRACE              : '{' ;
RBRACE              : '}' ;
LT                  : '<' ;
GT                  : '>' ;
SLASH               : '/' ;

// Fragment Rules
fragment Letter     : [a-zA-Z] ;
fragment Digit      : [0-9] ;

// Whitespace and Comments
WS                  : [ \t\r\n]+ -> skip ;
COMMENT
    : '//' ~[\r\n]* -> skip
    ;
