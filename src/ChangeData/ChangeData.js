import './ChangeData.css'
import React, {useState} from 'react'

function ChangeData({changeDate, setSort}) {
    const [newDate, updateDate] = useState('')
    const [sortDirection, chooseSort] = useState('')

    const submitDate = (event) => {
        event.preventDefault()
         changeDate(newDate)
    }

    const updateSort = (event) => {
        event.preventDefault()
        setSort(sortDirection)
    }

    return (
        <section className='change-data'>
            <input name='date' type='date' value={newDate} onChange={event => updateDate(event.target.value)}></input>
            <button className='change-date-submit' onClick={event => submitDate(event)}>View Date</button>
            <select name='sort' value={sortDirection} onChange={event => chooseSort(event.target.value)}>
                <option>Sort by Distance</option>
                <option value='closest'>Closest to Furthest</option>
                <option value='furthest'>Furthest to Closest</option>
            </select>
            <button className='change-sort' onClick={event => updateSort(event)}>Sort Asteroids</button>
        </section>
    )
}

export default ChangeData;