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
      style={{ borderTop: "1px solid black", borderBottom: "1px solid black", width: "100%", textAlign: "left" }}
    >
      <thead>
        <tr>
          <th className="table-headings">
            NAME
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            TYPE
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            CREATED BY
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            MODIFIED BY
            <ArrowDropDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            LAST MODIFIED
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
              <a style={{color:"blue"}}>{report.name}</a>
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
