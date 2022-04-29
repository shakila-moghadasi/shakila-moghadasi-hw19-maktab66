import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";

const JavaScript =
   "JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.";
const ReactTxt =
   "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.";

const Frontend = ({ activeHandle, isEdited, setIsEdited, newItem }) => {
   const [frontend, setFrontend] = useState([
      { title: "JavaScript", desc: JavaScript },
      { title: "Reactjs", desc: ReactTxt },
   ]);
   const handleDelete = (item) => {
      const newList = frontend.filter((el) => el !== item);
      setFrontend(newList);
   };

   const handleEdit = (item) => {
      setIsEdited(!isEdited);
   };
   useEffect(() => {
      if (newItem) {
         if (newItem?.skill == 20) {
            setFrontend([...frontend, newItem]);
            console.log(newItem, "front");
         }
      }
   },[]);
   return (
      <>
         <Typography sx={{ textAlign: "center" }} variant="h4">
            Front-End
         </Typography>
         {frontend.map((item) => {
            return (
               <List
                  sx={{ p: 0 }}
                  key={item.title}
                  onClick={() => activeHandle(item)}
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

export default Frontend;