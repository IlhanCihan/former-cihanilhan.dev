import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Image from 'next/image'
import Layout from "../../../components/Layout";
import {Button, Col, Container, Row} from "react-bootstrap";
import Link from 'next/link'
import matter from 'gray-matter'
import Post from "../../../components/Post";
import {getPosts} from "../../../lib/posts";
import { faFolder} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CategoryList from "../../../components/CategoryList";
import {useState} from "react";
import PostList from "../../../components/PostList";
import FilteringMenu from "../../../components/FilteringMenu";




export default function CategoryBlogPage({ posts, categoryName, categories }) {
    const [filter, setFilter] = useState({
        view: { list: 0 }
    });
    return (
        <div>
            <Layout>
                {/*<FontAwesomeIcon flip="horizontal"  icon={ faFolder }  />*/}
                <h2 style={{marginTop: '10px', textAlign: 'center', marginBottom: '30px', }}> {categoryName.toUpperCase()}   </h2>
                <Container>
                    <Row>
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
            </Layout>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const categories = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return frontmatter.category.toLowerCase()
    })

    const paths = categories.map((category) => ({
        params: { category_name: category },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { category_name } }) {
    const files = fs.readdirSync(path.join('posts'))

    const posts = getPosts()

    // Get categories for sidebar
    const categories = posts.map((post) => post.frontmatter.category)
    const uniqueCategories = [...new Set(categories)]

    // Filter posts by category
    const categoryPosts = posts.filter(
        (post) => post.frontmatter.category.toLowerCase() === category_name
    )

    return {
        props: {
            posts: categoryPosts,
            categoryName: category_name,
            categories: uniqueCategories,
        },
    }
}