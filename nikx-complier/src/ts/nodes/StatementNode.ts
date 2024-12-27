import Node from './Node'
import VariableDeclarationNode from "./VariableDeclarationNode";
import FunctionDeclarationNode from "./FunctionDeclarationNode";
import htmlElementNode from "./htmlElementNode";
import ExpressionStatementNode from "./ExpressionStatementNode";

export default interface StatementNode extends Node {
    type: 'Statement';
    value: VariableDeclarationNode | FunctionDeclarationNode | htmlElementNode | ExpressionStatementNode;
}