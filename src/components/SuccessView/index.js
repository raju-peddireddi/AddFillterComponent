import CheckBox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles"
import { useEffect, useState } from "react"
import './index.css'

const useStyles = makeStyles({
  listDataContainer:{
    marginTop: '4px',
    paddingLeft: 0,
    marginLeft: '13px',
    marginRight: '16px',
    maxHeight: "192px",
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
  },
  // checkbox:{
  //   '&.Mui-checked + .MuiIconButton-root': {
  //     backgroundColor: 'white',
  //   },  
  // }
  
  checkedFalse:{
    color: "#1565c0 !important"
  }
  ,checkedTrue:{
    color: '#D9D9D9 !important'
  },
  checkbox: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: "42%",
      transform: "translate(-50%, -50%) rotate(45deg)",
      width: "5px",
      height: "10px",
      border: "solid white",
      borderWidth: "0 3px 3px 0",
      opacity: 0
    },
    "&.Mui-checked::after": {
      opacity: 1
    }
  }
})



export default function SuccessView({listItems, handleAnyCheckboxClick}) {
  const [selectAll, setSelectAll] = useState(true)
  const [checkedItems, setCheckedItems] = useState(listItems);
  const [selectedItems, setSelectedItems] = useState(0);
  
   useEffect(() => {
      setCheckedItems(listItems)
   }, [listItems])

  const totalItemsSelected = (updatedItems) => {
    let count = updatedItems.filter(item =>  item.checked).length;
    setSelectedItems(count)
    
  }
  const handleSelectAllItems = () => {
    if (selectAll){
        let filteredList = checkedItems.map(item => ({...item, checked: true}))
        setCheckedItems(filteredList)
        setSelectedItems(filteredList.length)
        setSelectAll(!selectAll)
        let isChecked = filteredList.some(each => each.checked === true)
        handleAnyCheckboxClick(isChecked, filteredList)
    }
    else{
      let filteredList = checkedItems.map(item => ({...item, checked: false}))
      let isChecked = filteredList.some(each => each.checked === true)
        handleAnyCheckboxClick(isChecked, filteredList)
      setCheckedItems(filteredList)
      setSelectedItems(0)
      setSelectAll(!selectAll)
    }
  }

  const handleCheckboxChange = (id) => {
    console.log(id)
    const updatedItems = checkedItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked, // Toggle the checked property
        };
      }
      return item;
    });
    // console.log(updatedItems)
    let isChecked = updatedItems.some(each => each.checked === true)
    setCheckedItems(updatedItems)
    totalItemsSelected(updatedItems)
    handleAnyCheckboxClick(isChecked, updatedItems)
  };
  
  const classes = useStyles()
    return(
  <div className="view-container">
      <div className="selected-card">
        <div className='count-container'>
          <CheckBox  
           sx={{width: '16px', height: '16px'}}
          className = {selectAll? classes.checkedTrue: classes.checkedFalse}
           onChange = {handleSelectAllItems}
        indeterminate={true} 
        id = "selectAll"     
              />
          <label className="items-selected" htmlFor="selectAll">Select All</label>
        </div>
        <p className='items-selected'>{selectedItems} items selected</p>
      </div>
         <ul className={classes.listDataContainer} >
            {checkedItems.map(each => <li className="list-item" key = {each.id} style = {each.checked ? {backgroundColor: '#242C40'}: null}><CheckBox id = {each.id} checked={each.checked} sx={{color: '#9497A1', width:'16px', height: '16px',  }} 
              //style={{background: '#FFFFFF', width: '10px', height: '5px'}}
              classes={{root: classes.checkbox}}
            onChange={() => handleCheckboxChange(each.id)}
            /><label  className="list-content" htmlFor={each.id}>{each.label}</label></li>)}
       </ul>
  </div>
  )}