import node from './Node'
import StatementNode from "./StatementNode";

export default interface BlockNode extends node {
    type: 'Block';
    statements: StatementNode[];
}