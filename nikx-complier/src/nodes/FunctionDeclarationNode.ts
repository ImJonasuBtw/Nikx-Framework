import node from './Node'
import BlockNode from "./BlockNode";

export default interface FunctionDeclarationNode extends node {
    type: 'FunctionDeclaration';
    name: string;
    parameters: string[];
    body: BlockNode;
}