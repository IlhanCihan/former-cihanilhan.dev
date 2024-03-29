import Link from 'next/link'

export default function CategoryLabel({ children }) {


    return (
        <div>
            <Link  href={`/blog/category/${children.toLowerCase()}`} passHref>
                <a style={{textDecoration: 'none', color: 'inherit'}}>{children}</a>
            </Link>
        </div>
    )
}