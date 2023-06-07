import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchField.css'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
      searchField: {
        width: props => props.width
      }
})
export default function SearchField({text, width, handleSearchInputChange}) {
  const classes = useStyles()
 
  return (
    <li>
        <div style={{width: width}} className='search-field-container'>
            <input type='search' className='search-input' placeholder={text} onChange={(e) => handleSearchInputChange(e.target.value)}/>
            <SearchIcon sx={{left: "12.5%",right: "14.63%",top: '12.5%',bottom: '14.63%', color: '#9497A1', fontSize:'14px'}}/>
        </div>
    </li>
  )
}
