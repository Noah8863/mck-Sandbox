import { useState } from "react";
import "./App.css";
import data from "../data/data.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from "./Modal/modal";
import ReName from "./Modal-Containers/ReName"
import Access from "./Modal-Containers/Access"
import Create from "./Modal-Containers/Create"
import Delete from "./Modal-Containers/Delete"

function App() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [buttonText, setButtonText] = useState('Save');
  const [headerText, setHeaderText] = useState('Edit');

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleOpenReName = () => {
    setModalContent(
      <ReName onConfirm={(name, description) => {
        console.log('Name:', name, 'Description:', description);
        setIsModalOpen(false);
      }} />
    );
    setButtonText('Create');
    setHeaderText('Rename Report')
    setIsModalOpen(true);
  };

  const handleOpenAccess = () => {
    setModalContent(
      <Access onConfirm={(name, description) => {
        setIsModalOpen(false);
      }} />
    );
    setButtonText('Save');
    setHeaderText('Manage Access Options')
    setIsModalOpen(true);
  };

  const handleOpenCreate = () => {
    setModalContent(
      <Create />
    )
    setButtonText('Save');
    setHeaderText('Create Folder')
    setIsModalOpen(true);
  };

  const handleOpenDelete = (name) => {
    setModalContent(
      <Delete name={name}
      onConfirm={() => {
        //Delete logic will go here
        setIsModalOpen(false)
      }} 
      />
    )
    setButtonText('Save');
    setHeaderText('Confirm delete?')
    setIsModalOpen(true);
  };

  const handleSelect = (option, name) => {
    switch (option) {
      case "Rename":
        handleOpenReName();
        break;
      case "Manage Access Options":
        handleOpenAccess();
        break;
      case "Create Folder":
        handleOpenCreate();
        break;
      case "Delete":
        handleOpenDelete(name);
        break;
    }
    setOpenDropdownIndex(null);
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
            <KeyboardArrowDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            TYPE
            <KeyboardArrowDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            CREATED BY
            <KeyboardArrowDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            MODIFIED BY
            <KeyboardArrowDownIcon
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </th>
          <th className="table-headings">
            LAST MODIFIED
            <KeyboardArrowDownIcon
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
              <div style={{ position: "relative" }}>
                <button
                  className="actionBtn"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  onClick={() => toggleDropdown(index)}
                >
                  Actions
                    <KeyboardArrowUpIcon
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                </button>
                {openDropdownIndex === index && (
                  <div className="dropdown-content">
                    {["Rename", "Manage Access Options", "Create Folder", "Delete"].map(
                      (option, optIndex) => (
                        <a
                          key={optIndex}
                          href="#"
                          onClick={() => handleSelect(option, report.name)}
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
    <Modal open={isModalOpen} onClose={handleCloseModal} handleCloseModal={handleCloseModal} buttonText={buttonText} headerText={headerText}>{modalContent}</Modal>
    </>
  );
}

export default App;
