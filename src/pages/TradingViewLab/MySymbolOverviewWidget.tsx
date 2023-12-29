// TradingViewWidget.jsx
import { memo } from 'react';
import { CopyrightStyles } from 'react-ts-tradingview-widgets';
import Widget from "./MyWidget";

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
  [
    "Apple",
    "AAPL|1M"
  ],
  [
    "Google",
    "GOOGL|1M"
  ],
  [
    "Microsoft",
    "MSFT|1M"
  ],
  [
    "華星光",
    "TPEX:4979|1M"
  ],
  [
    "元太",
    "TPEX:8069|1M"
  ],
  [
    "台積電",
    "TWSE:2330|1M"
  ]
];

//§§ 商品概覽小工具
function TradingViewWidget() {
  return (
    <Widget
      scriptHTML={{
        "symbols": defaultSymbols,
        "chartOnly": false,
        "width": 1000,
        "height": 500,
        "locale": "zh_TW",
        "colorTheme": "light",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/`,
        spanText: `Quotes`,
      }}
    />
  );
}

export default memo(TradingViewWidget);
