import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import {getPosts} from "../lib/posts";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {Button, Col, Nav, Row} from "react-bootstrap";
import Post from "../components/Post";



export default function Home({ posts }) {
  return (
    <div>
        <Layout>
            <div style={{ marginTop: '15px',padding: '20px', backgroundColor: 'rgba(191, 191, 191, 0.15)' , borderRadius: '10px', marginBottom: '40px' }}>
                <h1 >
                    Hello World
                    <img style={{marginLeft: '10px'}} width="50" height="50" src="https://camo.githubusercontent.com/66e00b1e8f7047726770f791fdd5deac5341bf0b598f6d0202cbc94cda80fb06/68747470733a2f2f692e696d6775722e636f6d2f6c73697a67476c2e676966"  alt='hello'/>
                </h1>
                <h4 style={{marginLeft: '15px', marginTop: '10px'}} >I post my blogs here 📫</h4>
            </div>

            <Row className="mb-5"  >
            {posts.map((post , index) => (

                    <Col  key={index}  md="3">
                        <Post post={post} />
                    </Col>

            ))}
            </Row>

            <br/>
            <div style={{textAlign: "center"}}>
                <Button variant="secondary" size="lg" >
                    <Link    href='/blog' passHref>
                        <a style={{textDecoration: 'none', color: 'inherit'}}> <FontAwesomeIcon  icon={ faBookOpen }/> Read all posts  <FontAwesomeIcon  icon={ faBookOpen }/> </a>
                    </Link>
                </Button>
            </div>


        </Layout>
    </div>
  )
}

export async function getStaticProps() {
    return {
        props: {
            posts: getPosts().slice(0, 6),
        },
    }
}