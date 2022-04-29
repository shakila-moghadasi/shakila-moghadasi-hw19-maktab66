import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Country = () => {

    const dataContext = useContext(ThemeContext)

    return <div>
        {dataContext?.dataCountry.map(item => {
            return (
                <Link to ={`/${item.alpha3Code}`}>
                    <div>
                        <img src={item.flags.svg} alt='country' className='country-img'/>
                    </div>    
                    <div>
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