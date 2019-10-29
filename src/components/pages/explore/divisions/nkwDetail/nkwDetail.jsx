import React, {Fragment, useState, useEffect}  from 'react';
import NKW_ImgTwo from './nkw_fresh_divistion_img_two.png';
import NKWFresh_Entry_Page_Images from './NKWFresh_Entry_Page_Images.png';
import axios from 'axios'; 

import './nkwDetail.scss';




// Get NKW Single Data from api


const NKWDetail = () => { 

    const [nkwFresh, setNkwFresh] = useState({
       title: '',
       logo: '',
       imgs:[],
       content: [],
       contact:[{}]
    });


    useEffect(() => {
        axios.get('/api/nkwfreshdetails').then(res => {
            console.log(res.data);
            setNkwFresh(res.data[0]);

        })
    }, [])
    

    return (
        <Fragment>
            <div className="nkw_detail_header_divistion"> 
                     <h3>{nkwFresh.title}</h3>
            </div>
         <div className="main_contants">
         <div className="nkw_detail_middle_contants">
                <div className="left_logo">
                     <img src={nkwFresh.logo} alt=""  width="100%" height="auto"/>
                </div>
                <div className="right_contact_card_contaner">
                    <div className="contact_card">
                             <h4 style={{marginTop: "-4.3px"}}>Contact</h4>
                              <p>Phone: +67{nkwFresh.contact[0].phone_a} or +61{nkwFresh.contact[0].phone_b}</p>
                             <p>Email: {nkwFresh.contact[0].email}</p> 
                    </div>
                </div>
            </div>
            <div className="pargarh_section">
                <div className="p_1">
                    <p>{nkwFresh.content[0]}</p>
                </div>
                <div className="p_2">
                    <p>{nkwFresh.content[1]}</p>
                </div>
            </div>
            <div className="one_big_img">
                {/* <img src={nkwFresh.section_img_one} alt="nkw_fresh_sec_image"  width="auto" height="100%"/> */}
            </div>  

            <div className="pargarh_section">

                <div className="p_1">
                        <p>{nkwFresh.content[2]}</p>
                </div>
                <div className="p_1">
                        <p>{nkwFresh.content[3]}</p>
                </div>
                <div className="p_1">
                        <p>{nkwFresh.content[4]}</p>
                </div>
            </div>

            <div className="pargarh_section_2">
                    <img src={NKW_ImgTwo} alt=""  width="46%" height="35%"/>
                    <div className="p_s_left_text">
                        <p>{nkwFresh.content[5]}</p>
                    </div>
                       
            </div>

            <div className="pargarh_section">

                <div className="p_1">
                        <p>{nkwFresh.content[6]}</p>
                </div>
                <div className="p_1">
                        <p>{nkwFresh.content[7]}</p>
                </div>
                <div className="p_1">
                        <p> {nkwFresh.content[8]}</p>
                </div>
            </div>
         </div> 

            

        </Fragment> 
    )
}


export default  NKWDetail;