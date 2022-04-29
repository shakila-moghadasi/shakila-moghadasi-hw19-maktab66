import React, { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import { ItemsContext } from "./MyContext";
const nodeTxt =
   "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.";
const mongoTxt =
   "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program.";

const Backend = ({ activeHandle, isEdited, setIsEdited, newItem }) => {
   const [active, setActive] = useState(false);
   const [backend, setBackend] = useState([
      { title: "Nodejs", desc: nodeTxt },
      { title: "mongo db", desc: mongoTxt },
   ]);
   const clickHandler = (item) => {
      setActive(item);
      activeHandle(item);
   };
   const handleDelete = (item) => {
      const newList = backend.filter((el) => el !== item);
      setBackend(newList);
   };

   const handleEdit = (item) => {
      setIsEdited(!isEdited);
   };
   if(newItem?.skill == 30) {
      // setBackend(newItem)
      alert("back")
   }
   return (
      <>
         <Typography sx={{ textAlign: "center" }} variant="h4">
            Back-End
         </Typography>
         {backend.map((item) => {
            return (
               <List
                  sx={{ p: 0 }}
                  key={item.title}
                  active={active === item}
                  onClick={() => clickHandler(item)}
               >
                  <ListItemButton>
                     <ListItem>
                        <ListItemText>{item.title}</ListItemText>
                        <ListItemIcon onClick={() => handleDelete(item)}>
                           <DeleteIcon />
                        </ListItemIcon>
                        <ListItemIcon onClick={() => handleEdit(item)}>
                           <EditIcon />
                        </ListItemIcon>
                     </ListItem>
                  </ListItemButton>
               </List>
            );
         })}
      </>
   );
};

export default Backend;