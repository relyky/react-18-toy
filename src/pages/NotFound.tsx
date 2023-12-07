import { Container, Typography, Button } from '@mui/material'
import type { FC } from 'react'

const NotFound: FC = () => {
  return (
    <Container>
      <Typography variant='h1'>404 NotFound</Typography>
      <Typography variant='h2'>Your Princess Is In Another Castle!</Typography>
      <Button href="#/" variant="contained">回首頁</Button>
    </Container>
  )
}

export default NotFound;
