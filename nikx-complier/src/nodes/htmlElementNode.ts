import Node from './Node'

export default interface htmlElementNode extends Node {
    type: 'htmlElement';
    tag: string;
    selfClosing: boolean;
    children: (htmlElementNode | string)[];
}