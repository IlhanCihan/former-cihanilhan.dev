import Layout from "../components/Layout";
import {faSpider} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Row} from "react-bootstrap";

export default function ContactPage() {
    return(
        <Layout title='Page not found'>
            <Row>
                <Col  style={{marginTop: '200px', textAlign: 'center'}}>
                    <h1><FontAwesomeIcon size="sm" icon={ faSpider } />  Page not found <FontAwesomeIcon size="sm" icon={ faSpider }/></h1>
                </Col>
            </Row>
        </Layout>
    )
}