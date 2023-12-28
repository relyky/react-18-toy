import { Box, Container, Typography } from '@mui/material'
import TradingViewWidget from './TradingViewWidget'
import { blue } from '@mui/material/colors'

export default function TradingViewLab_AppForm() {
  return (
    <Container>
      <Typography variant='h3'>Trading View Lab</Typography>

      <Box sx={{overflow:'hidden'}}>
        <TradingViewWidget />
      </Box>

      {/* tail */}
      <Box sx={{ mb: 3, pb:3, backgroundColor: 'blue' }}>TAIL</Box>
    </Container>
  )
}
