# Nikx - Frontend Framework
**Author:** Jonas Nikolopoulos

**Framework Name:** Nikx
## Introduction
Nikx is a very simple frontend framework, inspired by React, but much simpler. It was created to expand my knowledge of how React works under the hood. It is very minimal and i doubt it will be useful for any real projects.

## Table of Contents
- [Features](#features)
- [Example](#example)
- - [Nikx Source Code](#nikx-source-code)
- - [Output](#output)
- [EBNF Grammar](#ebnf-grammar)
- [How to build and run the project](#how-to-build-and-run-the-project)
- - [automatic build of the project](#automatic-build-of-the-project)
- - [manual build of the project](#manual-build-of-the-project)
- - [Running the project](#running-the-project)
- - [Running the tests](#running-the-tests)

## Features
- **Variable Declarations:** Declare variables using the `box` keyword.
- **Function Declarations:** Define functions with parameters and a function body using the `fun` .
- **Literals:** Support for number, boolean, and string literals.
- **Function Calls:** Invoke functions with arguments.
- **Nested JSX Expressions:** Create nested HTML-like structures using JSX-like syntax.


## Example
Below is an example of Nikx source code that utilizes all the supported syntactic features:

### Nikx Source Code
```nikx
//commment
box x = 42;
box message = "Hello World";
box isActive = true;


// Normal HTML elements with string literals
<p> "Hello" </p>
<button> "tesy" </button>

// Nested HTML elements
<div>
    <p> "Nested Text:"
        <button> "inner button" </button>
    </p>
    <p> "World" </p>
    <p> "!" </p>
    <button/>     <button/>     <button/>     <button/>     <button/>    <button/>    <button/>    <button/>
</div>

fun test( arg1,  arg2) {
    box insideMsg = "Inside test function";
}

test(1, 2);

```
### Output
```javascript
const x = 42;
const message = "Hello World";
const isActive = true;
const _p_10q3jLrj_79siv35eLjdw = document.createElement("p");
_p_10q3jLrj_79siv35eLjdw.appendChild(document.createTextNode("Hello"));
document.getElementById("app").appendChild(_p_10q3jLrj_79siv35eLjdw);

const _button_7o6W_XILTPDmngbjAz1mb = document.createElement("button");
_button_7o6W_XILTPDmngbjAz1mb.appendChild(document.createTextNode("tesy"));
document.getElementById("app").appendChild(_button_7o6W_XILTPDmngbjAz1mb);

const _div_Swi0JanClj27RIOvihVqV = document.createElement("div");
const _p_kg9pGgCFQD0mvEtn9e_Ue = document.createElement("p");
_p_kg9pGgCFQD0mvEtn9e_Ue.appendChild(document.createTextNode("Nested Text:"));
const _button_8mbQAVfsVVzXiZ3VfdT3s = document.createElement("button");
_button_8mbQAVfsVVzXiZ3VfdT3s.appendChild(document.createTextNode("inner button"));
_p_kg9pGgCFQD0mvEtn9e_Ue.appendChild(_button_8mbQAVfsVVzXiZ3VfdT3s);
_div_Swi0JanClj27RIOvihVqV.appendChild(_p_kg9pGgCFQD0mvEtn9e_Ue);
const _p_CD_EopLBDWH_R1tlhU6v7 = document.createElement("p");
_p_CD_EopLBDWH_R1tlhU6v7.appendChild(document.createTextNode("World"));
_div_Swi0JanClj27RIOvihVqV.appendChild(_p_CD_EopLBDWH_R1tlhU6v7);
const _p_oaIaJQjVcH310CgYjkBml = document.createElement("p");
_p_oaIaJQjVcH310CgYjkBml.appendChild(document.createTextNode("!"));
_div_Swi0JanClj27RIOvihVqV.appendChild(_p_oaIaJQjVcH310CgYjkBml);
const _button_LwrtSGu8p2GKjuERGfoiY = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_LwrtSGu8p2GKjuERGfoiY);
const _button_sx0JlS8E4XImPgdgELc1E = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_sx0JlS8E4XImPgdgELc1E);
const _button_NC2VFICMSw_GNmPNRZPwD = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_NC2VFICMSw_GNmPNRZPwD);
const _button_7c8gyTBk6_UbX7Q2Wz_Si = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_7c8gyTBk6_UbX7Q2Wz_Si);
const _button_HGa9LC3plClRA2PxJTBNV = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_HGa9LC3plClRA2PxJTBNV);
const _button_m8Sv1cB_axCF2nclTHZUk = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_m8Sv1cB_axCF2nclTHZUk);
const _button_GJojnzjcmJ8caRJQnn609 = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_GJojnzjcmJ8caRJQnn609);
const _button_qFYa3v8RGdhj_2dTbftys = document.createElement("button");
_div_Swi0JanClj27RIOvihVqV.appendChild(_button_qFYa3v8RGdhj_2dTbftys);
document.getElementById("app").appendChild(_div_Swi0JanClj27RIOvihVqV);

function test(arg1, arg2) {
const insideMsg = "Inside test function";
}

test(1, 2);
```

## EBNF Grammar
The following is the EBNF grammar for the Nikx language:
```ebnf
<program> ::= { <statement> }

<statement> ::= <variableDeclaration>
             | <functionDeclaration>
             | <htmlElement>
             | <expressionStatement>

<variableDeclaration> ::= "box" <identifier> [ "=" <expression> ] ";"

<functionDeclaration> ::= "fun" <identifier> "(" [ <parameterList> ] ")" <block>

<parameterList> ::= <identifier> { "," <identifier> }

<block> ::= "{" { <statement> } "}"

<expressionStatement> ::= <functionCall> ";"

<functionCall> ::= <identifier> "(" [ <argumentList> ] ")"

<argumentList> ::= <expression> { "," <expression> }

<expression> ::= <literal>
              | <identifier>
              | <expression> "+" <expression>

<htmlElement> ::= <htmlNormalElement>
               | <htmlSelfClosingElement>

<htmlNormalElement> ::= "<" <identifier> ">" { <htmlContent> } "</" <identifier> ">" 

<htmlSelfClosingElement> ::= "<" <identifier> "/>"

<htmlContent> ::= <htmlElement>
               | <literal>

<literal> ::= <numberLiteral>
            | <booleanLiteral>
            | <stringLiteral>

<identifier> ::= <Letter> { <Letter> | <Digit> | "_" }

<numberLiteral> ::= <Digit> { <Digit> }

<booleanLiteral> ::= "true" | "false"

<stringLiteral> ::= '"' { <Character> } '"'

<Letter> ::= "A" | "B" | ... | "Z" | "a" | "b" | ... | "z"

<Digit> ::= "0" | "1" | ... | "9"

<Character> ::= any printable character except '"'
```
## How to build and run the project

### automatic build of the project
run `build-all.bat` script in the root directory

### manual build of the project
1. Clone the repository
2. Run `npm install`  inside the nikx-compiler directory
3. Run `npm run generate` to generate the parser/lexer
4. Run `npm run build` to build the compiler
5. Run `npm install` inside the nikx-vite-plugin directory
6. Run `npm run build` inside the nikx-vite-plugin directory
7. Run `npm install` inside the nikx-application directory
8. Run `npm run build` inside the nikx-application directory

### Running the project

`npm run start`inside the nikx-application directory

### Running the tests
run `npm run test` inside the nikx-compiler directory
