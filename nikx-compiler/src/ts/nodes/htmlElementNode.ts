import Node from './Node'
import htmlContentNode from "./htmlContentNode";

export default interface htmlElementNode extends Node {
    type: 'htmlElement';
    tag: string;
    selfClosing: boolean;
    children: Array<htmlContentNode>;
}