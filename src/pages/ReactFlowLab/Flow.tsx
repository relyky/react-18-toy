import { useState, useCallback } from 'react'
import { Paper } from '@mui/material'
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge, useNodesState, useEdgesState } from 'reactflow'
import type { Node, Edge, Connection, NodeTypes, EdgeTypes } from 'reactflow'
import TextUpdaterNode from './TextUpdaterNode'
import CustomEdge from './CustomEdge'

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    //type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: -50, y: 200 },
  },
  {
    id: '3',
    type: 'textUpdater',
    position: { x: 150, y: 100 },
    data: { label: '我的標題', value: 123 }
  },
];

const initialEdges: Edge[] = [
  { id: '1-2', source: '1', target: '2', label: 'to the', animated: true },
  { id: '1-3', source: '1', target: '3', label: '去吧', animated: true, type: 'custom-edge' },
];

const nodeTypes: NodeTypes = { textUpdater: TextUpdaterNode, };
const edgeTypes: EdgeTypes = { 'custom-edge': CustomEdge, }

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Edge | Connection) => {
      const edge = { ...connection, animated: true, type: 'custom-edge' };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  return (
    <Paper style={{ height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </Paper>
  );
}