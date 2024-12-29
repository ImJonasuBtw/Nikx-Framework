import Node from './nodes/Node'
import ProgramNode from "./nodes/ProgramNode";
import VariableDeclarationNode from "./nodes/VariableDeclarationNode";
import FunctionDeclarationNode from "./nodes/FunctionDeclarationNode";
import BlockNode from "./nodes/BlockNode";
import htmlElementNode from "./nodes/htmlElementNode";
import ExpressionStatementNode from "./nodes/ExpressionStatementNode";
import FunctionCallNode from "./nodes/FunctionCallNode";
import ArgumentListNode from "./nodes/ArgumentListNode";
import {nanoid} from "nanoid";

export default class NikxVisitorImpl {

    public generate(ast: ProgramNode): string {
        let output = '';
        for (const stmt of ast.statements) {
            output += this.generateNode(stmt) + '\n';
        }
        return output;
    }

    private generateNode(node: Node): string {
        switch (node.type) {
            case 'VariableDeclaration':
                return this.generateVarDecl(node as VariableDeclarationNode);
            case 'Statement':
                return this.generateNode((node as any).value);
            case 'FunctionDeclaration':
                return this.generateFunctionDecl(node as FunctionDeclarationNode);
            case 'Block':
                return this.generateBlock(node as BlockNode);
            case 'StatementSeparator':
                return ';';
            case 'htmlElement':
                const { code, varName } = this.generateHtmlElement(node as htmlElementNode);

                return (
                    code +
                    `document.getElementById("app").appendChild(${varName});\n`
                );
            case 'ExpressionStatement':
                return this.generateExpressionStatement(node as ExpressionStatementNode);
            case 'FunctionCall':
                return this.generateFunctionCall(node as FunctionCallNode);

            case 'ArgumentList':
                return this.generateArgumentList(node as ArgumentListNode);

            default:
                return `/* Unknown node type: ${node.type} */`;
        }
    }

    private generateExpressionStatement(node: ExpressionStatementNode): string {
        const exprCode = this.generateNode(node.expression)
        return `${exprCode};`
    }

    private generateFunctionCall(node: FunctionCallNode): string {
        const { functionName, arguments: argListNode } = node
        const argsCode = this.generateNode(argListNode)
        return `${functionName}(${argsCode})`
    }

    private generateArgumentList(node: ArgumentListNode): string {
        const argValues = node.arguments.map(litNode => {
            return this.literalToJs(litNode.value)
        })
        return argValues.join(', ')
    }

    private generateHtmlElement(node: htmlElementNode): { code: string; varName: string } {
        const { tag, children, selfClosing } = node;
        const uniqueId = nanoid().replace(/-/g, '_');
        const elementVar = `_${tag}_${uniqueId}`;

        let code = `const ${elementVar} = document.createElement("${tag}");\n`;

        if (!selfClosing && children && children.length > 0) {
            for (const child of children) {
                if (typeof child.value === 'string') {
                    code += `${elementVar}.appendChild(document.createTextNode(${JSON.stringify(child.value)}));\n`;
                } else {
                    const childResult = this.generateHtmlElement(child.value as htmlElementNode);
                    code += childResult.code;
                    code += `${elementVar}.appendChild(${childResult.varName});\n`;
                }
            }
        }

        return {
            code,
            varName: elementVar
        };
    }



    private generateFunctionDecl(node: FunctionDeclarationNode): string {
        const {name, parameters, body} = node;
        const params = parameters.join(', ');
        const bodyCode = this.generateBlock(body);
        return `function ${name}(${params}) ${bodyCode}`;
    }

    private generateBlock(node: BlockNode): string {
        const inner = node.statements.map(stmt => this.generateNode(stmt)).join('\n');
        return `{\n${inner}\n}`;
    }

    private generateVarDecl(node: VariableDeclarationNode): string {
        const {name, value} = node;
        if (value === undefined) {
            return `const ${name}= undefined;`;
        }

        const strVal = this.literalToJs(value);
        return `const ${name} = ${strVal};`;
    }

    private literalToJs(value: string | number | boolean): string {
        if (typeof value === 'string') {
            return value.toString();
        }
        if (typeof value === 'boolean') {
            return value ? 'true' : 'false';
        }
        if (typeof value === 'number') {
            return value.toString();
        }
        return 'null';
    }
}