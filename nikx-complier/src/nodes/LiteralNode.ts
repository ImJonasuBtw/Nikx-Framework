import Node from './Node';

export default interface LiteralNode extends Node {
    value: string | number | boolean;
}