import { useEffect, useState } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { useCounter, useInterval } from 'usehooks-ts'
import ReactFlow, { Background, Controls, useNodesState, useEdgesState } from 'reactflow'
import type { Edge, Node, NodeTypes } from 'reactflow'
import CustomNode from './CustomNode'

const initialNodes = [
    { id: 'n1', type: 'custom-node', data: { label: 'Node 1', amount: 1000 }, position: { x: 100, y: 100 } },
    { id: 'n2', type: 'custom-node', data: { label: 'Node 2', amount: 1000 }, position: { x: 50, y: 200 } },
    { id: 'n3', type: 'custom-node', data: { label: 'Node 3', amount: 1000 }, position: { x: 150, y: 300 } },
]

const initialEdges = [
    { id: 'e1-2', source: 'n1', target: 'n2', animated: false },
    { id: 'e2-3', source: 'n2', target: 'n3', animated: false },
    { id: 'e3-1', source: 'n3', target: 'n1', animated: false },
]

const nodeTypes: NodeTypes = { 'custom-node': CustomNode, }

export default function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const { count, increment } = useCounter(0)
    const [edgeId, setEdgeId] = useState('')

    useInterval(increment, 1500)

    useEffect(() => {
        if (count === 0) return;
        const count2 = count % 3;
        const edgeId = count2 === 2 ? 'e3-1' : count2 === 1 ? 'e2-3' : 'e1-2';
        console.debug('edgeId', edgeId)
        setEdgeId(edgeId)
    }, [count])

    useEffect(() => {
        if (edgeId === '') return

        const edge = edges.find(edge => edge.id === edgeId)
        if(!edge) return

        let source_unless = true // 用於：防止跑第２輪
        let target_unless = true // 用於：防止跑第２輪
        setNodes(nds => nds.map(node => {
            if (node.id === edge.source && source_unless) {
                source_unless = false // 防止跑第２輪
                const data = node.data
                console.debug('source.amount', data.amount)
                node.data = { ...data, amount: data.amount - 10 }
            }

            if (node.id === edge.target && target_unless) {
                target_unless = false // 防止跑第２輪
                const data = node.data
                console.debug('target.amount', data.amount)
                node.data = { ...data, amount: data.amount + 10 }
            }

            return node
        }))
    }, [edgeId])

    useEffect(() => {
        if (edgeId === '') return

        setEdges(eds => eds.map(edge => {
            edge = { ...edge, animated: edge.id === edgeId }
            return edge
        }))
    }, [edgeId])

    return (
        <Paper sx={{ height: '500px', p: 2, mb: 2 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
            >
                <p>{count}</p>
                <Background />
                <Controls />
            </ReactFlow>
        </Paper>
    )
}