import React from 'react'
import { Container, Typography } from '@mui/material'
import { BtfDgr01 } from './BtfDgr01'
// CSS
import 'beautiful-react-diagrams/styles.css'

export default function BeautifulDgr_AppForm() {

  return (
    <Container>
      <Typography variant='h3'>Beautiful React-Diagram Lab</Typography>
      <BtfDgr01 />
    </Container>
  )
}
