import React from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    // height: (props) => (props.height ? props.width: '300px'),  
    // minWidth: (props) => (props.width ? props.width : '300px'),  
    backgroundColor: '#050e25',
    position: 'relative',
    top: '0px',
    cursor: 'pointer',  
    borderRadius: '10px',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '-12px',
      left: (props) => (props.ArrowPosition ? props.ArrowPosition : '90px'),
      height: '15px',
      width: '15px',
      backgroundColor: '#050e25',
      transform: 'rotate(225deg) translate(-50%)',
      border: 'none'
    },
    '& .rmdp-ep-arrow:after':{
      backgroundColor:'#050e25',
    },
    '& .rmdp-ep-arrow[direction=top]':{
      borderBottom: 'none'
    },
    
  },

}));

export default function BasicPopover(props) {
  const { open, setOpen, width, height, ArrowPosition } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles({ width, height, ArrowPosition });


  return (
    <div className={classes.popover1}>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <div className={classes.dialogBox} style={{width: width, height: height}}>
            {props.children}
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}