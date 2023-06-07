import CheckBox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles"
import { useEffect, useState } from "react"
import './index.css'

const useStyles = makeStyles({
  listDataContainer:{
    marginTop: '4px',
    paddingLeft: 0,
    marginLeft: '16px',
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
        handleAnyCheckboxClick(isChecked)
    }
    else{
      let filteredList = checkedItems.map(item => ({...item, checked: false}))
      let isChecked = filteredList.some(each => each.checked === true)
        handleAnyCheckboxClick(isChecked)
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
    handleAnyCheckboxClick(isChecked)
  };
  
  const classes = useStyles()
    return(
  <div className="view-container">
      <div className="selected-card">
        <div className='count-container'>
          <CheckBox  
           sx={{width: '16px', height: '16px'}}
          // style={selectAll ? {color: 'red'} : {color: '#D9D9D9'}}
          className = {selectAll? classes.checkedTrue: classes.checkedFalse}
           onChange = {handleSelectAllItems}
        indeterminate={true}      
              />
          <p className="items-selected">Select All</p>
        </div>
        <p className='items-selected'>{selectedItems} items selected</p>
      </div>
         <ul className={classes.listDataContainer} >
            {checkedItems.map(each => <li className="list-item" key = {each.id}><CheckBox checked={each.checked} sx={{color: '#9497A1', width:'16px', height: '16px',  }} 
            onChange={() => handleCheckboxChange(each.id)}
            /><p  className="list-content">{each.label}</p></li>)}
       </ul>
  </div>
  )}