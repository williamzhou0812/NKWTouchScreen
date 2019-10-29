import React, {Fragment, useState,  useEffect} from 'react';
import cateringRightImage from './CateringImage.png';
import cateringFooter from './CategoryFooterImages_Catering.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './catering.scss';





const Catering = () => { 

    const [nkwCateringDetail, setNKWCateringDetail]  = useState({
        title: '',
        logo:'',
        imgs: [],
        context: {
            p: [],
            li_all: [],
            sub_title: []
        }
    });
    
    useEffect(()=> {
        axios.get('/api/nkwcateringexpdetail').then(res => { 
            console.log(res.data[0]);
            setNKWCateringDetail(res.data[0]);
        });
    }, []);

    return (
        <Fragment>
             <div className="expac_detail_header_cartering">
                <h1>{nkwCateringDetail.title}</h1>
            </div> 
            <div className="warper_catering">
                <div className="main_context_warper">
                <div className="pargrah_main" 
                 style={{color:'#707070', fontSize: "20px"}}>
                <p>{nkwCateringDetail.context.p[0]}</p>
            </div> 
            <div className="prgrah_two" style={{ height: "234.9px"}}>
                <div 
                    style={{border: '0px solid #F7941B', float:"right",  height:"234.9px"}}>

                    <img src={cateringRightImage} alt="" style={{marginRight: "0px", zIndex: "-999"}} />
                </div>
                <p style={{fontSize:"20px" , height: "235.6px", fontWeight:"500", lineHeight:"2.4rem"}}>{nkwCateringDetail.context.sub_title[0]}:<br/>
                
                    {nkwCateringDetail.context.li_all[0]}<br/>
                    {`Manus: 1,400 meals a day for the Australian Government`}<br/>
                    {nkwCateringDetail.context.li_all[2]}<br/>
                    {nkwCateringDetail.context.li_all[3]}
                </p>
                
            </div> 

            <div className="pargrah_three" 
                     style={{
                                color:'#707070', 
                                fontSize: "20px"

                         }}>
               <p>CAMP  CATERING SERVICES</p>
               <ul style={{lineHeight:"2.3rem" , marginTop:"-34px",paddingTop:"40px", paddingBottom:"80px", fontSize:"20px"}}>
                   <li>
                   {`Meals: Supply 3 meals per day, 7 days per week to registered
                     camp occupants numbering approx. 2,600. Supply casual meals to 
                     approved HVSL staff.
                         
                   `}
                   </li>
                   <li>
                       {nkwCateringDetail.context.li_all[5]}
                       <ol >
                           <li style={{listStyleType:'circle'}}>
                               
                            {nkwCateringDetail.context.li_all[6]}
                           </li>
                       </ol>
                       <ol>
                           <li style={{listStyleType:'circle'}}>
                            {nkwCateringDetail.context.li_all[7]}
                           </li>
                       </ol>
                   </li>
              
                   <li>
                      {`Camp Laundy Services: Facilities a laundry service by
                      issuing each occupant with a laundry bag to place clothes for 
                      washing, drying and ironing - 3 times per week with same day return.

                      `}
                   </li>
                   <li>
                      {nkwCateringDetail.context.li_all[9]}
                   </li>
                   <li>
                      {nkwCateringDetail.context.li_all[10]}
                   </li>
                   <li>
                      {nkwCateringDetail.context.li_all[11]}
                   </li>
                   <li>
                      {`Ground Keeping: Mowing of lawns, weeding of garden beds.`}
                   </li>
               </ul>
            </div>

            <div className="section_title">
                    <p style={{fontSize: "30px"}}>Divisions associated with Catering</p>
                    <hr />
            </div>
            <div className="logo_section_nkw_catering"> 
                 <div>
                     <Link to="/explore/divisions/nkwcatering">
                         <img src={nkwCateringDetail.logo} alt="" width="20%"/>
                     </Link>
                 </div> 
                 {/* <div>
                     <img src="http://nkwgroup.com/wp-content/uploads/2019/03/mountaincoffee-1200x800.jpg" alt="" width="100%"/>

                 </div> */}
            </div>
                </div>
         
            <div className="image_footer ">
                <img style={{marginLeft: "-60px"}} src={cateringFooter} alt=""  width="100%" height="566.6px"/>
            </div>
            </div>
       
        </Fragment>
    )
}


export default Catering;