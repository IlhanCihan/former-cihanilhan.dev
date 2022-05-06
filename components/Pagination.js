import Link from 'next/link'
import {Button} from "react-bootstrap";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function PaginationNon({currentPage, numPages}) {
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = `/blog/page/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    if (numPages === 1) return <></>

    return (
        <div>



            <div style={{marginTop: '30px'}}>
                {!isFirst &&(
                <Button size="lg" variant="secondary">
                    <Link    href={prevPage}>
                        <a style={{textDecoration: 'none', color: 'white'}}>
                            <FontAwesomeIcon  icon={ faAngleLeft }/>  Previous
                        </a>
                    </Link>

                </Button>
                )}

                {Array.from({ length: numPages }, (_, i) => (
                    <Button size="lg" variant="secondary" style={{marginLeft: '10px'}}>
                        <Link    href={`/blog/page/${i + 1}`} key={`page-${i}`}>
                            <a style={{textDecoration: 'none', color: 'white'}}>
                                {i + 1}
                            </a>
                        </Link>

                    </Button>
                ))}

                {!isLast &&(
                    <Button size="lg" variant="secondary" style={{marginLeft: '10px'}}>
                        <Link    href={nextPage}>
                            <a style={{textDecoration: 'none', color: 'white'}}>
                                  Next <FontAwesomeIcon  icon={ faAngleRight }/>
                            </a>
                        </Link>

                    </Button>
                )}
            </div>
             





        </div>
    )
}