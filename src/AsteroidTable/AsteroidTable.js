import React, { useState, useEffect } from "react"
import DataTable from 'react-data-table-component'
import './AsteroidTable.css'
function AsteroidTable({ a }) {
    const [data, setData] = useState()
    useEffect(() => {

        setData([
            {
                key: 'Date of closest approach',
                value: a.close_approach_data[0].close_approach_date_full,
            },
            {
                key: 'Missed Earth By',
                value: parseInt(a.close_approach_data[0].miss_distance.miles).toLocaleString() + ' miles'
            },
            {
                key: 'Estimated Diameter - Mimimum',
                value: parseInt(a.estimated_diameter.feet.estimated_diameter_min).toFixed(2) + ' feet'
            },
            {
                key: 'Estimated Diameter - Maximum',
                value: parseInt(a.estimated_diameter.feet.estimated_diameter_max).toFixed(2) + ' feet'
            },
            {
                key: 'Relative Velocity',
                value: parseInt(a.close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString() + ' mph'
            }
        ])
    }, [a])

    const columns = [
        {
            name: `Asteroid - ${a.name}`,
            selector: row => row.key,
            wrap: true
        },
        {
            name: '',
            selector: row => row.value,
            wrap: true
        }
    ]

    return (
        <article className="data-table">
        <DataTable
            columns={columns}
            data={data}>
        </DataTable>
        </article>
    )
}

export default AsteroidTable;