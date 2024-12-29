import Node from './Node';

export default interface LiteralNode extends Node {
    type: 'Literal';
    value: string | number | boolean;
}