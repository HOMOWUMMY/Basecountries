


function CountriesList({country}) {
    return(
        <>
        <div className="row">
            {country.map((item, index) => {
                return (
                    <div className='col-3' key={index} style={{width: '28%', margin: 'auto'}}>
                        <div className="card mt-4" style={{padding: '10px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                        <img src={item.flags.png} style={{width: '100%', boxSizing: 'border-box', height: '190px'}} />
                        <br />
                        <h2>{item.name.common}</h2>
                        <hr />
                        <br />
                        <h4 className="pt-4">Capital: {item.capital} </h4><hr />
                        <h4 className="pt-4">Area: <span>{item.area}</span> </h4><hr />
                        <h4 className="pt-4">Population: <span>{item.population}</span> </h4><hr />
</div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default CountriesList;