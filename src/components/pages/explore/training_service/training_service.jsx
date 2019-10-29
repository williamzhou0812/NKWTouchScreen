import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import mto_traning_footer from './CategoryFooterImagesTraining.png';
import './training_service.scss';
import { textAlign } from '@material-ui/system';


const TrainingService = () => { 

    const [mtoTraining, setMtoTraining] = useState({
        title: '',
        logos:[],
        imgs: [],
        context: {
            p: [],
            sub_title: [],
            li_all: []
        }
    });



   useEffect(() => {
    axios.get('/api/mtotrainingexpdetail').then(res => {
        setMtoTraining(res.data[0])
    });
   }, [])

    return (
        <Fragment>
             <div className="expac_detail_header_mto">
                <h1>{mtoTraining.title}</h1>
            </div> 
            <div className="warper_ato"> 
              <div className="main_context_warper_ato" >
              <div className="pargrah_main_mto">
                <p>{mtoTraining.context.p[0]}</p>
                <p>{`MTO trainers have extensive experience and are sensitive to cultural diversity and comfortable with training and assessment in remote locations. MTO Training PNG specialises in prompt response to a client’s service request and provide free advice on training and education. Industry clients receive tailored courses to meet their exact needs. `}</p>
                <p>{`MTO Training PNG maintains constant liaison with the National Training Council of PNG to ensure our courses are of the highest standards`}</p>


            </div> 
            <div className="section_title_mto">
                    <p>Divisions associated with Training Service</p>
                    <hr />
            </div>
            <div > 
                 <div style={{
                     
                     padding: '6% 1%',
                     textAlign: 'left'
                }}>
                       <img src="http://localhost:5000/divisions/NKW_Logos_NKWTraining.png" alt="" width="25%"/>
                 </div> 
            </div>
              </div>
           
            <div className="image_footer_mto">
                <img src={mto_traning_footer} alt=""  width="100%" height="506"/>
            </div>
            </div>
           
        </Fragment>
    )
}


export default TrainingService;