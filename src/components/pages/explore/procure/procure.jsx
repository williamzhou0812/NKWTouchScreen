import React, {Fragment} from 'react';
import ProcurementFooter from './procurement_footer.png';
import {Link} from  'react-router-dom';

import Image01 from './Procurement_Image.png';
import './procure.scss';

const Procure  = () => {
    return (
    <Fragment>
        <div className="procurement_header">
            <h1>Procurement</h1>
        </div> 
        <div className="warper_procurement"> 
                <div className="main_context_warper" >
                    <div className="pargrah_main_Procurement" >
                        <div className="leftContext">
                            <p>{`The NKW Group offer end-to-end management of specialist goods and services.`}</p>

                        </div>
                        <div className="rightContext">
                                <img src={Image01} alt="procuremnt_right_content"/>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div> 
                </div>


                <div className="section_title_logist" style={{ marginLeft: '0%'}}>
                            <p style={{marginLeft: "0%"}}>{`Divisions associated with Procurement`}</p>
                            <hr />
                            <Link to='/explore/divisions/hiddenvalley' >
                                <img src="http://localhost:5000/divisions/NKW_Logos_NKWFresh.png" alt="" width="200px" height="200px"  style={{ margin: '3% 3%'}}  />
                            </Link>
                </div>
   
        <div className="image_footer">
            <img style={{marginLeft: "-55px"}} src={ProcurementFooter} alt="" />
        </div>
        </div>
   </Fragment>
    ) 
}

export default Procure;