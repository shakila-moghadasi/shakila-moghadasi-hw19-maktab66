import React, { useContext , useEffect, useState} from 'react';
import { useParams , Link} from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const CountryCards = () => {

    const dataContex = useContext(ThemeContext)
    const dataParams = useParams()
    const [objCountry , setobjCountry] = useState()

    //find country when click on card
    const findCountry = () => {
        return dataContex.dataCountry.filter(item => {
            return item.alpha3Code === dataParams.alphaCode
        })
    }
    
    useEffect(() => {
        setobjCountry(findCountry())
    }, [objCountry])

    return <div className='card-detailes'>
        {objCountry?.map(item => {
           return <>
               <div className='img-card'>
                   <img src={item.flags.svg}/>
               </div> 
               <div className='p-card'>
                    <div>
                        <h1>{item.name}</h1>
                        <p>{`Native Name : ${item.nativeName}`}</p>
                        <p>{`Population : ${item.population}`}</p>
                        <p>{`Region : ${item.region}`}</p>
                        <p>{`Sub Region : ${item.subregion}`}</p>
                        <p>{`Capital : ${item.capital}`}</p>
                        <div>
                            <span>{`Border Countries : `}</span>
                            {item.borders?.map(el => 
                                <Link className={dataContex.dark ? 'link-borders l-dark' : 'link-borders l-light'} to={`/`}>{el}</Link>
                            )}
                        </div>
                    </div>
                    <div>
                        <p>{`Top Level Domain : ${item.topLevelDomain}`}</p>
                        <p>{`Currencies : ${item.currencies[0].name}`}</p>
                        <span>Languages :</span>
                        {item.languages?.map(el => <span>{` ${el.name} ,`}</span>)}
                    </div>    
                </div>   
           </>
        })}
    </div>;
}

export default CountryCards;