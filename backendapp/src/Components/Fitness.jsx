import './Style.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Fitness = () => {
    const[api, setApi] = useState([])
    const fetchData = async () => {
        try {
          const response = await axios.get("https://reactblog-backendapp.herokuapp.com/api/home");
          console.log(response);
          return response.data;
        } catch (error) {}
      };
      useEffect(() => {
        const apiFetch = async () => {
            setApi(await fetchData());
        };
        apiFetch();
      }, [api]);
    return (
        <div>
            <hr className="line"></hr>
            <h1 className='fithead'>Fitness</h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        api.filter((data) => data.Category === "Fitness").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Fitness/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrl4' />
                                    </Link>
                                    <div><h3 className='title3'>{data.Title}</h3></div>
                                    <div><p className='catNew'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bolly-right-new'><h2 className='bHi'>Top Posts</h2><hr className='line2'></hr>
                <div className='bollytwo'>
                    {
                        api.filter((data) => data.Category === "Fitness").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Fitness/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlNew' />
                                    </Link>
                                    <div><h3 className='titleNew'>{data.Title}</h3></div>
                                    <div><p className='catNew1'>{data.Category}</p></div>
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

export default Fitness;