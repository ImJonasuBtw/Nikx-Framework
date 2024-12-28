import node from './Node'
import FunctionCallNode from "./FunctionCallNode";

export default interface ExpressionStatementNode extends node {
    type: 'ExpressionStatement';
    expression: FunctionCallNode;
}