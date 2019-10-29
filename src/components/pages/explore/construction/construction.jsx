import React, {Fragment} from 'react';
import FooterImage from './CategoryFooterImages_Building.png'
import './construction.scss';


const Construction = () => { 
    return (
        <Fragment>
             <div className="construction_detail_header">
                <h1>{`NKW Building & Construction`}</h1>
            </div> 


            <div style={{overflow:"scroll", height:'59.94vh', overflowX: 'hidden', margin:"-5px 0",  padding:"-0px 60px" }}>
            <div className="pargrah_main">
                <p style={{color:"#707070", fontSize:"20px", padding: "3% 37px"}}>
                    {`
                        NKW Building & Construction Services offer comprehensive solutions. A locally-based company
                        servicing Papua New Guinea, NKW Group deliver 'fit for purpose' service, within budget and on 
                        schedule. We build accommodation facilities for mining townships and medium to large corporate
                        companies throughout Papua New Guinea. Materials and labour are sourced loacally and
                        internationally. Through our joint venture companies, we offer road construction, maintenance and
                        equipment hire.                    
                    `}
                </p>
            </div> 
            <div style={{display: 'flex', padding: '0 4%'}}>
                <div style={{textAlign:'left', fontSize: "20px" , color:"#707070",  flex: "1"}}>      
                    <p style={{fontWeight: 'bold', fontSize:"20px", color:"#707070"}}>Complete Construction Services: </p> 
                    <ul style={{lineHeight:"2.3rem", marginTop: "-39px"}}>
`                       <li>New, renovate or rebuild</li>
                        <li>{`Warehouses, camp accommodation, `}<br/>
                             { `offices, houses and Civil Works` }</li>
                        <li>Equipment Hire</li> 
                        <li>Maintenance and camp management</li>
                        <li>Project management and labour hire</li>
                    </ul>
                </div>
                <div style={{textAlign:'left', fontSize: "20px" , color:"#707070",  flex: "1"}}>      
                    <p style={{fontWeight: 'bold', fontSize:"20px", color:"#707070"}}> Remote Site Operations:</p> 
                    <ul style={{lineHeight:"2.3rem", marginTop: "-37px"}}>
`                       <li>Manus: 1 x 1,000 man camp</li>
                        <li>1 x 300 Man Camp</li>
                        <li>1 x 70 Man Camp</li> 
                        <li>{`Lae: Service Provider to the WAFI Project`}<br/>
                           {`at 11 mile`}</li>
                        <li>Catering and HousKeeping</li>
                        <li>Facilities (Office for 80 personal)</li>
                    </ul>
                </div>
            </div>
            <div className="pargrah_main" style={{padding: " 0 40px"}}>
                <p style={{color:"#707070", fontSize:"20px"}}>
                    <span style={{fontWeight: "700"}}>
                            {`
                                    Experience in Camp Construction and Catering:                                        
                            `}
                    </span>
                    <li>{`
                        NKW Group have been building camps in Papua New Guinea For over 5 years. We Know the terrain
                        and the culture and have our own CA team to ensure Land Owners are given direct attention before
                        issues escalate, as we know they can.
                    `}</li>
                    <br/>
                        {`Contact Us to benefit from our comprehensive range of building, construction, mining campsite and
                          infrastructure services.
                        `}
                  
                </p>
            </div> 
            <div className="section_title">
                    <p style={{fontSize:"33px"}}>Divisions associated with NKW Building & Constuction</p>
                    <hr />
            </div>
            <div className="construction_logo_section"> 
                 <div>
                       <img src="http://localhost:5000/divisions/NKW_Logos_QPS.png" alt="" width="100%"/>
                 </div> 
                 <div>
                     <img src="http://localhost:5000/divisions/NKW_Logos_NKWConstruction.png" alt="" width="100%"/>

                 </div>
            </div>
            <div>
               <h2 style={{
                   color: "#F7941B",
                   textAlign:"left",
                   fontSize:"20px",
                   padding: "0 4%"
               }}>NKW Group Industrial Project Services</h2>
               <p 
                style={{
                    color:"#707070",
                    textAlign:"left",
                    fontSize: "20px",
                    padding: "0 4%",
                    lineHeigh: "2.1rem"
                }}
               >{`
                  
                  Operating under the brand ‘Mine Spec’ N KW offer commercial services to the mining industry. We have been providing tailored service solutions to our customers since 2004 under this brand. Mine Spec understand that customers are the core of our business and make it our responsibility to ensure they are offered the highest levels of customer service plus the benefits of competitive and reliable service options throughout the region. Contact Us to find out how we can help with your industrial project.

               `}</p><br/>
               <p 
                 style={{
                    color:"#707070",
                    textAlign:"left",
                    fontSize: "20px",
                    padding: "0 4%",
                    lineHeigh: "2.1rem",
                    
                }}
               >{`Contact Us`} to find out how we can help with your industrial project</p>
            </div>
            <div className="image_footer">
                <img style={{marginLeft: "-60px"}} src={FooterImage} alt="" width="100%"/>
            </div>
            </div> 
        
        </Fragment>
    )
}


export default Construction;