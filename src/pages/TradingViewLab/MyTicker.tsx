// TradingViewWidget.jsx
import { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { CopyrightStyles } from 'react-ts-tradingview-widgets';
import Widget from "./widgets/MyWidget";

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

//§§ 行情報價小工具
function TradingViewWidget() {
    return (
        <Box sx={{mb:1}}>
            <Typography variant='h6'>行情報價小工具</Typography>
            <Widget
                scriptHTML={{
                    symbols: defaultSymbols,
                    isTransparent: false,
                    showSymbolLogo: true,
                    colorTheme: "light",
                    locale: "zh_TW"
                }}
                scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
                copyrightProps={{
                    copyrightStyles,
                    href: `https://www.tradingview.com/`,
                    spanText: `Quotes`,
                }}
            />
        </Box>
    );
}

export default memo(TradingViewWidget);
