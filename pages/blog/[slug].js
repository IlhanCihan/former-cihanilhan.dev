import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Layout from "../../components/Layout";
import {Col, Row} from "react-bootstrap";
import CategoryLabel from "../../components/CategoryLabel";
import {useRef} from "react";

export default function PostPage({frontmatter: { title, category, date, cover_image, excerpt, author_image, category_image }, content, slug,})
{

    const imgRef = useRef(null);
    return (
        <Layout className="blog-detail-page" title={title}>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
            <div className="blog-detail-header">
                <p className="lead mb-0">
                    <img
                        style={{marginRight: '15px'}}
                        src={category_image}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar" ref={imgRef}/>
                    {/*<CategoryLabel >{category}</CategoryLabel>*/}
                    {category}
                    {', '} {date}
                </p>

                <h1 style={{marginTop: '10px'}} className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
                <h2 style={{marginTop: '10px'}} className="blog-detail-header-subtitle mb-3">{excerpt}</h2>

                <img
                    className="img-fluid rounded"
                    src={cover_image} alt="TODO: provide alt"/>

            </div>
            <hr/>
                    <div className='blog-text mt-2'>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </div>

                </Col>
            </Row>
        </Layout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
        props: {
            frontmatter,
            content,
            slug,
        },
    }
}