import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, Grid, Snackbar, paperClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DatePicker from "react-multi-date-picker";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Icon from 'react-multi-date-picker/components/icon';
import './index.css'
import { BorderBottom } from '@mui/icons-material';
const hours = [
  { value:"01" }, { value:"02" }, { value:"03" }, { value:"04" }, { value:"05" }, { value:"06" }, { value:"07" }, { value:"08" },
  { value:"09" }, { value:"10" }, { value:"11" }, { value:"12" },]
const Minute = [
  { value:"01" }, { value:"02" }, { value:"03" }, { value:"04" }, { value:"05" }, { value:"06" }, { value:"07" }, { value:"08" },
  { value:"09" }, { value:"10" }, { value:"11" }, { value:"12" }, { value:"13" }, { value:"14" }, { value:"15" }, { value:"16" },
  { value:"17" }, { value:"18" }, { value:"19" }, { value:"20" }, { value:"21" }, { value:"22" }, { value:"23" }, { value:"24" },
  { value:"25" }, { value:"26" }, { value:"27" }, { value:"28" }, { value:"29" }, { value:"30" }, { value:"31" }, { value:"32" },
  { value:"33" }, { value:"34" }, { value:"35" }, { value:"36" }, { value:"37" }, { value:"38" }, { value:"39" }, { value:"40" },
  { value:"41" }, { value:"42" }, { value:"43" }, { value:"44" }, { value:"45" }, { value:"46" }, { value:"47" }, { value:"48" },
  { value:"49" }, { value:"50" }, { value:"51" }, { value:"52" }, { value:"53" }, { value:"54" }, { value:"55" }, { value:"56" },
  { value:"57" }, { value:"58" }, { value:"59" }, { value:"60" },]
const AmPm=[
  {value:"am"}, {value:"pm"}]
const useStyles = makeStyles({
  datePicker:{
    background: '#050E25',
    width: '648px',
    height: '521px',
    padding: 0,
    
    '& rmdp-ep-arrow[direction=top]':{
 
    },
    // '& .css-n3fon5-MuiGrid-root>.MuiGrid-item':{
    //   paddingLeft: '8px',
    //   display: 'flex',
    //   alignItems: 'center'
    // },
    '& .rmdp-calender':{
        padding: '0px'
    },
    '& .rmdp-border-bottom':{
        borderBottom: 'none'
    },
    '& .rmdp-border-top':{
      borderTop: 'none'
    },
    '& .rmdp-calendar':{
      width: '100%',
      height: ' 261px'
    }
   ,
   '& .rmdp-day-picker':{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 8px 0 8px',
        borderWidth: '0px 2px 2px 2px',
        borderStyle: 'solid',
        borderColor: '#32394C',
        borderRadius: '0px 0px 5px 5px',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        paddingTop:'20px',
        paddingBottom: '10px'
   },
      '& .rmdp-day':{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '16px',
       textAlign: 'center',
        color: '#FFFFFF',
        flex: 'none',
        order: 0,
        flexGrow: 0,
        left: '1px'
      },
      '& .rmdp-week':{
        display: 'flex',
        justifyContent:'center'
      },
      '&  .rmdp-week-day': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '16px',   
        textAlign: 'center',
        color: '#505767',
        width: '16px',
        height: '16px',
        height: '16px',
        left: '2px',
        right: '4px',
        padding: '0px 10px 0px 8px'
    },
    '& .rmdp-header-values':{
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#FFFFFF',
      flex: 'none',
      order: 0,
      flexGrow: 0
    },
    '& .rmdp-header':{
      height: '40px',
      background: '#242C40',
      border: '1px solid #32394C',
      borderRadius: '5px 5px 0px 0px',
      margin: '0px 8px 0px 8px',
      flex: 'none',
      order: 0,
      flexGrow: 0,
      padding: '18px 0px 0px 0px'
    }
   
  },
    dateTextField:{
        '& .MuiInputLabel-root':{
            color: '#9497A1',
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            left: '8px'
        },
        // '& .MuiInput-root':{
        //     fontFamily: 'Inter',
        //     fontStyle: 'normal',
        //     fontWeight: 400,
        //     fontSize: '12px',
        //     lineHeight: '16px',
        //     color: "#FFFFFF",
        //     flex: 'none',
        // },
        '& .css-1x51dt5-MuiInputBase-input-MuiInput-input':{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#FFFFFF',
                  flex: 'none',
                  order: 0,
                  flexGrow: 1,
                  width: '285px'
        },
        '& .MuiInput-underline:before': {
          borderBottom: '1px solid #626776'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
          borderBottom: '2px solid #626776'
        }
        
    },
    calenderIcon:{
        color: '#D9D9D9',
        height: '16px',
        width: '16px',
        right: "8px",

    },
    pluginMsg:{
      fontSize: '14px',
      textAlign: 'left',
      color: '#FFFFFF',
      padding: '16px',
      fontWeight: 600,
      lineHeight: '16px'
    },
    optionContainer:{
      backgroundColor: '#050E25 !important',
      color: 'white !important',
      lineHeight: '32px',
      fontSize: '12px',
      '&::-webkit-scrollbar': {
        width: '5px',
        height: "5px",
        backgroundColor: "#e6e6e6",
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: "rgba(7, 87, 121, 1)",
        height: "154px",
        borderRadius: '4px',
      },
    },
    customTextField:{
      '& .MuiInput-underline:before': {
        borderBottom: '1px solid #626776'
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before':{
        borderBottom: '2px solid #626776'
      },
      '& .css-1x51dt5-MuiInputBase-input-MuiInput-input':{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        color: '#FFFFFF',
        flex: 'none',
        order: 0,
        flexGrow: 1,
        textAlign: 'cetner'
      }
    },
    options:{
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: 'Inter',
      lineHeight: '16px',
    }
})
  
