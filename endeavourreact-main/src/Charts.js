import React from "react";
import { Card, CardBody } from "@progress/kendo-react-layout";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";

const Charts = () => {
  const salesData = [120, 300, 150, 400, 200, 450];
  const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <Card className="k-chart-card">
      <CardBody>
        <Chart>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem type="line" data={salesData} />
          </ChartSeries>
        </Chart>
      </CardBody>
    </Card>
  );
};

export default Charts;
