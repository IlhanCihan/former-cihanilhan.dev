import {Card, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAddressCard,
    faBox, faCloudArrowDown,
    faCodeBranch,
    faEarth,
    faEnvelope,
    faGraduationCap,
    faLanguage,
    faLink, faRocket
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from 'next/image'

export default function CvPage() {

    return (
        <Card className={`fj-card fj-card-list`}>
            <div className="card-body-wrapper">

                <Row>
                    <Col sm={9} >
                        <h1 style={{ marginTop: '15px' }}>
                            Hello World, I am Cihan
                            <img style={{marginLeft: '10px'}} width="50" height="50" src="https://camo.githubusercontent.com/66e00b1e8f7047726770f791fdd5deac5341bf0b598f6d0202cbc94cda80fb06/68747470733a2f2f692e696d6775722e636f6d2f6c73697a67476c2e676966" />
                        </h1>
                    </Col>
                    <Col sm={3}>

                        <Row>
                            <Col>


                                <Card.Title ><FontAwesomeIcon icon={ faLink }/>
                                    <Link   href="https://www.linkedin.com/in/cihan-ilhan-b7669621b/" passHref>
                                        <a style={{ color: 'inherit', marginLeft: '15px', textDecoration: 'none' }}>LinkedIn</a>
                                    </Link>

                                </Card.Title>
                                  <Card.Title ><FontAwesomeIcon icon={ faCodeBranch }/>
                                    <Link   href="https://github.com/IlhanCihan" passHref>
                                        <a style={{  color: 'inherit', marginLeft: '20px', textDecoration: 'none'}} >GitHub</a>
                                    </Link>
                                </Card.Title>
                                              <Card.Title ><FontAwesomeIcon icon={ faEnvelope }/>
                                    <Link   href='mailto:root@cihanilhan.dev' passHref>
                                        <a style={{ color: 'inherit', marginLeft: '20px', textDecoration: 'none' }}>root@cihanilhan.dev </a>
                                    </Link>
                                </Card.Title>
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <Card.Header className="d-flex flex-row">
                </Card.Header>
                <Card.Body>
                    <>
                        <br/>
                        <div>
                            <h3><FontAwesomeIcon icon={ faEarth }/> About me</h3>
                            <hr/>
                            <h4 style={{marginLeft: '15px', marginTop: '10px'}} >I like to make stuff and post it on internet 🌱</h4>
                        </div>
                        <br/><br/><br/>
                        <Row>
                            <Col>
                                {/*<div>*/}
                                {/*    <h3><FontAwesomeIcon icon={ faBox }/> Experiences</h3>*/}

                                {/*    <hr/>*/}
                                {/*    /!*<Card.Title style={{marginLeft: '15px', marginTop: '10px'}} className="font-weight-bold mb-1">Part-time Full Stack Web Developer</Card.Title>*!/*/}
                                {/*    /!*<Card.Text style={{marginLeft: '15px'}} className="card-date">(October 2021 – Present)</Card.Text>*!/*/}
                                {/*    /!*<a style={{  marginLeft: '15px', color: 'inherit' }} href="http://edusoftech.eu/">Edusoft Technologies SRL</a>*!/*/}
                                {/*    /!*<br/>*!/*/}
                                {/*    /!*<img style={{marginLeft: '15px', marginTop: '10px'}} align="left" src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" />*!/*/}
                                {/*    /!*<img style={{marginLeft: '15px', marginTop: '10px'}} align="left" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />*!/*/}
                                {/*    /!*<img style={{marginLeft: '15px', marginTop: '10px'}} align="left" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />*!/*/}
                                {/*    /!*<br/><br/>*!/*/}
                                {/*    /!*<Card.Text style={{marginLeft: '15px', marginTop: '10px'}} className="font-weight-bold mb-1">Full stack web developer</Card.Text>*!/*/}
                                {/*    /!*<br/>*!/*/}
                                {/*    <Card.Title style={{marginLeft: '15px', marginTop: '10px'}} className="font-weight-bold mb-1">Software Engineer Intern</Card.Title>*/}
                                {/*    <Card.Text style={{marginLeft: '15px'}} className="card-date">(July 2021- September 2021)</Card.Text>*/}
                                {/*    <Link   href="https://www.clurb.net/" passHref>*/}
                                {/*        <a style={{   marginLeft: '15px', marginTop: '10px', color: 'inherit' }} >Clurb</a>*/}
                                {/*    </Link>*/}
                                {/*    <br/>*/}
                                {/*    <img style={{marginLeft: '15px', marginTop: '10px'}} align="left" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />*/}
                                {/*    <br/><br/>*/}
                                {/*    <Card.Text style={{marginLeft: '15px', marginTop: '10px'}} className="font-weight-bold mb-1">Testing and Quality Assurance </Card.Text>*/}
                                {/*</div>*/}
                                {/*<br/>*/}
                                <div>
                                    <h3><FontAwesomeIcon icon={ faGraduationCap }/> Education</h3>
                                    <hr/>
                                    <Card.Title style={{marginLeft: '15px', marginTop: '10px'}} className="font-weight-bold mb-1">Bachelor of Science in Computer Science for economics</Card.Title>
                                    <Card.Text style={{marginLeft: '15px'}} className="card-date">(2019 - 2022)</Card.Text>
                                    <Card.Text style={{marginLeft: '15px'}} >
                                    <Link   href="https://www.rau.ro/" passHref>
                                        <a style={{  color: 'inherit' }} >Romanian-American University</a>
                                    </Link>
                                        </Card.Text>



                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h3><FontAwesomeIcon icon={ faLanguage }/> Languages</h3>
                                    <hr/>
                                    <Row>
                                        <Col md={5}>
                                            <div>
                                                <h5 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="font-weight-bold mb-1">Turkish: </h5>
                                            <div className="progress" style={{marginLeft: '25px', marginTop: '10px', fontWeight: 'bold'}}>
                                            <span className="progress-bar cool" style={{width: '100%'}}>
                                            </span>
                                            </div>
                                            <br/>
                                            </div>
                                            <div>
                                                <h5 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="font-weight-bold mb-1">Turkmen: </h5>
                                            <div className="progress" style={{marginLeft: '25px', marginTop: '10px', fontWeight: 'bold'}}>
                                            <span className="progress-bar cool" style={{width: '100%'}}>
                                            </span>
                                            </div>
                                            <br/>
                                            </div>
                                            {/*<div>*/}
                                            {/*    <h5 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="font-weight-bold mb-1">Russian: </h5>*/}
                                            {/*<div className="progress" style={{marginLeft: '25px', marginTop: '10px', fontWeight: 'bold'}}>*/}
                                            {/*<span className="progress-bar cool" style={{width: '20%'}}>*/}
                                            {/*</span>*/}
                                            {/*</div>*/}
                                            {/*<br/>*/}
                                            {/*</div>*/}


                                        </Col>
                                        <Col md={5}>
                                            <div>
                                                <h5 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="font-weight-bold mb-1">English: </h5>
                                            <div className="progress" style={{marginLeft: '25px', marginTop: '10px', fontWeight: 'bold'}}>
                                            <span className="progress-bar cool" style={{width: '89%'}}>
                                            </span>
                                            </div>
                                            <br/>
                                            </div>
                                            <div>
                                                <h5 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="font-weight-bold mb-1">Romanian: </h5>
                                            <div className="progress" style={{marginLeft: '25px', marginTop: '10px', fontWeight: 'bold'}}>
                                            <span className="progress-bar cool" style={{width: '30%'}}>
                                            </span>
                                            </div>
                                            <br/>
                                            </div>



                                        </Col>
                                    </Row>

                                </div>
                                <br/><br/>

                            </Col>
                        </Row>
                                        <div>
                                    <h3><FontAwesomeIcon icon={ faRocket }/> Skills Proficiency</h3>
                                    <hr/>
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" />
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" />
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
                                    <img style={{marginLeft: '15px', marginTop: '5px'}} align="left" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />

                                </div>
                        <br/>
                    </>
                </Card.Body>
            </div>
                <a className="card-button"    style={{textDecoration: 'none'}} href='/CV/Cihan Ilhan CV.pdf' download>
                    Download my Europass CV <FontAwesomeIcon icon={ faCloudArrowDown }/>
                </a>

        </Card>
    )
}
