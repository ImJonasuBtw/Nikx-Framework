import Node from './Node'

export default interface ParameterListNode extends Node {
    type: 'ParameterList';
    parameters: string[];
}