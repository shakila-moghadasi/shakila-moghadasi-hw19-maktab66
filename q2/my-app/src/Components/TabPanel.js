import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Backend from "./Backend";
import Webdesign from "./WebDesign";
import Frontend from "./FrontEnd";
import { Grid } from "@mui/material";
import Editform from "./EditForm";

function TabPanel(props) {
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
TabPanel.propTypes = {
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

export default function BasicTabs() {
   const [active, setActive] = useState(null);
   const [value, setValue] = useState(0);
   const [isEdited, setIsEdited] = useState(false);
   const [newItem, setNewItem] = useState(null);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const activeHandle = (activeItem) => {
      setActive(activeItem);
   };
   useEffect(() => {
     console.log(active);
   }, []);
   return (
      <>
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
            <Grid
               container
               style={{ overflowY: "auto", height: "77vh" }}
               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
               <Grid item xs={6} className="Grids">
                  <TabPanel value={value} index={0}>
                     <Frontend
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                     <Webdesign
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                     <Backend
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                     <Frontend
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                     <Webdesign
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                     <Backend
                        activeHandle={activeHandle}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                        newItem={newItem}
                     />
                  </TabPanel>
               </Grid>
               <Grid item xs={6} className="Grids">
                  {isEdited ? (
                     <Editform
                        item={active}
                        setItem={setActive}
                        isEdited={isEdited}
                        setIsEdited={setIsEdited}
                     />
                  ) : (
                     <>
                        <Typography
                           sx={{ textAlign: "center", m: 3 }}
                           variant="h4"
                        >
                           {active?.title}
                        </Typography>
                        <Typography
                           sx={{ textAlign: "center", fontSize: "18px" }}
                           variant="p"
                        >
                           {active?.desc}
                        </Typography>
                     </>
                  )}
               </Grid>
            </Grid>
            <Grid  sx={{display:"flex" , justifyContent:"center"}} xs={1} className="Grids">
               <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                 
               >
                  <Tab label="Allitems" {...a11yProps(0)} />
                  <Tab label="Frontend" {...a11yProps(1)} />
                  <Tab label="Webdesign" {...a11yProps(2)} />
                  <Tab label="Backend" {...a11yProps(3)} />
               </Tabs>
            </Grid>
         </Box>
      </>
   );
}