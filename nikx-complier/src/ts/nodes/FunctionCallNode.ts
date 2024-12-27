import node from './Node'
import ArgumentListNode from "./ArgumentListNode";

export default interface FunctionCallNode extends node {
    type: 'FunctionCall';
    functionName: string;
    arguments: ArgumentListNode;
}