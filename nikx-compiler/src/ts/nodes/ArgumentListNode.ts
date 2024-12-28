import node from './Node'
import LiteralNode from "./LiteralNode";

export default interface ArgumentListNode extends node {
    type: 'ArgumentList';
    arguments: LiteralNode[];
}