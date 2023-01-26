import Layout from "../components/Layout";
import {getPosts} from "../lib/posts";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

export default function Home({posts})
{
	return (
		<div>
			<Layout>

				<br/>
				<div style={{textAlign: "center"}}>
					<Button variant="secondary" size="lg">
						<Link href='/blog' passHref>
							<a style={{textDecoration: 'none', color: 'inherit'}}>
								<FontAwesomeIcon icon={faBookOpen}/> Read all posts <FontAwesomeIcon icon={faBookOpen}/>
							</a>
						</Link>
					</Button>
				</div>

			</Layout>
		</div>
	)
}

export async function getStaticProps()
{
	return {
		props: {
			posts: getPosts().slice(0, 6),
		},
	}
}