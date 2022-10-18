import React,{createContext,useState} from 'react'

export const  store = createContext();

const Data = (props) => {
    const [data,setData] = useState([
        {
            id:1,
            image:"https://wallpapercave.com/wp/wp8807385.jpg",
            Title:"Two States",
            Description:"Coming from two very different cultural backgrounds, Krish and Ananya try to convince their parents to bless their relationship before they get married.",
            Date:"Release:18th April,2014",
            Category:"Bollywood"
        },
        {
            id:2,
            image:"https://c8.alamy.com/comp/F762X7/indian-bollywood-hindi-film-movie-poster-of-ek-tha-tiger-F762X7.jpg",
            Title:"Tiger Zinda Hai",
            Description:"RAW Agent Tiger joins forces with Zoya in order to rescue a group of nurses who are held hostage by a terrorist organisation.",
            Date:"Release:15th August,2018",
            Category:"Bollywood"
        },
        {
            id:3,
            image:"https://images.desimartini.com/media/uploads/lagaan_xlg.jpg?impolicy=dm-20210112&width=600",
            Title:"LAGAAN",
            Description:"During the British Raj, a farmer named Bhuvan accepts the challenge of Captain Andrew Russell to beat his team in a game of cricket and enable his village to not pay taxes for the next three years.",
            Date:"Release:15th june,2001",
            Category:"Bollywood"
        },
        {
            id:4,
            image:"https://i.ytimg.com/vi/swPhyd0g6K8/maxresdefault.jpg",
            Title:"Ek Villan",
            Description:"Guru is a gangster whose life changes after he falls in love with Aisha and decides to mend his ways. When Aisha gets murdered by a serial killer, Guru begins to search for the culprit.",
            Date:"Release:30th June,2022",
            Category:"Bollywood"
        },
        {
            id:5,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAlIJeYRwkWCIyaSFrFvSgctGOhe_3pnIAlw&usqp=CAU",
            Title:"Munna Michael",
            Description:"Mahinder, a gangster, hires Munna, a street dancer, to train him so that he can impress his lady-love, Dolly. However, when Dolly goes missing, Munna promises to bring her back.",
            Date:"Release:21st July,2019",
            Category:"Bollywood"
        },
        {
            id:6,
            image:"https://plsadaptive.s3.amazonaws.com/eco/images/channel_content/images/aiguide.jpg",
            Title:"Artificial Intelligence",
            Description:"Artificial intelligence is the theory and development of computer programs that are able to do tasks and solve problems that usually require human intelligence.",
            Category:"Technology"
        },
        {
            id:7,
            image:"https://platoonline.com/wp-content/uploads/2021/04/mhlnews_10632_blockchain_2.png",
            Title:"Blockchain",
            Description:"Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.",
            Category:"Technology"
        },
        {
            id:8,
            image:"https://sfmagazine.com/wp-content/uploads/02_2020_techforuminside.jpg",
            Title:"Machine Learning",
            Description:"Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.",
            Category:"Technology"
        },
        {
            id:9,
            image:"https://www.automate.org/images/ogImages/RIA-blog-Industrial-Robotics-AI-Machine-Learning.jpeg",
            Title:"Robotic",
            Description:"Robotics is a branch of engineering that involves the conception, design, manufacture and operation of robots.",
            Category:"Technology"
        },
        {
            id:10,
            image:"https://images.theconversation.com/files/440351/original/file-20220111-13-vvuw28.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
            Title:"Innovation",
            Description:"Innovation is the practical implementation of ideas that result in the introduction of new goods or services or improvement in offering goods or services.",
            Category:"Technology"
        },
        {
            id:11,
            image:"http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/leh-Ladakh-tour.jpg",
            Title:"Leh & Ladakh",
            Description:"Leh is the joint capital and largest city of the region administered by India as a union territory of Ladakh.",
            Category:"Tourism"
        },
        {
            id:12,
            image:"https://www.euttaranchal.com/tourism/photos/manali-9202425.jpg",
            Title:"Manali",
            Description:"Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.",
            Category:"Tourism"
        },
        {
            id:13,
            image:"https://cdn1.tripoto.com/media/filter/tst/img/2052077/Image/1650295522_back_water_of_kerala_soul_of_kerala.jpg",
            Title:"Kerala",
            Description:"Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.",
            Category:"Tourism"
        },
        {
            id:14,
            image:"https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Maharashtra-Tourism_600-1280x720.jpg",
            Title:"Maharashtra",
            Description:"Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau.",
            Category:"Tourism"
        },
        {
            id:15,
            image:"https://www.indian-travel-places.com/wp-content/uploads/2022/05/bhopal-660x330.jpg",
            Title:"Bhopal",
            Description:"Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities. There are two main lakes, the Upper Lake and the Lower Lake.",
            Category:"Tourism"
        },
        {
            id:16,
            image:"https://who-euro.shorthandstories.com/stay-physically-active-during-self-quarantine/assets/uhjDCtATXT/img_64192-2560x2249.jpeg",
            Title:"Stretching",
            Category:"Fitness"
        },
        {
            id:17,
            image:"https://wallpaperaccess.com/full/8181866.jpg",
            Title:"Running",
            Category:"Fitness"
        },
        {
            id:18,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Jason.Khalipa.CrossFitGames.2014.jpg/298px-Jason.Khalipa.CrossFitGames.2014.jpg",
            Title:"Lifting",
            Category:"Fitness"
        },
        {
            id:19,
            image:"https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2022-02/speed-walking-main-jc-220218-cd1560.jpg",
            Title:"Walking",
            Category:"Fitness"
        },
        {
            id:20,
            image:"https://www.techadvisor.com/wp-content/uploads/2022/06/swimming-fitness-tracker.jpg?quality=50&strip=all",
            Title:"Swimming",
            Category:"Fitness"
        },
        {
            id:21,
            image:"https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg",
            Title:"Breakfast",
            Description:"Breakfast is the first meal of the day usually eaten in the morning.",
            Time:"10AM",
            Category:"Food"
        },
        {
            id:22,
            image:"https://static.toiimg.com/thumb/msid-66476758,width-800,height-600,resizemode-75,imgsize-1640939,pt-32,y_pad-40/66476758.jpg",
            Title:"Lunch",
            Description:"Lunch is a meal eaten around midday. It is commonly the second meal of the day, after breakfast, and varies in size by culture and region.",
            Time:"1PM",
            Category:"Food"
        },
        {
            id:23,
            image:"https://cdn.cdnparenting.com/articles/2018/12/04150206/749833138-H-1024x700.jpg",
            Title:"Evening Snacks",
            Description:"Evening Snacks reduces the gap between lunch and dinner. It aids in sustaining energy until dinner time.",
            Time:"4PM",
            Category:"Food"
        },
        {
            id:24,
            image:"https://akm-img-a-in.tosshub.com/businesstoday/images/photo_gallery/201704/magii_041017050705.jpg",
            Title:"Maggie Time",
            Description:"Maggi is an international brand of seasonings, instant soups, and noodles that originated in Switzerland.",
            Time:"6PM",
            Category:"Food"
        },
        {
            id:25,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kJ8Jpe5ji-pkgRrUhS0TM046Kn-eDU8J4g&usqp=CAU",
            Title:"Dinner",
            Description:"Dinner is an important meal, but you can experiment with a range of great foods. Having a healthy dinner is linked to good sleep, good choices at breakfast and lunch, lower inflammation, greater resilience to stress, better digestion, stable blood sugar and lower anxiety.",
            Time:"9PM",
            Category:"Food"
        }
    ]);

    return (
        <div>
            <store.Provider value = {[data,setData]}>
                {props.children}
            </store.Provider>
        </div>
    )
}

export default Data