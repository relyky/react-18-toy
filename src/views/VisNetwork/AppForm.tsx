import React, { useEffect, useRef, useState } from 'react'
import { initDB, useIndexedDB } from 'react-indexed-db-hook'
import { Network } from 'vis-network'
import type { Data } from 'vis-network'
import type { IMyEdge, IMyNode } from 'interface'

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
