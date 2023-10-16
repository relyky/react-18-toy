import React, { useEffect, useRef, useState } from "react"
import { initDB, useIndexedDB } from 'react-indexed-db-hook'
import { Network } from "vis-network"
import type { Data } from "vis-network"

interface IMyNode {
  id: number
  label: string
  group: string
}

interface IMyEdge {
  sn: number
  from: number
  to: number
  group: string
  label: string
  arrows: string
}

export default function VisNetwork_AppForm() {
  const visRef = useRef<HTMLDivElement>(null)
  const nodes = useIndexedDB('nodes');
  const edges = useIndexedDB('edges');
  const [nodeList, setNodeList] = useState<IMyNode[]>([]);
  const [edgeList, setEdgeList] = useState<IMyEdge[]>([]);

  useEffect(() => {
    nodes.getAll<IMyNode>().then(nodeList => setNodeList(nodeList));
    edges.getAll<IMyEdge>().then(edgeList => setEdgeList(edgeList));
  }, []);

  // const nodes = [
  //   { id: 1, label: "Node 1", title: "tool tip 1" },
  //   { id: 2, label: "節點２", title: "tool tip 2" },
  //   { id: 3, label: "Node 3", title: "tool tip 3" },
  //   { id: 4, label: "節點四", title: "tool tip 4" },
  //   { id: 5, label: "Node 5", title: "tool tip 5" },
  //   { id: 6, label: "第六點", title: "tool tip 6" },
  // ];

  // const edges = [
  //   { from: 1, to: 3 },
  //   { from: 1, to: 2 },
  //   { from: 2, to: 4 },
  //   { from: 2, to: 5 },
  //   { from: 3, to: 3 },
  //   { from: 1, to: 5 },
  // ];

  const options = {
    height: "calc(100vh - 160px)",
    //layout: {
    //  hierarchical: true
    //},
    //edges: {
    //  color: "#000000"
    //},
  };

  useEffect(() => {
    const data: Data = {
      nodes: nodeList,
      edges: edgeList,
    };

    const network = new Network(visRef.current!, data, options);
    // Use `network` here to configure events, etc
  }, [visRef, nodeList, edgeList, options]);

  return (
    <div>
      <h4>VisNetworkLab1</h4>
      <div ref={visRef} style={{
        border: 'solid 1px darkgrey'
      }} />
    </div>
  )
}

{/* <Container>
<Typography variant='h1'>VisNetwork</Typography>
</Container> */}
