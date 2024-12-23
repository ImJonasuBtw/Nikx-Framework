import {VariableDeclarationContext} from '../generated/NikxParser.js'
import Node from '../nodes/Node'
import ProgramNode from "../nodes/ProgramNode";
import VariableDeclarationNode from "../nodes/VariableDeclarationNode";

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
            case 'StatementSeparator':
                return ';';
            default:
                return `/* Unknown node type: ${node.type} */`;
        }
    }

    private generateVarDecl(node: VariableDeclarationNode): string {
        const {name, value} = node;
        if (value === undefined) {
            return `var ${name};`;
        }

        const strVal = this.literalToJs(value);
        return `var ${name} = ${strVal};`;
    }

    private literalToJs(value: string | number | boolean): string {
        if (typeof value === 'string') {
            return JSON.stringify(value);
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