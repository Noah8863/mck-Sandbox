import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import data from "../data/data.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function App() {
  function handleDropDown() {}

  return (
    <table
      style={{ border: "1px solid black", width: "100%", textAlign: "left" }}
    >
      <thead>
        <tr>
          <th className="table-headings">
            Name
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            Type
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            Created By
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            Modified By
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            Last Modified
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.Reports.map((report, index) => (
          <tr key={index} className="table-row">
            <td className="table-el">
              <a>{report.name}</a>
            </td>
            <td className="table-el">{report.type}</td>
            <td className="table-el">{report.created_by}</td>
            <td className="table-el">{report.modified_by}</td>
            <td className="table-el">{report.last_modified}</td>
            <td className="table-el">
              <button
                className="btn"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  color: "blue",
                }}
                onClick={handleDropDown}
              >
                Actions
                <KeyboardArrowUpIcon
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
