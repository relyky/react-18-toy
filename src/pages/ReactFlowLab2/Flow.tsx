import { useCallback } from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import ReactFlow, {
    Background,
    Controls,
    useNodesState,
    useEdgesState,
    addEdge,
    getIncomers,
    getOutgoers,
    getConnectedEdges,
    BackgroundVariant,
} from 'reactflow'
import type { Edge, Node } from 'reactflow'

const initialNodes = [
    { id: '1', type: 'input', data: { label: 'Start here...' }, position: { x: -150, y: 0 } },
    { id: '2', type: 'input', data: { label: '...or here!' }, position: { x: 150, y: 0 } },
    { id: '3', data: { label: 'Delete me.' }, position: { x: 0, y: 100 } },
    { id: '4', data: { label: 'Then me!' }, position: { x: -50, y: 200 } },
    { id: '5', type: 'output', data: { label: 'End here!' }, position: { x: 0, y: 300 } },
    { id: '4a', data: { label: 'And me!' }, position: { x: 150, y: 200 } },
];

const initialEdges = [
    { id: '1->3', source: '1', target: '3' },
    { id: '2->3', source: '2', target: '3' },
    { id: '3->4', source: '3', target: '4' },
    { id: '4->5', source: '4', target: '5' },
    { id: '3->4a', source: '3', target: '4a' },
    { id: '4a->5', source: '4a', target: '5' },
];

export default function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params: any) => setEdges(addEdge(params, edges)), [edges]);

    const onNodesDelete = useCallback(
        (deleted: Node[]) => {
            setEdges(
                deleted.reduce((acc: Edge[], node: Node) => {
                    const incomers = getIncomers(node, nodes, edges)
                    const outgoers = getOutgoers(node, nodes, edges)
                    const connectedEdges = getConnectedEdges([node], edges)
                    const remainingEdges = acc.filter(edge => !connectedEdges.includes(edge))
                    const createdEdges = incomers.flatMap(({ id: source }) =>
                        outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target })))

                    // 再移除重複的新 edge: 也就是移除 source 與 taget 相同的 edge。
                    const createdEdges2 = createdEdges.filter(edge =>
                        !remainingEdges.some(reamain => reamain.source === edge.source && reamain.target === edge.target))

                    return [...remainingEdges, ...createdEdges2]
                }, edges)
            );
        },
        [nodes, edges]
    );

    return (
        <Box>
            <Box>{`選取Node再按<Delete>或<Backspace>刪除。`}</Box>

            <Paper sx={{ height: '600px', p: 2, mb: 2 }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    deleteKeyCode={["Backspace", "Delete"]}
                    onNodesDelete={onNodesDelete}
                    onConnect={onConnect}
                    fitView
                >
                    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    <Controls />
                </ReactFlow>
            </Paper>

            <Paper sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h6'>nodes</Typography>
                        <ul>
                            {nodes.map(node => <li key={node.id}>{`id:${node.id}`}</li>)}
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h6'>edges</Typography>
                        <ul>
                            {edges.map(edge => <li key={edge.id}>{`id:${edge.id}`}</li>)}
                        </ul>
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    );
}
