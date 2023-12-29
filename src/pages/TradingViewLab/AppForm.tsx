import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material'
import type { CopyrightStyles, TickerTapeSymbol } from 'react-ts-tradingview-widgets'
import SymbolOverview from './MySymbolOverviewWidget';
import MyTicker from './MyTicker';

export default function TradingViewLab_AppForm() {
  const [searchParams] = useSearchParams();
  const chartSymbol = useMemo(() => searchParams.get('tvwidgetsymbol'), [searchParams]);

  return (
    <Container>
      <Typography variant='h3'>Trading View Lab</Typography>

      {/* 行情報價小工具 */}
      <MyTicker />

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

    </Container>
  )
}
