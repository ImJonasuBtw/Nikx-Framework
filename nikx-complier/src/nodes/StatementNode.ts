import Node from './Node'
import VariableDeclarationNode from "./VariableDeclarationNode";

export default interface StatementNode extends Node {
    type: 'Statement';
    value: VariableDeclarationNode;
}