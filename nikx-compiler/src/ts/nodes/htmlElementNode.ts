import Node from './Node'
import LiteralNode from "./LiteralNode";

export default interface htmlElementNode extends Node {
    type: 'htmlElement';
    tag: string;
    selfClosing: boolean;
    children: Array<htmlElementNode | LiteralNode>;
}