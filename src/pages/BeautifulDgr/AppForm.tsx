import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css'

// the diagram model
const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
    { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
    { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
    { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
  ],
  links: [
    { input: 'node-1', output: 'node-2' },
    { input: 'node-1', output: 'node-3' },
    { input: 'node-1', output: 'node-4' },
  ]
});

export default function BeautifulDgr_AppForm() {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <Container>
      <Typography variant='h3'>Beautiful React-Diagram Lab</Typography>
      <Paper style={{height:'22.5rem'}}>
        <Diagram schema={schema} onChange={onChange} />
      </Paper>
    </Container>
  )
}
