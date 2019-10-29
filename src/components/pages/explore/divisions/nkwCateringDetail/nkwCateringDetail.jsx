import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './nkwCateringDetail.scss';





const  NkwCateringDetail = () => {

    // Get qpsDetails from api

    const [nkwCatering, setNKWCateringDetail] = useState({

        title: '',
        sub_title: '',
        logo: '',
        content: [],
        contact: {
            name: String,
            job: String,
            phone_a: String,
            phone_b: String,
            email: String
        }
        
    });


    useEffect(() => {
        axios.get('/api/nkwcatering').then(res => {
            console.log(res.data);
            setNKWCateringDetail(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
            <div className="nkwCatering_detail_header">
                <h1>{nkwCatering.title}</h1>
            </div> 
            <div className="nkweCatering_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={nkwCatering.logo} alt="nkwCatering"  width="100%" /> 
                     </div>
                     <div className="contact_card_catering"> 

                        <h2>Contact</h2>
                        <p>{nkwCatering.contact.name}</p>
                        <p>{nkwCatering.contact.job}</p>
                
                        <p>Phone </p>
                        <p>+675 {`472 5161`}</p>
                        <p>+617 {`3268 2033`}</p>  

                        <p>Email</p>
                        <p>{nkwCatering.contact.email}</p>
                     </div>
                   
                 </div>
                 <div className="right_contants" style={{fontSize:"20px", color:"#707070"}}>
                       <p >
                        
                            {nkwCatering.content[0]}
                       </p> 
                       <p>
                            {nkwCatering.content[1]}<br/>
                            {nkwCatering.content[2]}<br/>
                            {`Manus: 1,400 meals a day for the Australian Government`}<br/>
                            {nkwCatering.content[4]}<br/>
                            {nkwCatering.content[3]}<br/> 
                            
                       </p>
                       <p>
                         {nkwCatering.content[5]}
                       </p>
                        <ul style={{ lineHeight: '2.3rem', textAlign: "left"}}>
                            <li> 
                                {nkwCatering.content[6]}
                            </li>
                            <li> 
                                {nkwCatering.content[7]} 
                                <ol style={{listStyle: 'circle', textAlign:"left"}}>
                                   <li>{nkwCatering.content[8]}</li>
                                   <li>{nkwCatering.content[9]}</li>
                                </ol>
                            </li>
                            <li>
                                {nkwCatering.content[10]}
                            </li>
                            <li>
                                {nkwCatering.content[11]}
                            </li>
                            <li>
                                {nkwCatering.content[12]}
                            </li>
                            <li>
                                {nkwCatering.content[13]}
                            </li>
                            <li>
                                {nkwCatering.content[14]}
                            </li>
                        </ul>
                   
                 
                 </div>
            </div>

        </Fragment>
    )
}

export default NkwCateringDetail;