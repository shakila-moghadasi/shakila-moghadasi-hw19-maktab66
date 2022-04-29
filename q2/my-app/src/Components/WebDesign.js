import React, { useContext, useState } from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";

const HTML =
   "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.";
const CSS =
   "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.";

const Webdesign = ({ activeHandle, isEdited, setIsEdited , newItem}) => {
   const [active, setActive] = useState(false);
   const [webDesign, setWebDesign] = useState([
      { title: "HTML", desc: HTML },
      { title: "CSS", desc: CSS },
   ]);
   const clickHandler = (item) => {
      setActive(item);
      activeHandle(item);
   };
   const handleDelete = (item) => {
      const newList = webDesign.filter((el) => el !== item);
      setWebDesign(newList);
   };

   const handleEdit = (item) => {
      setIsEdited(!isEdited);
   };
   if(newItem?.skill == 10) {
      // setWebDesign(newItem)
      alert("web")
   }
   return (
      <>
         <Typography sx={{ textAlign: "center" }} variant="h4">
            Web Design
         </Typography>
         {webDesign.map((item) => {
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

export default Webdesign;