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

//§§ 技術分析小工具
function TradingViewWidget(props: { symbol: string }) {
    return (
        <Widget
            scriptHTML={{
                symbol: props.symbol, // "NASDAQ:AAPL",
                interval: "1D",
                width: "100%",
                height: 368, // "100%",
                isTransparent: false,
                showIntervalTabs: true,
                displayMode: "single",
                locale: "zh_TW",
                colorTheme: "light"
            }}
            scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
            copyrightProps={{
                copyrightStyles,
                href: `https://www.tradingview.com/`,
                spanText: `Quotes`,
            }}
        />
    );
}

export default memo(TradingViewWidget);
