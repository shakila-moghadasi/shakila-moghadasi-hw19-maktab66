import React, { useContext , useState} from 'react';
import {FaMoon , FaSun , FaSearch} from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { Link, Outlet ,useSearchParams } from "react-router-dom";
import {MdClose} from 'react-icons/md';



const Navbar = () => {

    //change Theme
    const {dark , toggleDark} = useContext(ThemeContext);
    const dataContext = useContext(ThemeContext);
    const [filterData, setfilterData] = useState([]);
    const [search, setSearch] = useSearchParams();


    //filter serach box
    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearch({ name : searchWord});
        const newFilter = dataContext.dataCountry.filter(item => {
            return item.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === ""){
            setfilterData([]);
        }else{
            setfilterData(newFilter);
        }
    }

    const handleCloseSearch = ()=> {
        setfilterData([]);
        setSearch("");
    }


    return <>
        <div className={ dark ? 'navbar dark-nav' : 'navbar light-nav'}>
            <h3>Where is the World ?</h3>
            <div>
                {dark ? <FaMoon /> : <FaSun />}
                <button onClick={e => toggleDark(e,dark)}>{dark ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
        </div>
        <div>
            <div className={dark ? 'search s-dark' : 'search s-light'}>
                {filterData.length === 0 ? <FaSearch className='icon-search'/> : <MdClose onClick={handleCloseSearch} className='icon-search'/>}
                
                <input 
                    type='text' 
                    name='search' 
                    placeholder='Search for a Country'
                    onChange={handleFilter}
                    value={search.get('name')}
                />
                {filterData.length !== 0 && (
                    <div className={dark ? 'search-data search-dark' : 'search-data search-light'}>
                        {filterData?.slice(0,15).map(item => {
                            return <Link className='link-search' to={`/${item.alpha3Code}`}>{item.name}<br/></Link>
                        })}
                    </div>
                )}
            </div>
        </div>
        <Outlet />
    </>
}


export default Navbar;