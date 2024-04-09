import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart( {series}) {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3,6K",
      user: "Users",
    },
    {
      Title: "2m",
      user: "Clicks",
    },
    {
      Title: "$772",
      user: "Sales",
    },
    {
      Title: "82",
      user: "Items",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>CUSTOMER WAITING TIME</Title>
        
      </div>
    </>
  );
}

export default EChart;
