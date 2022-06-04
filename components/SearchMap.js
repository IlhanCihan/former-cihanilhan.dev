
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const PostList = ({post, compact}) => {
    return (
        <div>
                <Link href={`/blog/${post.slug}`}  passHref>
                    <a     style={{textDecoration: 'none', color: 'inherit'}}>
                        {post.frontmatter.title}
                    </a>
                </Link>
            <hr/>
        </div>
    )
}

export default PostList;
