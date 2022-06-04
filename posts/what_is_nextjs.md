---
title: 'What is Next.js'
date: 'Jun 4, 2022'
excerpt: ''
cover_image: '/images/posts/img3.jpg'
category: 'Nextjs'
category_image: '/images/languages/nextjs.png'
---
<br/>
In recent years, the frontend field on the web has developed a lot. Now we can make faster websites easier and more useful. We can achieve these with frontend libraries or frameworks such as React.js, Vue.js, Angular and Svelte. The subject we are discussing in this article will be the Next.js framework built on React.js.
<br/><br/>

## Some of the Next.js features:
* Image optimization
* SSG(Server Side Rendering) and SSG(Server Side Generation)
* Route system with filename
* API routes
* Component level CSS writing
* Fast refreshing
* TypeScript support
<br/><br/>

## Image Optimization


You can easily optimize static image files with the Image component built into Next.js. Even if the image size is very high, for example 4K, this image file can also be produced in different resolutions, showing the size you need. An optimization has already been made here. Apart from that, it compresses the image file and makes one more optimization. If you want, you can make more optimizations by specifying the picture quality yourself.
<br/><br/>

## API

With Next.js, you can easily write the simple API service you need. For this, let's say that we open a folder called "api" under the pages folder and create a file called "getPosts.js". This will actually correspond to example.com/api/getPosts. In this file, you can extract data from wherever you want, process that data and return a response as a result.
<br/><br/>

## SSR and SSG

We said that Next.js is built on React.js. Since React.js works on the client side, there is no site content in the source codes of the pages. As soon as you send a request to the site, the necessary files are pulled and the page is created. Next.js pre-builds all these pages at build time and sends pre-built pages to the visitor. This process is very important for SEO.

Above, we talked about the difference between React.js and Next.js on this topic. Now let's get to what the SSR does.

Along with the above feature, there are also methods for us to do SSR for dynamic pages. For this, by using the getServerSideProps function of Next.js, we can send a request to an address we want before the page is opened, pull the data we want, send it to the page and add it to the source code.

Let's briefly talk about SSG: SSG allows us to create dynamic pages on the server side. Let's say you have a blog site, we want to create these pages statically in order to be fast, but since it is dynamic, the data we receive from the server can change constantly. At the end of the second you set for this, it can automatically verify the incoming data after it is built, and it allows you to publish your entire dynamic site as if it were actually static. This means a very fast website. Because that page is pre-created, there is no such thing as a request to the server and waiting time when opening.
<br/><br/>

<hr/>

## Start your own Next.js project


First thing you will need is node.js installed on your computer. You can download and install Node.js from https://nodejs.org/. Then there is a nice documentation at https://nextjs.org/. For a simple installation, we can create a project folder and open it with VSCode or another editor or IDE and type the following command in the terminal:
<br/>
 ```terminal
    npx create-next-app@latest 
```