import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import './AsteroidTable.css';
import PropTypes from 'prop-types';

function AsteroidTable({ a }) {
    const [data, setData] = useState()
    useEffect(() => {

        setData([
            {
                key: 'Date of Closest Approach',
                value: a.close_approach_data[0].close_approach_date_full,
            },
            {
                key: 'Missed Earth By',
                value: parseInt(a.close_approach_data[0].miss_distance.miles).toLocaleString() + ' miles'
            },
            {
                key: 'Estimated Diameter - Minimum',
                value: parseInt(a.estimated_diameter.feet.estimated_diameter_min).toFixed(2) + ' feet'
            },
            {
                key: 'Estimated Diameter - Maximum',
                value: parseInt(a.estimated_diameter.feet.estimated_diameter_max).toFixed(2) + ' feet'
            },
            {
                key: 'Relative Velocity',
                value: parseInt(a.close_approach_data[0].relative_velocity.miles_per_hour).toLocaleString() + ' mph'
            },
            {
                key: 'Potentially Hazardous',
                value: a.is_potentially_hazardous_asteroid ? 'Watch out! This asteroid could be potentially hazardous' : 'This asteroid does not pose a threat!'
            }
        ])
    }, [a])

    const columns = [
        {
            selector: row => row.key,
            wrap: true
        },
        {
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

AsteroidTable.propTypes = {
    a: PropTypes.shape({
        name: PropTypes.string,
        nasa_jpl_url: PropTypes.string,
        is_potentially_hazardous_asteroid: PropTypes.string,
        estimated_diameter: PropTypes.object,
        is_potentially_hazardous_asteroid: PropTypes.bool,
        close_approach_data: PropTypes.array
    }).isRequired
}