export function MyRangePickerFooter({startDate,endDate,
  startTime,endTime,setStartTime,setEndTime,
  time,setTime}) {
  function handleChange(event,time) {
    const { value } = event.target;
    if (value) {
      setTime(prevSelection => ({...prevSelection,[time]:value}))
    }
  }
  const defaultProps = {
    getOptionLabel: (option) => option.value,
  };
  const classes = useStyles()
  const inputStyle ={
    color: 'red'
  }
  return (
    <div style={{padding:"1rem",textAlign: "left"}}>
      <Grid container sx={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
        <Grid item container  sx={{display:'flex', alignItems: 'center', width: '296px'}}>
          <p className='from-data-and-time'>From Date & Time</p>
          <Grid  sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '296px'}}>
            <Grid item>
              <span className='span'>{startDate}</span>
            </Grid>
            <Grid item>
              {/* <TextField variant='standard' style={{width: "6rem"}} label="Start Time" type="time" value={time.startTime} onChange={(e)=>{handleChange(e,"startTime")}} /> */}
              <Autocomplete
                disableClearable
                className='auto'
                classes = {{paper:classes.optionContainer, option:classes.options}}
                {...defaultProps}
                id="Start-Hour"
                options={hours}
                value={startTime.h?startTime.h:null}
                onChange={(event, newValue) => {
                  setStartTime(prevSelection => ({...prevSelection, h: newValue}))
                  event.stopPropagation();
                }}
               
                renderInput={(params) => (
                  <TextField {...params} label="hour" variant="standard" sx={{marginTop: '-15px'}}
                  className={classes.customTextField}
                  />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disableClearable
                {...defaultProps}
                className='auto'
                id="Start-Minute"
                classes = {{paper:classes.optionContainer , option:classes.options}}
                options={Minute}
                value={startTime.min?startTime.min:null}
                onChange={(event, newValue) => {
                  setStartTime(prevSelection => ({...prevSelection, min: newValue}))
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField {...params} label="min" variant="standard" sx={{marginTop: '-15px'}}   className={classes.customTextField}/>
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disableClearable
                {...defaultProps}
                className='auto'
                id="Start-Time"
                classes = {{paper:classes.optionContainer, option:classes.options}}
                options={AmPm}
                value={startTime.time?startTime.time:null}
                onChange={(event, newValue) => {
                  setStartTime(prevSelection => ({...prevSelection, time: newValue}))
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Am/Pm" variant="standard"  sx={{fontSize: '12px',marginTop: '-15px'}}   className={classes.customTextField}/>
                )}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{display:'flex', alignItems: 'center', width: '296px'}}>
          <p className='from-data-and-time'>To Date & Time</p>
          <Grid  sx={{display:'flex', justifyContent: 'space-between',alignItems: 'center', width: '296px'}}>
            <Grid item>
              <span className='span'>{endDate}</span>
            </Grid>
            <Grid item >
            {/* <TextField variant='standard' style={{width: "6rem"}} label="End Time" type="time" value={time.endTime} onChange={(e)=>{handleChange(e,"endTime")}} /> */}
             <Autocomplete
               disableClearable
                className='auto'  classes = {{paper:classes.optionContainer  , option:classes.options}}
                {...defaultProps}
                id="end-Hour"
                options={hours}
                value={endTime.h?endTime.h:null}
                onChange={(event, newValue) => {
                  setEndTime(prevSelection => ({...prevSelection, h: newValue}))
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField {...params} label="hour" variant="standard" sx={{marginTop: '-15px'}}   className={classes.customTextField} />
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disableClearable
                {...defaultProps}   classes = {{paper:classes.optionContainer  , option:classes.options}}
                className='auto'
                id="end-Minute"
                options={Minute}
                value={endTime.min?endTime.min:null}
                onChange={(event, newValue) => {
                  setEndTime(prevSelection => ({...prevSelection, min: newValue}))
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField {...params} label="min" variant="standard"  sx={{marginTop: '-15px'}}   className={classes.customTextField}/>
                )}
              />
            </Grid>
            <Grid item>
              <Autocomplete
                disableClearable
                {...defaultProps}
                className='auto'   classes = {{paper:classes.optionContainer  , option:classes.options}}
                id="end-Time"
                options={AmPm}
                value={endTime.time?endTime.time:null}
                onChange={(event, newValue) => {
                  setEndTime(prevSelection => ({...prevSelection, time: newValue}))
                  event.stopPropagation();
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Am/Pm" variant="standard" sx={{marginTop: '-15px'}}   className={classes.customTextField}/>
                )}
              /> 
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
function MyPlugin() {
  const classes = useStyles()
  return <div className={classes.pluginMsg}>Select Date & Time Range</div>;
}
const DateRangePicker = ({handleSelect,handleCancel}) => {
  const [time, setTime] = React.useState({
    startTime:null,
    endTime:null})
  const [startTime,setStartTime]=useState({
    h:"",
    min:"",
    time:""
  })
  const [endTime,setEndTime]=useState({
    h:"",
    min:"",
    time:""
  })
  const weekDaysFormat = ['S', 'M', "T", 'W', "T", "F", "S"];
  const [selection, setSelection] = useState({
    startDate: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),
    endDate: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),
  });
  const ref = useRef()
  const [dates, setDates] = useState([])
  const classes = useStyles()
  useEffect(()=>{
    console.log(dates,"dates")
    if(dates.length>0)
    setSelection(prevSelection => ({...prevSelection, startDate:dates[0]?new Date(dates[0]).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}):new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),endDate:dates[1]?new Date(dates[1]).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}):new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}))
  },[dates])
  return (
    <div className="date-range-picker">
        <DatePicker
          className={`${classes.datePicker}`}
          ref={ref}
          render={<Icon className={classes.calenderIcon}/>}
          onChange={(dateObjects) => setDates(dateObjects)}
          selectsStart={true}
          selected={selection.startDate}
          startDate={selection.startDate}weekDaysFormat
          endDate={selection.endDate}
          weekDays = {weekDaysFormat}
          range
          numberOfMonths={2}
          plugins={[
           <MyPlugin position="top"/>,
           <MyRangePickerFooter startDate={selection.startDate}
            startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime}
            time={time} setTime={setTime} endDate={selection.endDate} position="bottom"/>
          ]}
        
        >
        <div style={{ height:'56px', display: 'flex', justifyContent:'space-between', alignItems: 'center', paddingLeft: '16px', paddingRight: '16px'}}>
          <Button variant="text" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px",  textTransform: 'none', color: "#3874FF"}} 
          onClick={()=>{
            handleCancel(selection,setSelection)
            ref.current.closeCalendar();}}>Cancel</Button>
             {!dates[1] ? <Button variant="contained" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px", height: '24px',   textTransform: 'none', color: '#505767', background: "#242C40"}}
              style={{float:"right"}}    
              >Select
                </Button> : <Button variant="contained" sx={{ fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 600, fontSize: "12px", lineHeinght: "16px", height: '24px',   textTransform: 'none'}}
              style={{float:"right"}} 
              onClick={()=>{
                handleSelect(
                  startTime,endTime,
                  time,dates,selection,setSelection)
                ref.current.closeCalendar();}}
              >Select
                </Button> }
          </div>
        </DatePicker>
    </div>
  );
};
const TextFieldWithDatePicker = ({handleDateTimeSelected}) =>{
  const classes = useStyles()
  const [value,setValue]=useState("")
  const [open,setOpen]=useState(false)
  
  const handleSelect=(
    startTime,endTime,
    time,
    dates,selection,setSelection)=>{
      handleDateTimeSelected(true)
    let Stime = startTime.h.value
    console.log(Stime)
    let stime=new Date()
    if(Stime)
    stime.setHours(Number(Stime[0]),Number(Stime[1]))
    let Etime = time.endTime?.split(":")
    let etime=new Date()
    if(Etime)
    etime.setHours(Number(Etime[0]),Number(Etime[1]))
    let sDate=new Date(dates[0])
    sDate=sDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})
    let eDate=new Date(dates[1])
    eDate=eDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})
    if(time.startTime===null){
      let subSelection={...selection, startDate:dates[0]?sDate:selection.startDate,endDate:dates[1]?eDate:selection.endDate,}
      setSelection(subSelection)
      setValue(`${subSelection.startDate}, ${startTime.h.value}:${startTime.min.value} ${startTime.time.value} - ${subSelection.endDate}, ${endTime.h.value}:${endTime.min.value} ${endTime.time.value}`)
      console.log(subSelection,"selection")
    }
    else if(stime.toLocaleTimeString()!=="Invalid Date" || etime.toLocaleTimeString()!=="Invalid Date"){
      let subSelection={...selection, startDate:dates[0]?sDate:selection.startDate,endDate:dates[1]?eDate:selection.endDate,startTime:stime.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }), endTime:etime.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}
      setSelection(subSelection)
      setValue(`${subSelection.startDate}, ${subSelection.startTime} - ${subSelection.endDate}, ${subSelection.endTime}`)
      console.log(subSelection,"selection")
    }
    else{
      setOpen(true)
    }
  }
  
  const handleCancel=(selection,setSelection)=>{
    let subSelection={...selection, startDate:new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),endDate:new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}),startTime:new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }), endTime:new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" })}
      setSelection(subSelection)
      setValue("")
  }
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return(
    <div>
      <TextField
        label='From Date & Time - To Date & Time'
        id="standard-start-adornment"
        value={value}
        InputProps={{
          endAdornment:<DateRangePicker handleSelect={handleSelect} handleCancel={handleCancel}/>,
        }}
        className={classes.dateTextField}
        variant="standard"
       
      />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} style={{width:"60rem"}}>
        <Alert onClose={handleClose} severity={"error"}>
          {"Given Date or Time is invalid!"}
        </Alert>
      </Snackbar>
    </div>
  )
}
export default TextFieldWithDatePicker;