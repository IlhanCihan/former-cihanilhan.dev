import fs from 'fs'
import path from 'path'
import Layout from "../../../components/Layout";
import {Col, Container, Nav, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFeather} from "@fortawesome/free-solid-svg-icons";
import {getPosts} from "../../../lib/posts";
import {POSTS_PER_PAGE} from "../../../config";
import Post from "../../../components/Post";
import Link from "next/link";
import PaginationNon from "../../../components/Pagination";
import CategoryList from "../../../components/CategoryList";
import FilteringMenu from "../../../components/FilteringMenu";
import {useState} from "react";
import PostList from "../../../components/PostList";

export default function BlogPage({posts, numPages, currentPage, categories}) {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });
    return(
        <div>
            <Layout>
                {/*<h2 style={{marginTop: '10px', textAlign: 'center', marginBottom: '30px', }}><FontAwesomeIcon  icon={ faFeather }/>  My blogs  </h2>*/}
                <Container>
                    <Row >
                        <Col sm={10}>
                            <Row className="mb-5" >
                            {posts.map((post , index) => (
                                filter.view.list ?
                                    <Col key={index}  md="9">
                                        <PostList   post={post} />
                                    </Col>
                                    :

                                <Col  key={index}  md="4">
                                <Post   post={post} />
                                </Col>

                            ))}
                            </Row>
                        </Col>
                        <Col sm={2}>
                            <div style={{padding: '20px', backgroundColor: 'rgba(191, 191, 191, 0.15)' , borderRadius: '10px', marginBottom: '20px'}}>
                                <Row>
                                    <Col>
                                        <p style={{marginLeft: '13px', marginBottom: '10px',  fontSize: '20px'}}>Layout: </p>
                                    </Col>
                                    <Col>
                                        <FilteringMenu
                                            filter={filter}
                                            onChange={(option, value) => {
                                                debugger
                                                setFilter({...filter, [option]: value});
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <CategoryList categories={categories}/>
                        </Col>
                    </Row>
                </Container>
                <div style={{textAlign: "center"}}>
                <PaginationNon currentPage={currentPage} numPages={numPages}/>
                </div>
            </Layout>


        </div>

    )
}
export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

    let paths = []

    for (let i = 1; i <= numPages; i++) {
        paths.push({
            params: { page_index: i.toString() },
        })
    }

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const page = parseInt((params && params.page_index) || 1)

    const files = fs.readdirSync(path.join('posts'))

    const posts = getPosts()

    // Get categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category)
    const uniqueCategories = [...new Set(categories)]

    const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
    const pageIndex = page - 1
    const orderedPosts = posts.slice(
        pageIndex * POSTS_PER_PAGE,
        (pageIndex + 1) * POSTS_PER_PAGE
    )

    return {
        props: {
            posts: orderedPosts,
            numPages,
            currentPage: page,
            categories: uniqueCategories,
        },
    }
}