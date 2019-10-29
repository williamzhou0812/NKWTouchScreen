import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import './jetSmartDetail.scss';





const  JetSmartDetail = () => {

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
            <div className="jet_detail_header">
                <h1>{`Jet Smart Travel Services`}</h1>
            </div> 
            <div className="jet_detail_main">
                 <div className="left_contants">
                     <div className="left_img_logo"> 
                        <img src={jet.logo} alt=""  width="100%" /> 
                     </div>
                     <div className="contact_card_jet"> 

                        <h2>Contact</h2>
                        <p>Phone <br/>+675 {`472 5161`}<br/>+617 {jet.contact.phone_b}</p>
                        <p>Email <br/> {jet.contact.email} </p>  
                     </div>
                 </div>
                 <div className="right_contants" 
                        style={{color: "#707070", textAlign:"left", fontSize:"20px"}}>
                        <p>
                            {`Jet Smart Travel Services Limited (JST) is a wholly owned subsidiary of NKW Holdings Limited.`}
                       </p> 
                       <p>
                             {jet.context.p[1]}
                       </p>
                       <p>
                            {jet.context.p[2]}
                       </p>

                       <p style={{fontWeight:"600"}}> {jet.context.subtitle[0]} </p>
                        <ul style={{lineHeight:"2rem", fontSize:"20px"}}>
                            {jet.context.sub_li_a.map((jet_li, i) => {
                                return(

                                    <li>{jet_li}</li>
                                )
                            })}
                        </ul>
                        <p>
                            {jet.context.p[3]}
                       </p>
                 </div>
            </div>

        </Fragment>
    )
}

export default JetSmartDetail;