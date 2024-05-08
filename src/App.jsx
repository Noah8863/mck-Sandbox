import { useState } from "react";
import "./App.css";
import data from "../data/data.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Modal from "./Modal/modal";

function App() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [text, setText] = useState("")

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
    if (option === "Re-Name") {
      setIsModalOpen(true); // Open the modal when "Share" is selected
      setText("This is passed down RE-NAME text")
    }
    if (option === "Share") {
      setIsModalOpen(true); // Open the modal when "Share" is selected
      setText("This is passed down SHARE text")
    }
    if (option === "Copy") {
      setIsModalOpen(true); // Open the modal when "Share" is selected
      setText("This is passed down COPY text")
    }
    setOpenDropdownIndex(null); // Close the dropdown after selection
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <table
      style={{
        borderTop: "1px solid grey",
        borderBottom: "1px solid grey",
        width: "100%",
        textAlign: "left",
      }}
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
              <a style={{ color: "blue" }}>{report.name}</a>
            </td>
            <td className="table-el">{report.type}</td>
            <td className="table-el">{report.created_by}</td>
            <td className="table-el">{report.modified_by}</td>
            <td className="table-el">{report.last_modified}</td>
            <td className="table-el">
              <div style={{ position: "relative" }}>
                <button
                  className="actionBtn"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    color: "blue",
                  }}
                  onClick={() => toggleDropdown(index)}
                >
                  Actions
                  {openDropdownIndex === index ? (
                    <KeyboardArrowUpIcon
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  ) : (
                    <ArrowDropDownIcon
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </button>
                {openDropdownIndex === index && (
                  <div className="dropdown-content">
                    {["Re-Name", "Share", "Copy"].map(
                      (option, optIndex) => (
                        <a
                          key={optIndex}
                          href="#"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Modal open={isModalOpen} onClose={handleCloseModal} text={text} />
    </>
  );
}

export default App;
