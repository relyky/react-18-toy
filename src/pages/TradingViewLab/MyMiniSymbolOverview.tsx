// TradingViewWidget.jsx
import { memo } from 'react';
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

//§§ 迷你圖表小工具
function TradingViewWidget(props: { symbol: string, dateRange: string }) {
    return (
        <Widget
            scriptHTML={{
                symbol: props.symbol, // "NASDAQ:AAPL",
                width: "100%",
                height: 52 + 94 + 28, // 26 + 94 + 28 // "100%",
                locale: "zh_TW",
                dateRange: "1D", // "1M",
                colorTheme: "light",
                isTransparent: false,
                autosize: true,
                largeChartUrl: "",
                chartOnly: false,
                noTimeScale: false
            }}
            scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
            copyrightProps={{
                copyrightStyles,
                href: `https://www.tradingview.com/`,
                spanText: `Quotes`,
            }}
        />
    );
}

export default memo(TradingViewWidget);
