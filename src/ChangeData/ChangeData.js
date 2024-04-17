import './ChangeData.css'
import React, {useState} from 'react'

function ChangeData({changeDate}) {
    const [newDate, updateDate] = useState('')

    const submitDate = (event) => {
        event.preventDefault()
         changeDate(newDate)
    }

    return (
        <section className='change-data'>
            <p className='change-data'>Change Data</p>
            <input name='date' type='date' value={newDate} onChange={event => updateDate(event.target.value)}></input>
            <button onClick={event => submitDate(event)}>View Date</button>
        </section>
    )
}

export default ChangeData;