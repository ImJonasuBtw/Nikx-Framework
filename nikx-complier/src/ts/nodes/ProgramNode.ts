import Node from './Node'
import StatementNode from "./StatementNode";

export default interface ProgramNode extends Node {
    type: 'Program';
    statements: StatementNode[];
}