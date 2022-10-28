import './Style.css'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const[api, setApi] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://reactblog-backendapp.herokuapp.com/api/home");
        console.log(response);
        setApi(response.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div>
            <hr className="line"></hr>
            <div>
                <img src='./Tour-img/Tour_img1.jpeg' alt = " " className='img1' />
                <h1 className='text1'>Kerala:God's own country</h1>
                <h4 className='text2'>Tourism / January 12,2020</h4>
            </div>
            <div>
                <img  src='./Tech-img/Tech_img.jpeg' alt = " " className='img2'/>
            </div>
            <div>
                <img src='./Fitness-img/Fit_img1.jpeg' alt = " " className='img3' />
            </div>
            <div>
                <h3 className='lat'>Latest Technology stories</h3>
            </div>
            <div className='div1'>
                    {
                        api.filter((data) => data.Category === "Technology").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Technology/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div>
                <h3 className='lat1'>Latest Bollywood Posts</h3>
            </div>
            <div className='div1'>
                    {
                        api.filter((data) => data.Category === "Bollywood").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Bollywood/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div>
                <h3 className='lat1'>Latest Food Articles</h3>
            </div>
            <div className='div2'>
                    {
                        api.filter((data) => data.Category === "Food").map((data) => (
                            <div className='leftData'>
                                <div key = {data.id}>
                                    <Link to={`/Food/${data.id}`}>
                                        <img src = {data.image} alt = '' className='imageUrlHome1' />
                                    </Link>
                                    <div><h3 className='titleHome'>{data.Title}</h3></div>
                                    <div><p className='paraHome'>{data.Description}</p></div>
                                    <div><p className='catHome1'>{data.Category}</p></div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div className='reviewblog'>Write something about Foods</div>
            
        </div>
    )

}

export default Home;