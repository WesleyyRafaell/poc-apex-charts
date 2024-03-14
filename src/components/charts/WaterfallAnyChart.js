import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const api = [
  { label: "Atual", value: '30000000'},
  { label: "Excedente", value: '-15000000'},
  { label: "Requerido", value: '5000000'},
  { label: "Proposto futuro", value: '-20000000'},
  { label: "Estagnado", value: '-12000000'},
]

function Waterfall() {
  const colors = ['#4661EE', '#14651C', '#A50D0D', '#4661EE', '#A02B93']

  const datap = api.map((item, index) => {
    const value =  item.value.replace('-','').slice(0, 2)

    return {
      label: item.label,
      y: Number(item.value),
      color: colors[index],
      indexLabel: `R$${value}M`
    }
  })


  const options = {
    theme: "light2", 
    animationEnabled: true,
    axisX:{
      labelFontSize: 12,
      labelMaxWidth: 70,
    },
    axisY: {
      // labelFontSize: 0,
    },
    toolTip: {
      contentFormatter: function ( e ) {
        const newValues = String(e.entries[0].dataPoint.y).replace('-', '')
        return `${e.entries[0].dataPoint.label}: ` +  newValues;  
      } 
    },
    dataPointWidth: 120,
    data: [{
      type: "waterfall",
      indexLabel: "{y}",
      indexLabelPlacement: "inside",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#ffffff",
      indexLabelFontWeight: "bold",
      yValueFormatString: "R$#,###.#",
      lineColor: "#222222",
      dataPoints: datap,
    }]
  }

  return (
    <div style={{width: '800px'}}>
      <CanvasJSChart options = {options} />
    </div>
  );
}

export default Waterfall;
