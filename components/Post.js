import {Card, Container} from "react-bootstrap";
import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from "./CategoryLabel";


export default function Post({post}) {
    return (
        <div >
            <Card className={`fj-card`}>
                <div className="card-body-wrapper">

                    <Card.Header
                        className="d-flex flex-row">

                            <div className="blog-detail-header">
                            <p className="lead mb-0">
                            <Image
                            src={post.frontmatter.category_image}
                            className="rounded-circle mr-3"
                            height="50px"
                            width="50px"
                            alt="avatar"/>
                            </p>
                            </div>


                        <div style={{marginLeft: '10px'}}>
                            <Card.Title className="font-weight-bold mb-1">
                                <CategoryLabel className="font-weight-bold mb-1">{post.frontmatter.category}</CategoryLabel>
                            </Card.Title>

                            <Card.Text className="card-date">{post.frontmatter.date}</Card.Text>
                        </div>
                    </Card.Header>


                        <div className="view overlay">
                          <Card.Img
                            src={post.frontmatter.cover_image}
                            // height="300"
                            alt="Card image cap"
                        />

                    </div>

                    <Card.Body>
                        <Card.Title className="card-main-title">
                            {
                                post.frontmatter.title.length > 40 ?
                                    post.frontmatter.title.substr(0, 40) + '...' : post.frontmatter.title
                            }
                        </Card.Title>
                        <Card.Text>
                            {
                                post.frontmatter.excerpt.length > 40 ?
                                    post.frontmatter.excerpt.substr(0, 40) + '...' : post.frontmatter.excerpt
                            }
                        </Card.Text>
                    </Card.Body>
                </div>

                <Link href={`/blog/${post.slug}`} passHref>
                    <a className="card-button"    style={{textDecoration: 'none'}}>
                        Read More
                    </a>
                </Link>

            </Card>
        </div>

    )
}