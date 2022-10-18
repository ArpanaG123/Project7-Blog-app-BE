import './Style.css'
import React,{useContext} from 'react'
import { store } from './Data';
import { Link } from 'react-router-dom';

const Fitness = () => {
    const [data] = useContext(store);
    return (
        <div>
            <hr className="line"></hr>
            <h1 className='fithead'>Fitness</h1>
            <div className='wood'>
            <div className='bolly-left'>
                <div className='bollyone'>
                    {
                        data.filter((data) => data.Category === "Fitness").map((data) => (
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
                        data.filter((data) => data.Category === "Fitness").map((data) => (
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