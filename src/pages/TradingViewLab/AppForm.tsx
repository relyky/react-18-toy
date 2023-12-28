import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material'
import { AdvancedRealTimeChart, TickerTape } from 'react-ts-tradingview-widgets'
import type { CopyrightStyles, TickerTapeSymbol } from 'react-ts-tradingview-widgets'
import Ticker from './MyTicker';

const copyrightStyles: CopyrightStyles = {
  parent: {
    display: 'none',
  },
  link: {
    display: 'none',
  },
  span: {
    display: 'none',
  },
};

const tickerSymbols: TickerTapeSymbol[] = [
  {
    proName: 'NASDAQ:AAPL',
    title: 'NASDAQ-蘋果'
  },
  {
    proName: 'NASDAQ:MSFT',
    title: 'NASDAQ-微軟'
  },
  {
    proName: 'TWSE:2330',
    title: 'TWSE-台積電'
  },
]

export default function TradingViewLab_AppForm() {
  const [searchParams] = useSearchParams();
  const chartSymbol = useMemo(() => searchParams.get('tvwidgetsymbol'), [searchParams]);

  return (
    <Container>
      <Typography variant='h3'>Trading View Lab</Typography>

      {/* 報價條小工具 */}
      <TickerTape
        symbols={tickerSymbols}
        locale='zh_TW'
        largeChartUrl={`${window.location.origin}/react-18-toy/#/trading-view`}
        copyrightStyles={copyrightStyles} />

      <Box sx={{ mb: 1 }}></Box>

      {/* 行情報價小工具 */}
      <Ticker
        symbols={tickerSymbols}
        locale='zh_TW'
        largeChartUrl={`${window.location.origin}/react-18-toy/#/trading-view`}
        copyrightStyles={copyrightStyles} />

      <Box sx={{ mb: 1 }}></Box>

      {/* 高級即時圖表小工具 */}
      {chartSymbol &&
        <AdvancedRealTimeChart
          autosize={false}
          width='100%'
          height='500px'
          locale='zh_TW'
          symbol={chartSymbol!}
          copyrightStyles={copyrightStyles}
        />}

      {/* <TradingViewWidget /> */}

      {/* tail */}
      <Box sx={{ p: 3, backgroundColor: 'error.main', color: 'error.contrastText' }}>TAIL</Box>
    </Container>
  )
}
