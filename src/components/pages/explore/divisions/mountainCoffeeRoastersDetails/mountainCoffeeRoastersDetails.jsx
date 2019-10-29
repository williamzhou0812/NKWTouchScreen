import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './mountainCoffeeRoastersDetails.scss';





const  MountainCoffeeRoastersDetails = () => {

    // Get qpsDetails from api

    const [montainCoffee, setMountainCoffee] = useState({
        title: '',
        logo: '',
        content: [],
        contact: {
            name: '',
            job: '',
            phone_a: '',
            email: '',
            location_a: '',
            location_b: ''
        }
    });


    useEffect(() => {
        axios.get('/api/mountaincoffee').then(res => {
            console.log(res.data);
            setMountainCoffee(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
            <div className="expac_detail_header_mountain_coffee_roasters">
                <h1>{montainCoffee.title}</h1>
            </div> 
            <div className="mountainCoffeeRoasters_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={montainCoffee.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_mountain_coffee"> 

                        <h2>Contact</h2>
                     
                        <p>{montainCoffee.contact.name} </p>
                        <p>{montainCoffee.contact.job}</p>  

                        <p>Ph: +67 {montainCoffee.contact.phone_a}</p>
                        <p>E:{`josh.baldwin@nkwgroup.com.pg`}</p>
                        <p>Location</p>
                        <p>{montainCoffee.contact.location_a}</p>
                        <p>{`Bewapi Coffee Mill, Bewapi,`}<br/>{`9 Mile, Okuk Highway`}</p>
                     </div>
                
                 </div>
                 <div className="right_contants_mountain_coffee_roasters">
                        <p>
                            {montainCoffee.content[0]}

                       </p> 

                       <p> 
                           {montainCoffee.content[1]}
                       </p>

                       <p>
                           {`BEWAPI COFFEE MILL LIMITED (BCM)`}<br/>
                            {montainCoffee.content[2]}
                        </p> 
                        
                        <p>
                            {montainCoffee.content[3]}<br/>
                            {montainCoffee.content[4]}<br/>
                            {montainCoffee.content[5]}<br/>
                            {montainCoffee.content[6]}<br/>
                            {montainCoffee.content[7]}<br/>
                            {montainCoffee.content[8]}<br/>
                            {montainCoffee.content[9]}<br/>
                            {montainCoffee.content[10]}<br/>
                            {montainCoffee.content[11]}<br/>
                        </p>
                        <p>
                            {montainCoffee.content[12]}<br/>
                        </p>
  
                 </div>
            </div>

        </Fragment>
    )
}

export default MountainCoffeeRoastersDetails;