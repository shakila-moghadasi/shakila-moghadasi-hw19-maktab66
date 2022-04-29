import React, {useState} from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const style = {
  width: 300,
  height: 400,
  border: "none",
  m: "auto",
  p: 4,
  display:"flex",
  flexDirection:"column"
};
const Editform = ({item, setItem, isEdited, setIsEdited}) => {

  const [editedItem, setEditedItem] = useState(item);

  const clickHandler = (newItem) => {
    setEditedItem(newItem)
    setItem(newItem)
    setIsEdited(!isEdited)
  }
   return (
      <>
         <Box sx={style}>
            <TextField
               name="title"
               id="standard-basic"
               variant="standard"
               value={editedItem?.title}
               onChange={(e)=> setEditedItem({[e.target.name]:e.target.value})}
            />
            <FormControl variant="standard" sx={{ my: 3, minWidth: 140 }}>
               <InputLabel id="demo-simple-select-standard-label">
                  Skills
               </InputLabel>
               <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  
                  label="Age"
               >
                  <MenuItem value={10}>Web Designe</MenuItem>
                  <MenuItem value={20}>Front End</MenuItem>
                  <MenuItem value={30}>Back End</MenuItem>
               </Select>
            </FormControl>
            <TextField
               sx={{ pb: 3 }}
               id="standard-basic"
               name="desc"
               value={editedItem?.desc}
               variant="standard"
               multiline
               rows={4}
               onChange={(e)=> setEditedItem({[e.target.name]:e.target.value})}
            />
            <Button onClick={clickHandler}  variant="text">
               Edit
            </Button>
         </Box>
      </>
   );
};

export default Editform;