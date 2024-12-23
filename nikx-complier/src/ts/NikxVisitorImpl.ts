import Node from '../nodes/Node'
import ProgramNode from "../nodes/ProgramNode";
import VariableDeclarationNode from "../nodes/VariableDeclarationNode";
import FunctionDeclarationNode from "../nodes/FunctionDeclarationNode";
import BlockNode from "../nodes/BlockNode";

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
            default:
                return `/* Unknown node type: ${node.type} */`;
        }
    }

    private  generateFunctionDecl(node: FunctionDeclarationNode): string {
        const { name, parameters, body } = node;
        const params = parameters.join(', ');
        const bodyCode = this.generateBlock(body);
        return `function ${name}(${params}) ${bodyCode}`;
    }

    private  generateBlock(node: BlockNode): string {
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