import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Style.css'
import { Link } from 'react-router-dom';

const Food = () => {
    const[api, setApi] = useState([])
    const fetchData = async () => {
        const response = await axios.get("http://localhost:9000/api/home");
        console.log(response);
        setApi(response.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div>
            <hr className="line"></hr>
            <h1 className="foodhead">Food</h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        api.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl1' />
                                    </Link>
                                    <div><h3 className='title1'>{data.Title}</h3></div>
                                    <div><p className='para1'>{data.Description}</p></div>
                                    <div><p className='date1'>Timing:{data.Time}</p></div>
                                    <div><p className='cat1'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bolly-right'><h2 className='bHi'>Top Posts</h2><hr className='line2'></hr>
                <div className='bollytwo'>
                    {
                        api.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl2' />
                                    </Link>
                                    <div><h3 className='title2'>{data.Title}</h3></div>
                                    <div><p className='para2'>{data.Description}</p></div>
                                    <div><p className='date2'>Timing: {data.Time}</p></div>
                                    <div><p className='cat2'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='add1'>Advertisment</div>
            </div>
            </div>
        </div>
    )

}

export default Food;