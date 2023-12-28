import React, { memo } from "react";
import { ColorTheme, Locales } from 'react-ts-tradingview-widgets'
import type { CopyrightStyles } from 'react-ts-tradingview-widgets'
import Widget from "./MyWidget";

export type TickerExProps = {
    colorTheme?: ColorTheme;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    locale?: Locales;
    symbols?: TickerSymbols;

    children?: never;
    largeChartUrl?: string;

    copyrightStyles?: CopyrightStyles;
};

export type TickerSymbols = TickerSymbol[];

export type TickerSymbol = {
    proName: string;
    title: string;
};

const defaultSymbols: TickerSymbols = [
    {
        proName: "FOREXCOM:SPXUSD",
        title: "S&P 500",
    },
    {
        proName: "FOREXCOM:NSXUSD",
        title: "Nasdaq 100",
    },
    {
        proName: "FX_IDC:EURUSD",
        title: "EUR/USD",
    },
    {
        proName: "BITSTAMP:BTCUSD",
        title: "BTC/USD",
    },
    {
        proName: "BITSTAMP:ETHUSD",
        title: "ETH/USD",
    },
];

const Ticker: React.FC<TickerExProps> = ({
    colorTheme = "light",
    isTransparent = false,
    showSymbolLogo = true,
    locale = "en",
    symbols = defaultSymbols,
    copyrightStyles,
    ...props
}) => {
    return (
        <Widget
            scriptHTML={{
                colorTheme,
                isTransparent,
                showSymbolLogo,
                locale,
                symbols,
                ...props,
            }}
            copyrightProps={{
                copyrightStyles,
                href: `https://www.tradingview.com/`,
                spanText: `Quotes`,
            }}
        />
    );
};

export default memo(Ticker);