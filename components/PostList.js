
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import CategoryLabel from "./CategoryLabel";

const PostList = ({post, compact}) => {
    return (
        <Card className={`fj-card fj-card-list`}>
            <div className="card-body-wrapper">
                <Card.Header
                    className="d-flex flex-row">
                    <img
                        style={{marginRight: '10px'}}
                        src={post.frontmatter.category_image}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar"/>

                        <div>
                            <Card.Title className="font-weight-bold mb-1">
                                <CategoryLabel className="font-weight-bold mb-1">{post.frontmatter.category}</CategoryLabel>
                            </Card.Title>
                            <Card.Text className="card-date">{post.frontmatter.date}</Card.Text>
                        </div>

                </Card.Header>
                <Card.Body>
                        <>
                            <Card.Title className="card-main-title">{post.frontmatter.title}</Card.Title>
                            <Card.Text>{post.frontmatter.excerpt}</Card.Text>
                        </>
                </Card.Body>
            </div>
            <Link href={`/blog/${post.slug}`} >
                <a className="card-button"    style={{textDecoration: 'none'}}>
                    Read More
                </a>
            </Link>
        </Card>
    )
}

export default PostList;
