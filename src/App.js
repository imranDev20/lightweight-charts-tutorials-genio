import { ColorType, createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

function App() {
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = [
      { time: "2018-12-22", value: 32.51 },
      { time: "2018-12-23", value: 31.11 },
      { time: "2018-12-24", value: 27.02 },
      { time: "2018-12-25", value: 27.32 },
      { time: "2018-12-26", value: 25.17 },
      { time: "2018-12-27", value: 28.89 },
      { time: "2018-12-28", value: 25.46 },
      { time: "2018-12-29", value: 23.92 },
      { time: "2018-12-30", value: 22.68 },
      { time: "2018-12-31", value: 22.67 },
    ];

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });

    const newSeries = chart.addAreaSeries({
      lineColor: "#2962FF",
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
    });

    newSeries.setData(initialData);

    return () => [chart.remove()];
  }, []);

  return <div ref={chartContainerRef}></div>;
}

export default App;

// { lineColor: '#2962FF', topColor: '#2962FF', bottomColor: 'rgba(41, 98, 255, 0.28)' } - areaSeries
