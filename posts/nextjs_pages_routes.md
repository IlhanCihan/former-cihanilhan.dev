---
title: 'Next.js Pages & Routes'
date: 'Jun 4, 2022'
excerpt: 'Brief explanation of how paging and routes work on Next.js'
cover_image: '/images/posts/img4.jpg'
category: 'Nextjs'
category_image: '/images/languages/nextjs.png'
---
<br/>

## Adding a page
If you want to add a page to your app. Create a file in the component in /pages/newPage.js

 ```javascript
    export default function About() {
        return 
        <div>
            Hello world 😊
		</div>
    }
```
This is an incredible benefit since we never again need to introduce a library like React Router that requires standards like a Router and Route component, among others.
<br/><br/>
## Dynamic pages
We create dynamic pages in same folder but it will have different slugs

If you want to create a blog posts according to a particular slug, we could drop a "blog" folder in pages with the filename: [slug].js

 ```javascript
import { useRouter } from 'next/router'

    export default function BlogPost() {
      const router = useRouter()
      const { slug } = router.query
    
      return <p>Post: {slug}</p> 
}
```