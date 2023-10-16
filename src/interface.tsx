
export interface IMyNode {
    id: number
    label: string
    group: string
  }
  
export interface IMyEdge {
    sn: number
    from: number
    to: number
    group: string
    label: string
    arrows: string
  }
  
export interface IVisNode {
  id: number
  label: string
} 

export interface IVisEdge {
  from: number
  to: number
  label: string
  arrows?: string
}

export interface INodeState {
  id: number
  name: string
  value: number
}

export interface IAffectRelation {
  from: number
  to: number
  shiftFrom: number
  shiftTo: number
}
