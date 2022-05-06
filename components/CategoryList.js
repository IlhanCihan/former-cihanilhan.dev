import Link from 'next/link'
import {Button} from "react-bootstrap";

export default function CategoryList({categories}) {


    return (
        <div >

            <div style={{padding: '20px', backgroundColor: 'rgba(191, 191, 191, 0.15)' , borderRadius: '10px', marginBottom: '20px'}}>
                <h4 style={{marginLeft: '13px'}}>Categories</h4>
                <ul style={{listStyle: 'none'}}>
                    {categories.map((category, index) => (
                        <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
                            <li style={{marginBottom: '10px'}}>
                                <Button variant="outline-secondary">
                                    {category}
                                </Button>
                            </li>

                        </Link>
                    ))}
                </ul>
            </div>


        </div>
    )
}