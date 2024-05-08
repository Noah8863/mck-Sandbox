import { useState } from "react";
import data from "../../data/data.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./access.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Access() {
  const [value, setValue] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Teams" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ padding: "10px"}}>
          <tbody>
            {data.Reports.map((report, index) => (
              <tr key={index} className="table-row">
                <td className="access-table-el">
                  <PersonIcon></PersonIcon>
                  <a style={{ color: "blue" }}>{report.name}</a>
                </td>

                <td className="access-table-el">
                  <div style={{ position: "relative" }}>
                    <button
                      className="accessActionBtn"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        color: "blue",
                      }}
                      onClick={() => toggleDropdown(index)}
                    >
                      Can edit
                      {openDropdownIndex === index ? (
                        <KeyboardArrowUpIcon
                          style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                          }}
                        />
                      ) : (
                        <KeyboardArrowDownIcon
                          style={{
                            display: "inline-block",
                            verticalAlign: "middle",
                          }}
                        />
                      )}
                    </button>
                    {openDropdownIndex === index && (
                      <div className="dropdown-content">
                        {[
                          "Can view",
                          "Can Edit",
                          "Edit including folder settings",
                          
                        ].map((option, optIndex) => (
                          <a
                            key={optIndex}
                            href="#"
                            onClick={() => handleSelect(option, report.name)}
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}
