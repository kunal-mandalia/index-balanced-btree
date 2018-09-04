export type TreeItem = {
  arrayIndex: number;
  data: any;
}

export type TreeRow = TreeItem[]

export type Tree = TreeRow[]

export type InputArray = any[]

export interface INodeIndex {
  row: number,
  col: number
}
