import FusionCharts from 'fusioncharts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import TreeMap from 'fusioncharts/fusioncharts.treemap';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, PowerCharts ,TreeMap,FusionTheme);

const chartData = [
  {
    label: "Atual",
    value: "86212.734"
  },
  {
    label: "Investimento",
    value: "12766.340"
  },
  {
    label: "Resgate",
    value: "-63180.151"
  },
  {
    label: "Equilibrado",
    value: "35798.923"
  }
]

const chartConfigs = {
  type: "waterfall2d",
  width: "700",
  height: "400",
  dataFormat: "json",
  dataSource: {
    chart: {
      subcaption1: "Last month",
      numberprefix: "R$",
      showsumatend: "0",
      numberscalevalue: "1000",
      numbersuffix: "M",
      showvalues: "1",
      theme: "candy",
      plottooltext: "$label <b>$datavalue</b>",
      palettecolors: "#639BEF, #14651C, #A50D0D, #639BEF",
      usePlotGradientColor: "0",
      placeValuesInside: "0",
      valueFontColor: "#545454",
      valueFont: "Arial",
      valueFontSize: "14",
      decimalSeparator: ",",
      thousandSeparator: ".",
      canvasTopPadding: "80",
      canvasLeftPadding: "0",
      valueFontBold: "1",
      showPlotBorder: "0",
      showCanvasBorder: "0",
      yAxisValueFontSize: "0.5px",
      bgColor: "#ffffff",
      showBorder: "1",
    },
    data: chartData
  }
};

const Waterfall = () => {
  return (
    <ReactFC {...chartConfigs} />
  )
}

export default Waterfall