import React, {Fragment} from 'react';
import './camp_management.scss';
import  camp_footer_img from './camp_footer.png';



const CampManagement = () => { 
    return (
        <Fragment>
             <div className="expac_detail_header_camp">
                <h1>Camp Management</h1>
            </div> 
            <div className="warper_camp_logistics">  
              <div className='main_context_warper_logistics'>
              <div className="pargrah_main_logistics" >
                        <p
                            style={{
                                color:'#707070',
                                fontSize: `20px`,
                                wordSpacing:'0.4rem',
                                padding: `5% 0%`,
                            }}
                        >
                            {`NKW provides a comprehensive range of Camp Management Services for off-site and onsite requirements. These include ancillary services and; `}
                        </p>
                        <div style={{
                            color: 'green',
                            fontSize: '20px',
                            marginLeft: '5%',
                            textAlign: "left",
                            
                        }}>
                            <ul 
                                style={{lineHeight: '1.9rem', fontSize: '20px', color: '#707070', listStyleType: 'decimal'}}
                            >
                                <li><span style={{marginLeft: '25px'}}>{`Camp Catering`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Camp Administration`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Cleaning Services (For accommodation & offices)`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Laundry Services`}</span></li>
                                <li><span style={{marginLeft: '25px'}}>{`Grounds Upkeep and Maintenance`}</span></li>

                            </ul>
                        </div>
                    </div> 



                    <div className="section_title_logist" 
                        style={{
                          //  border: '1px solid orange',
                            marginTop: '100px',
                            paddingLeft:'8%',
                            wordSpacing:"0.2rem",
                        }}
                    >
                            <p 
                              style={{
                                borderLeft: '4px solid orange',
                                paddingLeft:'2%',
                                color: '#F7941B',
                                fontSize: "30px"
                            }}
                            >
                            {`Capable `} {`of Catering to over 3000 a day`}
                           </p>
                    </div>
    
                     
                  
              </div>
                   

                    <div className="image_footer" style={{marginTop: "131.9px", padding: " 0 0 "}}>
                        <img src={camp_footer_img} alt="" />
                    </div>
                </div>
        </Fragment>
    )
}


export default CampManagement;