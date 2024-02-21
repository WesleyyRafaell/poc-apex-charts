import React from "react";
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;



function Waterfall() {
  const options = {
    theme: "light2", 
    animationEnabled: true,
    axisX:{
      labelFontSize: 12,
      labelMaxWidth: 70,
    },
    axisY: {
      labelFontSize: 0,
    },	
    dataPointWidth: 120,
    data: [{
      type: "waterfall",
      indexLabel: "{y}",
      indexLabelPlacement: "inside",
      indexLabelFontSize: 16,
      indexLabelFontColor: "#ffffff",
      indexLabelFontWeight: "bold",
      yValueFormatString: "R$#,###,.###",
      lineColor: "#222222",
      dataPoints: [
        { label: "Atual", y: 86212734, color: "#4661EE" },
        { label: "Investimento", y: 12766340, color: "#14651C" },
        { label: "Resgate", y: -63180151, color: "#A50D0D" },
        { label: "Equilibrado", y: 35798923, color: "#4661EE" },
      ]
    }]
  }

  return (
    <div style={{width: '800px'}}>
      <CanvasJSChart options = {options} />
    </div>
  );
}

export default Waterfall;
