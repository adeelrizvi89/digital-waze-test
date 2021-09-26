import React from "react";

const TableChart = () => {
  const tableData = [
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
    {
      name: "Lorem ipsum",
      lastName: "Lorem ipsum",
      address: "Lorem ipsum",
      office: "Lorem ipsum",
      phone: "Lorem ipsum",
      mobile: "Lorem ipsum",
    },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>Program Name</th>
          <th>Program Name</th>
          <th>Program Name</th>
          <th>Program Name</th>
          <th>Program Name</th>
          <th>Program Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((x) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.lastName}</td>
            <td>{x.address}</td>
            <td>{x.mobile}</td>
            <td>{x.phone}</td>
            <td>{x.office}</td>
            <td>
              <div className="filter">
                <p>
                  <i class="fas fa-eye"></i>
                </p>
                <p>
                  {" "}
                  <i class="fas fa-caret-down"></i>
                </p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableChart;
