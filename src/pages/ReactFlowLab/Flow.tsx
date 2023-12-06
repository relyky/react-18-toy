import { useState, useCallback } from 'react'
import { Paper } from '@mui/material'
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge } from 'reactflow'
import type { Node, Edge, NodeChange, EdgeChange, Connection, NodeTypes } from 'reactflow'
import TextUpdaterNode from './TextUpdaterNode'

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
    position: { x: 100, y: 100 },
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
  { id: '1-3', source: '1', target: '3', label: '去吧' },
  { id: '3-2', source: '3', target: '2', label: '來哦' },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes: NodeTypes = { textUpdater: TextUpdaterNode };

export function Flow() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  const onConnect = useCallback(
    (connection: Edge | Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  )

  return (
    <Paper style={{ height: '600px' }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </Paper>
  );
}