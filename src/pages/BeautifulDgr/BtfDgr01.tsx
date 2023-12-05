import React, { useEffect } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams'
import CustomNode from './CustomNode'
import styles from './BtfDgr01.module.css'

// the diagram model
const initialSchema = createSchema<any>({
    nodes: [
        { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
        { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
        { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
        { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
        { id: 'custom-node-1', coordinates: [600, 80], render: CustomNode, data: { title: '我的節點1', amount: 9876 } },
        { id: 'custom-node-2', coordinates: [800, 100], render: CustomNode, data: { title: '我的節點2', amount: 5432 } },
    ],
    links: [
        { input: 'node-1', output: 'node-2' },
        { input: 'node-1', output: 'node-3', label: 'Link 2', readonly: true },
        { input: 'node-1', output: 'node-4', label: 'Link 3', readonly: true, className: styles['my-custom-link-class'] },
        { input: 'node-4', output: 'custom-node-1', label: '就決定是你了', readonly: true },
        { input: 'custom-node-1', output: 'custom-node-2' },
    ]
});

export function BtfDgr01() {
    // create diagrams schema
    const [schema, { onChange }] = useSchema(initialSchema);

    return (
        <Paper style={{ height: '22.5rem' }}>
            <Diagram schema={schema} onChange={onChange} />

            <Box sx={{ p: 1 }}>
                <Typography variant='subtitle1'>Nodes</Typography>
                {schema.nodes.map(node =>
                    <Box key={node.id} sx={{ typography: 'body2' }}>{JSON.stringify(node)}</Box>
                )}
                <Typography variant='subtitle1'>Links</Typography>
                {schema.links?.map((link,idx) =>
                    <Box key={idx} sx={{ typography: 'body2' }}>{JSON.stringify(link)}</Box>
                )}
            </Box>
        </Paper>
    )
}
