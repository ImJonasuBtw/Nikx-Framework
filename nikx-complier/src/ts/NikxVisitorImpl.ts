import Node from './nodes/Node'
import ProgramNode from "./nodes/ProgramNode";
import VariableDeclarationNode from "./nodes/VariableDeclarationNode";
import FunctionDeclarationNode from "./nodes/FunctionDeclarationNode";
import BlockNode from "./nodes/BlockNode";
import htmlElementNode from "./nodes/htmlElementNode";

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
                return this.generateHtmlElement(node as htmlElementNode);
            default:
                return `/* Unknown node type: ${node.type} */`;
        }
    }

    private generateHtmlElement(node: htmlElementNode): string {
        const {tag, children, selfClosing} = node;

        if (selfClosing) {
            return `document.createElement("${tag}")`;
        }

        const elementVar = `_${tag}_${Math.random().toString(36).substring(7)}`;
        let output = `const ${elementVar} = document.createElement("${tag}");\n`;

        if (children && children.length > 0) {
            for (const child of children) {
                if (typeof child === 'string') {
                    output += `${elementVar}.appendChild(document.createTextNode(${JSON.stringify(child)}));\n`;
                } else {
                    const childElement = this.generateHtmlElement(child);
                    output += `${elementVar}.appendChild(${childElement});\n`;
                }
            }
        }

        return output + `${elementVar}`;
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
            return `const ${name};`;
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