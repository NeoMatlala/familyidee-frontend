declare module 'd3-org-chart' {
  export class OrgChart<TData = any> {
    container(el: HTMLElement | string): this
    data(data: TData[]): this
    layout(value: 'top' | 'bottom' | 'left' | 'right'): this
    compact(value: boolean): this
    nodeWidth(fn: (d: any) => number): this
    nodeHeight(fn: (d: any) => number): this
    siblingsMargin(fn: (d: any) => number): this
    childrenMargin(fn: (d: any) => number): this
    compactMarginBetween(fn: (d: any) => number): this
    compactMarginPair(fn: (d: any) => number): this
    initialZoom(value: number): this
    nodeContent(fn: (d: any, i: number, arr: any[], state: any) => string): this
    linkUpdate(fn: (this: SVGPathElement, d: any, i: number, arr: any[]) => void): this
    onNodeClick(fn: (d: any) => void): this
    render(): this
    fit(): this
    expandAll(): this
    collapseAll(): this
  }
}