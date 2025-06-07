import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "@progress/kendo-react-layout";
import { ListView, ListViewItemWrapper } from "@progress/kendo-react-listview";
import {
  clockIcon,
  userIcon,
  cartIcon,
  dollarIcon,
  globeIcon,
} from "@progress/kendo-svg-icons";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      icon: userIcon,
      title: "New user registered",
      description: "John Doe joined the platform",
      time: "2 minutes ago",
    },
    {
      id: 2,
      icon: cartIcon,
      title: "Order completed",
      description: "Order #12345 was shipped",
      time: "1 hour ago",
    },
    {
      id: 3,
      icon: dollarIcon,
      title: "Payment received",
      description: "$1,250.00 from Acme Inc.",
      time: "3 hours ago",
    },
    {
      id: 4,
      icon: globeIcon,
      title: "New location added",
      description: "Tokyo office now available",
      time: "1 day ago",
    },
    {
      id: 5,
      icon: userIcon,
      title: "Profile updated",
      description: "Sarah Johnson updated her profile",
      time: "2 days ago",
    },
  ];

  const ActivityItem = (props) => {
    const { icon, title, description, time } = props.dataItem;
    return (
      <ListViewItemWrapper className="k-activity-item">
        <div className="k-activity-icon">
          <span className="k-svg-icon">{icon}</span>
        </div>
        <div className="k-activity-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="k-activity-time">
            <span className="k-svg-icon">{clockIcon}</span>
            <span>{time}</span>
          </div>
        </div>
      </ListViewItemWrapper>
    );
  };

  return (
    <Card className="k-recent-activities">
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardBody>
        <ListView
          data={activities}
          item={ActivityItem}
          className="k-activity-list"
        />
      </CardBody>
    </Card>
  );
};

export default RecentActivities;
