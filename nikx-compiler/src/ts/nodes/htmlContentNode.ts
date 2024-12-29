import node from './Node';
import htmlElementNode from "./htmlElementNode";

export default interface htmlContentNode extends node {
    type: 'htmlContent';
    value:  htmlElementNode | string;
}
