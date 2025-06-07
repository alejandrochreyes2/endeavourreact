import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "@progress/kendo-react-layout";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { gridData } from "./gridData"; // Sample data import

const DataGrid = () => {
  // Sample data - replace with your actual data source
  const data = [
    {
      id: 1,
      name: "John Doe",
      department: "Marketing",
      status: "Active",
      lastLogin: "2023-05-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Sales",
      status: "Active",
      lastLogin: "2023-05-18",
    },
    {
      id: 3,
      name: "Robert Johnson",
      department: "IT",
      status: "Inactive",
      lastLogin: "2023-04-20",
    },
    {
      id: 4,
      name: "Emily Davis",
      department: "HR",
      status: "Active",
      lastLogin: "2023-05-10",
    },
    {
      id: 5,
      name: "Michael Wilson",
      department: "Finance",
      status: "Active",
      lastLogin: "2023-05-17",
    },
    {
      id: 6,
      name: "Sarah Brown",
      department: "Marketing",
      status: "Inactive",
      lastLogin: "2023-03-22",
    },
    {
      id: 7,
      name: "David Taylor",
      department: "IT",
      status: "Active",
      lastLogin: "2023-05-19",
    },
    {
      id: 8,
      name: "Jessica Martinez",
      department: "Sales",
      status: "Active",
      lastLogin: "2023-05-14",
    },
    {
      id: 9,
      name: "Thomas Anderson",
      department: "Finance",
      status: "Inactive",
      lastLogin: "2023-02-28",
    },
    {
      id: 10,
      name: "Lisa Jackson",
      department: "HR",
      status: "Active",
      lastLogin: "2023-05-16",
    },
  ];

  // Status cell customization
  const StatusCell = (props) => {
    const status = props.dataItem.status;
    return (
      <td className={status === "Active" ? "text-success" : "text-danger"}>
        {status}
      </td>
    );
  };

  return (
    <Card className="k-data-grid">
      <CardHeader>
        <CardTitle>User Management</CardTitle>
      </CardHeader>
      <CardBody>
        <Grid
          data={data}
          sortable={true}
          pageable={true}
          pageSize={5}
          style={{ height: "400px" }}
          resizable={true}
          filterable={true}
        >
          <GridColumn field="id" title="ID" width="80px" filter="numeric" />
          <GridColumn field="name" title="Name" filter="text" />
          <GridColumn field="department" title="Department" filter="text" />
          <GridColumn
            field="status"
            title="Status"
            cell={StatusCell}
            filter="text"
          />
          <GridColumn
            field="lastLogin"
            title="Last Login"
            filter="date"
            format="{0:yyyy-MM-dd}"
          />
        </Grid>
      </CardBody>
    </Card>
  );
};

export default DataGrid;
