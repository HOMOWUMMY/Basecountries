import { useState, useEffect, useCallback } from 'react';
import CountriesList from './List/CountriesList';
import Navbar from '../layout/Navbar';

function Countries() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const baseUrl = 'https://restcountries.com/v3.1/all'

    const fetchData = async () => {
        try {

            const response = await fetch(baseUrl)
            const data = await response.json()
            console.log(data)
            setData(data);
            setLoading(false)

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    let page = '';
    if (loading) {
        page = <div>
            <h1>LOADING PLEASE WAIT</h1>
        </div>
    } else {
        page = (<div>
                   <CountriesList country={data} /> 
            </div>
        );
    }

    return (
        <>
 <div className='container'>
    <Navbar /> 
    <br />
        {page}
        </div>
        </>
    )
}

export default Countries;