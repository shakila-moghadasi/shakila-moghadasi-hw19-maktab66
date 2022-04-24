import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Country = () => {

    const dataContext = useContext(ThemeContext)

    return <div className='card-style'>
        {dataContext?.dataCountry.map(item => {
            return (
                <Link className='card' to ={`/${item.alpha3Code}`}>
                    <div className='img-div'>
                        <img src={item.flags.svg} alt='country' className='country-img'/>
                    </div>    
                    <div className='container'>
                        <h3>{item.name}</h3>
                        <p>{`Population : ${item.population}`}</p>
                        <p>{`Region : ${item.region}`}</p>
                        <p>{`Capital : ${item.capital}`}</p>
                    </div>
                </Link>
            )
        })}
    </div>;
}


export default Country;