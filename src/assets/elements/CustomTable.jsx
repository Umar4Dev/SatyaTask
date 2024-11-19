import React from "react";
import "./CustomTable.scss";

const CustomTable = ({
  headers = [],
  data = [],
  renderRow,
  tableClassName = "courses-table",
  rowClassName = "",
}) => {
  return (
    <table className={tableClassName}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={rowClassName}>
            {renderRow(item, index)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
