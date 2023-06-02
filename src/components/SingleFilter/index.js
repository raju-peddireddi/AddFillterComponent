
import React from 'react'
import TextFieldWithDatePicker from '../DatePicker'
import './index.css'
export default function SingleFilter(props) {
    const {filterType} = props
    if (filterType === 'date'){
        return (
            <div className='date-field-container'>
                <p className='select-date'>Select Date</p>
                <TextFieldWithDatePicker/>
            </div>
          )
    }
    return <h1>hii</h1>
 
}
