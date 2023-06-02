import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '../DialogBox/Popover'
import SearchField from '../SearchField/SearchField';
import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Menu.css'
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
    backgroundColor: "#25cc51",

  }
})


const loadingView = () =>(  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',width: '302px', height: '247px' }}>
<CircularProgress sx={{width: '20px', height: '20px'}}/>
</Box>)


const failureView = () => <Box sx={{width: '302px', height: '247px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
  <img src = 'https://res.cloudinary.com/duoqwzxmo/image/upload/v1685289673/2634442_fjpepr.jpg' alt ='404' className='error-img'/>
  <h1 className='no-result'>No Result Found</h1>
  <p className='failure-msg'>We cannot find the item you are searching, may be enter the correct value</p>
</Box>;
export default function Menu(props) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const {data}= props
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
 
  if (data.subFilterValues !== undefined){
    
  }
  return(
            <div className='container'> 
            <div>
              <h4>{data.label}</h4>
              <FilterListIcon onClick = {handleOpen} sx={{color: "#626776"}}/>
             </div>
              <div>
              <Popover
                    open={openDialog}
                    setOpen={setOpenDialog}
                    width={data.width} 
                    height={data.height}
                    ArrowPosition={"80px"}
                >
                  <h1 className={classes.heading}>Filter by</h1>
                {data.subFilterValues !== undefined ? <> <ul className='search-list-container'>{data.subFilterValues.map(each => <SearchField text={each.label} key = {each.label} width={each.width}/>)} 
                  </ul> 
                  <p className='results'>100 Results</p>
                   <SuccessView/></> : <SingleFilter filterType={data.filterType}/>}
                <div className='button-container'>
                <Button variant="text" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px",  textTransform: 'none', color: "#3874FF"}}>Cancel</Button>
                <Button variant="contained" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px", height: '24px',   textTransform: 'none'}} onClick={handleSnackClick}>Apply
                </Button>
                </div>
                </Popover>
                </div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} className={classes.snackBar}>
                    <Alert onClose={handleClose} icon={<CheckCircleIcon className={classes.checkIcon}/>} className={classes.alertBox} sx={{backgroundColor: '#00B196'}}>
                            <p className='alert-msg'>{`Job is Filtered based on ${data.label} successfully`}</p>
                      </Alert>
              </Snackbar>
                </div>
  )
}
