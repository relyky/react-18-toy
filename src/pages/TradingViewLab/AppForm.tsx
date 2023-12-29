import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link } from '@mui/material'
import SymbolOverview from './MySymbolOverview';
import Ticker from './MyTicker';
import MiniSymbolOverview from './MyMiniSymbolOverview'
import TechnicalAnalysis from './MyTechnicalAnalysis'

const defaultSymbols = [
  {
    "description": "蘋果",
    "proName": "NASDAQ:AAPL"
  },
  {
    "description": "Google",
    "proName": "NASDAQ:GOOG"
  },
  {
    "description": "微軟",
    "proName": "NASDAQ:MSFT"
  },
  {
    "description": "華星光",
    "proName": "TPEX:4979"
  },
  {
    "description": "元太",
    "proName": "TPEX:8069"
  },
];

export default function TradingViewLab_AppForm() {
  const [searchParams] = useSearchParams();
  const chartSymbol = useMemo(() => searchParams.get('tvwidgetsymbol'), [searchParams]);

  return (
    <Container>
      <Typography variant='h3'>Trading View Lab</Typography>

      {/* 行情報價小工具 */}
      <Ticker />

      {/* 迷你圖表小工具 */}
      <Box sx={{ mb: 1 }}>
        <Typography variant='h6'>迷你圖表小工具(１天)</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <MiniSymbolOverview symbol='NASDAQ:AAPL' dateRange='1D' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MiniSymbolOverview symbol='NASDAQ:GOOG' dateRange='1D' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MiniSymbolOverview symbol='NASDAQ:MSFT' dateRange='1D' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MiniSymbolOverview symbol='TPEX:4979' dateRange='1D' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MiniSymbolOverview symbol='TPEX:8069' dateRange='1D' />
          </Grid>
        </Grid>
      </Box>

      {/* 技術分析小工具 */}
      <Box sx={{ mb: 1 }}>
        <Typography variant='h6'>技術分析小工具</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TechnicalAnalysis symbol='NASDAQ:AAPL' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechnicalAnalysis symbol='NASDAQ:GOOG' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechnicalAnalysis symbol='NASDAQ:MSFT' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechnicalAnalysis symbol='TPEX:4979' />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TechnicalAnalysis symbol='TPEX:8069' />
          </Grid>
        </Grid>
      </Box>

      {/* 商品概覽小工具 */}
      <SymbolOverview />

      {/* 高級即時圖表小工具 */}
      {/* {chartSymbol &&
        <AdvancedRealTimeChart
          autosize={false}
          width='100%'
          height='500px'
          locale='zh_TW'
          symbol={chartSymbol!}
          copyrightStyles={copyrightStyles}
        />} */}



      <Box typography='body1' sx={{ m: 2 }} >參考：<Link href="https://tw.tradingview.com/widget/">我們的市場小工具就是您的市場小工具。</Link></Box>

    </Container>
  )
}
