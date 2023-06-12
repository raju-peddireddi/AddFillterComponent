import React, { useEffect } from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '../DialogBox/Popover'
import SearchField from '../SearchField/SearchField';
import { Button, Box, listClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CloseIcon from '@mui/icons-material/Close';
import './index.css'
import CircularProgress from '@mui/material/CircularProgress';
import SuccessView from '../SuccessView/index';
import SingleFilter from '../SingleFilter';
import { useState } from 'react';
import {Snackbar} from '@mui/material';
import { Alert } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const useStyles = makeStyles({
  heading:{
    width: "286px",
height: "18px",
paddingLeft: 16,
paddingTop: 16,
fontFamily: 'Inter',
fontWeight: 600,
fontSize: "14px",
lineHeight: '18px',
color: "#FFFFFF",
textAlign: 'start',
  },
  listDataContainer:{
    paddingLeft:0,
    maxHeight:'190px',
    overflow:'auto',

'&::-webkit-scrollbar': {
  width: '6px',
  height: "10px",
  backgroundColor: "#505767",
},
'&::-webkit-scrollbar-thumb': {
  height: "154px",
  borderRadius: '22px',
},

  },
  snackBar:{
    borderRadius: "4px",

  },
  checkIcon:{
    color:'#ffffff',
    height: '14px',
    width: '14px'
  },
  alertBox:{
    display: 'flex',
    alignItems: 'center',
    width: "414px",
    height: "50px",
    gap:'10px',
    left: "calc(50% - 414px/2)",
    backgroundColor: "#00B196",
    '& .css-ptiqhd-MuiSvgIcon-root':{
      color : '#FFFFFF',
    }

  }
})

let myArray = [
  { id: 1, label: 'Schneider Electric India', checked: false},
  { id: 2, label: 'TaTa Motors' , checked: false},
  { id: 3, label: 'V-GUARD INDUSTRIES LIMITED' , checked: false},
  { id: 4, label: 'BERRY N BLOSSOM THE PVT LTD' , checked: false},
  { id: 5, label: 'Schneider Electric India' , checked: false},
  { id: 6, label: 'Schneider Electric India' , checked: false},
  { id: 7, label: 'TaTa Motors' , checked: false},
  { id: 8, label: 'Schneider Electric India' , checked: false},
  { id: 9, label: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD' , checked: false},
  { id: 10, label: 'BERRY N BLOSSOM THE PASTRY LAND PVT LTD' , checked: false}, 
  { id: 11, label: 'V-GUARD INDUSTRIES LIMITED' , checked: false},
  { id: 12, label: 'V-GUARD INDUSTRIES LIMITED' , checked: false},
  { id: 13, label: 'V-GUARD INDUSTRIES LIMITED' , checked: false},
  { id: 14, label: 'TaTa Motors' , checked: false},
  { id: 15, label: 'TaTa Motors' , checked: false},
  { id: 16, label: 'Schneider Electric India' , checked: false},
  { id: 17, label: 'Schneider Electric India' , checked: false},
  // Add more checkboxes as needed
];
const apiStatusConstants = {
  inital: 'INTIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS'
}
const loadingView = () =>(  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',width: '302px', height: '247px' }}>
<CircularProgress sx={{width: '20px', height: '20px'}}/>
</Box>)


const failureView = () => <Box sx={{width: '302px', height: '247px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
  <img src = 'https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg' alt ='404' className='error-img'/>
  <h1 className='no-result'>No Result Found</h1>
  <p className='failure-msg'>We cannot find the item you are searching, may be enter the correct value</p>
</Box>;
export default function FilterAndSort(props) {
  const [dateSlected, setDateSelected] = useState(false)
  const [isChecked, setCheckedStatus] = useState(false)
  const [searchValue, setSearchInput] = useState('')
  const [listOfResults, setSearchListItems] = useState(myArray)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.success)
  const [open, setOpen] = useState(false)
  const [checkedList, setCheckedList] = useState([])
  const classes = useStyles()
  const {data}= props
  useEffect(() => {
    setSearchListItems(myArray)
  }, [])
  const handleSearchInputChange = (searchInput) => {
    
    setSearchInput(searchInput)
    let filteredResults = myArray.filter(item => item.label.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    let checkedListIds = checkedList.filter(each => each.checked === true).map(each => each.id)
    let finalList = filteredResults.map(each => {
      if (checkedListIds.includes(each.id)){
          return {...each, checked: true }
      }
      return each
    })
    console.log(checkedListIds, 'ids')
    console.log(finalList, 'final')
    setSearchListItems(finalList)

    
  }
 
    const [openDialog ,setOpenDialog] = React.useState(false)
    const handleOpen= ()=>{
        setOpenDialog(true)
 }

 const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;

  }
  setOpen(false);
 }
 const handleSnackClick = () => {
  setOpen(true)
 }
 
 const handleAnyCheckboxClick = (status, newList) => {
  setCheckedList(newList)
  setCheckedStatus(status)
  }
   const handleDateTimeSelected = (dateSelected) => {
        setDateSelected(dateSelected)
   }

  const renderAllViews = () => {
  // console.log(listOfResults, 'filter')
    switch(apiStatus){
      case apiStatusConstants.success:
        return <SuccessView listItems={listOfResults} handleAnyCheckboxClick = {handleAnyCheckboxClick}/>
      case apiStatusConstants.failure:
          return failureView()
      case apiStatusConstants.inProgress:
          return loadingView()
      default:
        return null
    }
  }
   
  
  return(
            <div className='container'> 
            <div>
              <FilterListIcon onClick = {handleOpen} sx={{color: "#626776"}}/>
             </div>
              <div>
              <Popover
                    open={openDialog}
                    setOpen={setOpenDialog}
                    width={data.width} 
                    height={data.height}
                    ArrowPosition={data.filterType === 'date' ?  '194px': "146px"} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
                >
                  <h1 className={classes.heading}>Filter by</h1>
                {data.subFilterValues !== undefined ? <> <ul className='search-list-container'>{data.subFilterValues.map(each => <SearchField text={each.label} key = {each.label} width={each.width} handleSearchInputChange ={handleSearchInputChange}/>)} 
                  </ul> 
                  <p className='results'>{listOfResults.length} Results</p>
                   {renderAllViews()}
                   </> : <SingleFilter filterType={data.filterType} handleDateTimeSelected = {handleDateTimeSelected}/>}
                <div className='button-container'>
                    <Button variant="text" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px",  textTransform: 'none', color: "#3874FF"}}>Cancel</Button>
                    {(isChecked || dateSlected) ? <Button variant="contained" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px", height: '24px',   textTransform: 'none'}} onClick={handleSnackClick}>Apply
                    </Button> : <Button variant="contained" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px", height: '24px',   textTransform: 'none', color: '#505767', background: "#242C40"}}>Apply
                    </Button>}
                </div>
                </Popover>
                </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.snackBar}  anchorOrigin={{ vertical: 'center', horizontal: 'center' }} >
                    <Alert onClose={handleClose} icon={<CheckCircleIcon className={classes.checkIcon}/>} className={classes.alertBox} sx={{backgroundColor: '#00B196'}}>
                            <p className='alert-msg'>{`Job is Filtered based on ${data.label} successfully`}</p>
                      </Alert>
              </Snackbar>
                </div>
  )
}
