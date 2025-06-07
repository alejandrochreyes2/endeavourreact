import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  FaDollarSign,
  FaUser,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

import "./StatsCards.css";

const StatsCards = () => {
  const cards = [
    {
      title: "Total Revenue",
      value: "$32,484",
      icon: <FaDollarSign size={20} />,
      trend: "+12%",
    },
    {
      title: "Total Users",
      value: "1,250",
      icon: <FaUser size={20} />,
      trend: "+5%",
    },
    {
      title: "Orders",
      value: "564",
      icon: <FaShoppingCart size={20} />,
      trend: "-2%",
    },
    {
      title: "Performance",
      value: "89%",
      icon: <FaChartLine size={20} />,
      trend: "+7%",
    },
  ];

  return (
    <div className="k-stats-cards">
      {cards.map((card, index) => (
        <Card key={index} className="k-stat-card">
          <CardBody>
            <CardTitle>
              <SvgIcon icon={card.icon} />
              <span>{card.title}</span>
            </CardTitle>
            <h3>{card.value}</h3>
            <CardSubtitle>{card.trend}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
