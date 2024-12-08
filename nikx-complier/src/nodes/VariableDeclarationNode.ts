import Node from './Node'

export default interface VariableDeclarationNode extends Node {
    name: string;
    value?: string | number | boolean;
}