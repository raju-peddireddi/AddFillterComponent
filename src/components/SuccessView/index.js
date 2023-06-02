import CheckBox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles"
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react"
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './index.css'

const useStyles = makeStyles({
  listDataContainer:{
    marginTop: '4px',
    paddingLeft: 0,
    marginLeft: '16px',
    marginRight: '16px',
    maxHeight: "140px",
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '6px',
      height: "5px",
      backgroundColor: '',
      borderRadius: '22px',
      right:'3px' 
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: "#505767",
      height: "105px",
      borderRadius: '4px',
 
    },
  }
})

let myArray = [
  { id: 1, label: 'Schneider Electric India' },
  { id: 1, label: 'Schneider Electric India' },
  { id: 1, label: 'Schneider Electric India' },
  { id: 1, label: 'Schneider Electric India' },
  { id: 1, label: 'Schneider Electric India' },
 
  // Add more checkboxes as needed
];

export default function SuccessView() {
  const [checkedItems, setCheckedItems] = useState(myArray);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };
  

  const classes = useStyles()
    return(
  <div className="view-container">
      <div className="selected-card">
        <div className='count-container'>
          <CheckBox   sx={{ color: '#9497A1', '&.Mui-checked': { color: '#D9D9D9' }, width: '16px', height: '16px'}}
              indeterminate={true}/>
          <p className="items-selected">Select All</p>
        </div>
        <p className='items-selected'>0 items selected</p>
      </div>
         <ul className={classes.listDataContainer} >
            {myArray.map(each => <li className="list-item"><CheckBox sx={{color: '#9497A1', width:'16px', height: '16px',  }}/><p  className="list-content">{each.label}</p></li>)}
       </ul>
  </div>
  )}