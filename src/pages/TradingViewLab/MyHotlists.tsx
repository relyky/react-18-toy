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

//§§ 股票市場小工具
function TradingViewWidget(props: { exchange: string, dateRange: string }) {
    return (
        <Widget
            scriptHTML={{
                exchange: props.exchange, //"US",
                dateRange: props.dateRange, // "1M",
                width: "100%",
                height: 600, // "100%",
                colorTheme: "light",
                showChart: true,
                locale: "zh_TW",
                largeChartUrl: "",
                isTransparent: false,
                showSymbolLogo: false,
                showFloatingTooltip: false,
                plotLineColorGrowing: "rgba(41, 98, 255, 1)",
                plotLineColorFalling: "rgba(41, 98, 255, 1)",
                gridLineColor: "rgba(240, 243, 250, 0)",
                scaleFontColor: "rgba(106, 109, 120, 1)",
                belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
                belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
                belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
                belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
                symbolActiveColor: "rgba(41, 98, 255, 0.12)"
            }}
            scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
            copyrightProps={{
                copyrightStyles,
                href: `https://www.tradingview.com/`,
                spanText: `Quotes`,
            }}
        />
    );
}

export default memo(TradingViewWidget);
