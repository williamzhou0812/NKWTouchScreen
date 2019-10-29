import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import HVC_LOGO from './NKW_Logos_HVC.png';
import './hvcDetail.scss';



let p_a = `

    HVC commenced in 2007 to provide wet hire, operation and full maintenance of a construction
    fleet for use at the Hidden Valley Mine.

`;

let p_b = `
    Wet hire of Contractors Plant (construction and civil plant). The services include wet hire, 
    operation and full maintenance of a construction fleet to Morobe Consolidated Goldfields Ltd (MCG) 
    for use at Hidden Valley.
`;

let p_c = `
Year-round high rainfall causing washouts, 2300-meter elevation, limited infrastructure.
`;

let p_d = `
60 pieces dedicated Machinery based on site (Dump trucks, Wheel Loaders / Graders etc.).
`;



const  HVCDetail = () => {

    // Get ExpacDetails from api

const [jet, setJet] = useState({
    title: '',
    logo: '',
    contact: {
        phone_a: '',
        phone_b: '',
        email: ''
    },
    context: {
        p: [],
        subtitle: [],
        sub_li_a: []
    }
});

useEffect(() => {
    axios.get('/api/jet').then(res => {
        setJet(res.data[0]);
        console.log(res.data[0]);

    })
},[])



    return (
        <Fragment>
            <div className="expac_detail_header">
                <h1 style={{fontSize: '70px', letterSpacing:  '1.6px'}}>HVC</h1>
            </div> 
            <div className="hvc_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={HVC_LOGO} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_hvc"> 

                        <h2>Contact</h2>
                        <p><strong>Jason Zolle</strong>r</p>
                        <p>General Manager</p> 
                        <p>Phone <br/>+675 472 5161<br/>+617 3268 2033</p>
                        <p>Email: <br/> contact@nkwgroup.com.pg </p>  
                     </div>
                 </div>
                 <div className="right_contants" style={{color:"#707070", marginTop: "10px"}}>
                        <p>
                           {`HVC commenced in 2007 to provide wet hire, operation and full maintenance of a construction
                             fleet for use at the Hidden Valley Mine.`}
                       </p> 
                      
                       <p>
                       <span>SERVICE PROVIDED</span><br/>
                             {`Wet hire of Contractors Plant (construction and civil plant). The services include wet hire, 
                                operation and full maintenance of a construction fleet to Morobe Consolidated Goldfields Ltd (MCG) 
                                for use at Hidden Valley.`}
                       </p>
                       <p>
                           <span>CHALLENGES</span><br/>
                            {`Year-round high rainfall causing washouts, 2300-meter elevation, limited infrastructure.`}
                       </p>
                       <p>
                           <span>FLEET</span><br/>
                            {`60 pieces dedicated Machinery based on site (Dump trucks, Wheel Loaders / Graders etc.).
`}
                       </p>

        
                 </div>
            </div>

        </Fragment>
    )
}

export default HVCDetail;