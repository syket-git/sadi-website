import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Personal from "../Personal/Personal";
import Header from "../../Home/Header/Header";
import NavBar from "../../Home/NavBar/NavBar";
import Career from "../Career/Career";
import Lifestyle from "../Lifestyle/Lifestyle";
import "./Registration.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "aliceblue",
    width: 600,
    marginTop: 30,
    marginLeft: 230,
  },
}));

const Registration = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="container">
      <div className="headerBg">
        <NavBar></NavBar>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              className="brand-text"
              label="Personal Details"
              {...a11yProps(0)}
            />
            <Tab
              className="brand-text"
              label="Career Details"
              {...a11yProps(1)}
            />
            <Tab
              className="brand-text"
              label="Lifestyle & Family"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Personal></Personal>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Career></Career>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Lifestyle></Lifestyle>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Registration;
