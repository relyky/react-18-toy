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
    position: { x: 50, y: 200 },
  },
  {
    id: '3',
    type: 'textUpdater',
    position: { x: 200, y: 100 },
    data: { label: '我的標題', value: 123 }
  },
  { 
    id: '3', 
    type: 'textUpdater', 
    position: { x: 200, y: 0 }, 
    data: { label:'我的標題', value: 123 } 
  },
];

const initialEdges: Edge[] = [
   { id: '1-2', source: '1', target: '2', label: 'to the' /*, type: 'step' */ },
];

export function Flow() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  )

  const onConnect = useCallback(
    (connection: Edge | Connection) => setEdges((eds) => addEdge(connection, eds)),
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
        fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </Paper>
  );
}