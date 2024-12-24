grammar Nikx;

// Parser Rules
program             : statement* EOF ;

statement
    : variableDeclaration
    | functionDeclaration
    | expressionStatement
    | htmlElement
    | ';'
    ;

variableDeclaration
    : 'box' Identifier ( '=' literal )? ';'
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

htmlElement
    : htmlSelfClosingElement
    | htmlNormalElement
    ;

htmlNormalElement
    : '<' Identifier '>' htmlContent* '</' Identifier '>'
    ;

htmlSelfClosingElement
    : '<' Identifier '/>'
    ;

htmlContent
    : htmlElement
    | StringLiteral
    ;


// Lexer Rules

// Keywords
BOX                 : 'box' ;
FUN                 : 'fun' ;

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


Identifier
    : Letter ( Letter | Digit | '_' )*
    ;


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
