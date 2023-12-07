import { Container, Typography } from '@mui/material'
import Flow from './Flow'
// CSS
import 'reactflow/dist/style.css'

export default function ReactFlowLab_AppForm() {
  return (
    <Container>
        <Typography variant='h3'>React Flow Lab</Typography>
        <Flow />
    </Container>
  )
}
