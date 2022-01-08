import type Node from "../nodes/node";
import type { RawNode } from "../nodes/node";
export declare const propertyDeclaration: (node: RawNode, keywordPrefix: string, isVar?: boolean) => string;
export declare const variableDeclaration: (node: RawNode) => string;
export declare const interfaceType: <T>(node: RawNode, nodeName: string, mergedNamespaceChildren: readonly Node<T>[], withSemicolons?: boolean, isType?: boolean) => string;
export declare const interfaceDeclaration: (nodeName: string, node: RawNode, modifier: string) => string;
export declare const typeDeclaration: (nodeName: string, node: RawNode, modifier: string) => string;
export declare const enumDeclaration: (nodeName: string, node: RawNode) => string;
export declare const typeReference: (node: RawNode, identifier: boolean) => string;
export declare const classDeclaration: <T>(nodeName: string, node: RawNode, mergedNamespaceChildren: readonly Node<T>[]) => string;
