import React from 'react'
import { Link } from 'react-router-dom'


const Blogs = ({blogs, firstblogs}) => {
   console.log(blogs);
  //  const firstThreeBlogs = blogs.data.slice(2, 3);
  //  const firstThree = firstblogs.data.slice(0, 1);
   const firstThre = firstblogs.data.slice(0, 1);
   const firstThr = firstblogs.data.slice(1, 2);
   const firstTh = firstblogs.data.slice(2, 3);
   const firstThrr = firstblogs.data.slice(3, 4);
   const firstThee = firstblogs.data.slice(4, 5);
   const firstTheee = firstblogs.data.slice(5, 6);
  //  const blogg = blogs.data.slice(0, 1);
   const bloggg = blogs.data.slice(1, 5);
   const blogi = blogs.data.slice(5, 6);
   const bloggi = blogs.data.slice(6, 14);
  //  const blogggi = blogs.data.slice(11, 12);



// const options = { day: 'numeric', month: 'long', year: 'numeric' };
// const date = new Date(firstblog.createdAt).toLocaleDateString('en-US', options);

  
// const dates = blogs.map(blog => blog.attributes.publishedAt);
// console.log(publishedAt);



  return (

            <>


<div className="flex justify-center items-center drop-shadow-xl">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    {/* <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div> */}
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">


        {firstThre.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                 <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                 </div>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url}  className="w-full" alt="firstblogImg" />
          </Link>
          ) }
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">


          {firstThr.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                 <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                 </div>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="firstblogImg" />
            </Link>
            )}
          </div>
        </div>
        <div className="relative">
        {firstThee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
              <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
               <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
               </div>
            </div>
          </div>
          <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="firstblogImg" className="w-full mt-8 md:mt-6 hidden sm:block" />
          {firstTheee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <img className="w-full mt-4 sm:hidden" src={firstblog.attributes.firstblogImg.data.attributes.url} alt="firstblogImg" />
          </Link>
          )}
          </Link>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
        {firstTheee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
              <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
               <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
               </div>
            </div>
          </div>
          <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="firstblogImg" className="w-full sm:block hidden" />
          {firstThee.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
          <img className="w-full sm:hidden" src={firstblog.attributes.firstblogImg.data.attributes.url} alt="sitting place" />
          </Link>
          )}
          </Link>
          )}
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">


          {firstTh.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">{firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                 <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                 </div>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="chair" />
            </Link>
          )}
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
          {firstThrr.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{firstblog.attributes.publishedAt.substring(0, 10)}</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white"> {firstblog.attributes.firstblogTitle}</h2>
                <p className="text-base leading-4 text-white mt-2">{firstblog.attributes.firstblogDesc.substring(0, 10)}</p>
                 <div   className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                 </div>
              </div>
            </div>
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} className="w-full" alt="wall design" />
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<section className="flex justify-center items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">

	<div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div className="flex flex-col items-center justify-center">

		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{bloggg.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
			<article className="flex flex-col dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] border">
				 <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
				 </div>
				<div className="flex flex-col flex-1 p-6">
					 <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum"> </div>
					 <div rel="noopener noreferrer"   className="text-xs tracking-wider uppercase hover:underline">Convenire </div>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug ">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span >June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			</Link>
				)}
		</div>
    </div>
	</div>
</section>







<div>    
      <section className=" ">
    
      <div className="container p-1 mx-auto space-y4 ">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

		{bloggg.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
          <div className="lg:hidden ">
            <div className="bg-white h-full w-full pl-4">
              <div>
                 <div   className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div className="pl-3 w-3/5">
                        <p className="text-xs text-gray-500 uppercase">MUSIC</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                 </div>
            </div>
          </div>
          </div>
          <article className="flex flex-col dark:bg-gray-900 hidden lg:block">
             <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
             </div>
            <div className="flex flex-col flex-1 p-6">
               <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum"> </div>
               <div rel="noopener noreferrer"   className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire </div>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
		  </Link>
				)}
         
        </div>
      </div>
    </section>
  </div>


<section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
    <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        {/* <!-- Blog post --> */}
		{blogi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
             <div className="relative block group"  >
                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={blog.attributes.blogImg.data.attributes.url}  width="540" height="303" alt="Blog post"/>
                </figure>
             </div>
            <div>
            
                <p className="text-lg text-gray-200 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <footer className="flex items-center mt-4">
                     <div  >
                        <img className="rounded-full flex-shrink-0 mr-4" src={blog.attributes.authorImg.data.attributes.url} alt="Author 04" style={{ width: "50px", height: "50px" }}/>
                     </div>
                    <div>
                         <div className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"  >Chris Solerieu </div>
                        <span className="text-gray-200"> - </span>
                        <span className="text-gray-200">Jan 19, 2020</span>
                    </div>
                </footer>
            </div>
        </article>  
		</Link>
		)}  
    </div>
</section>



<div x-show="open" className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
    {/* <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
        
        
    </div> */}
</div>



<div>    
      <section className=" ">
    
      <div className="container p-1 mx-auto space-y4 pl-4">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

		{bloggi.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
          <div className="lg:hidden ">
            <div className="bg-white h-full w-full ">
              <div>
                 <div   className="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div className="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div className="pl-3 w-3/5">
                        <p className="text-xs text-gray-500 uppercase">MUSIC</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                 </div>
            </div>
          </div>
          </div>
          <article className="flex flex-col dark:bg-gray-900 hidden lg:block">
             <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum">
              <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.attributes.blogImg.data.attributes.url} />
             </div>
            <div className="flex flex-col flex-1 p-6">
               <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum"> </div>
               <div rel="noopener noreferrer"   className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire </div>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
		  </Link>
				)}
         
        </div>
      </div>
    </section>
  </div>











<div className="container mx-auto flex flex-wrap py-6">


<section className="w-full md:w-2/3 flex flex-col items-center px-3">

	<article className="flex flex-col shadow my-4">
		
		 <div   className="hover:opacity-75">
			<img alt='technology' src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"/>
		 </div>
		<div className="bg-white flex flex-col justify-start p-6">
			 <div   className="text-blue-700 text-sm font-bold uppercase pb-4">Technology </div>
			 <div   className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet </div>
			<p   className="text-sm pb-3">
				By  <div   className="font-semibold hover:text-gray-800">David Grzyb </div>, Published on April 25th, 2020
			</p>
			 <div   className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.. </div>
			 <div   className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i> </div>
		</div>
	</article>

	<article className="flex flex-col shadow my-4">

		 <div   className="hover:opacity-75">
			<img alt='sports' src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"/>
		 </div>
		<div className="bg-white flex flex-col justify-start p-6">
			 <div   className="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance </div>
			 <div   className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet </div>
			<p   className="text-sm pb-3">
				By  <div   className="font-semibold hover:text-gray-800">David Grzyb </div>, Published on January 12th, 2020
			</p>
			 <div   className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.. </div>
			 <div   className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i> </div>
		</div>
	</article>

	<article className="flex flex-col shadow my-4">

		 <div   className="hover:opacity-75">
			<img alt='sport' src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"/>
		 </div>
		<div className="bg-white flex flex-col justify-start p-6">
			 <div   className="text-blue-700 text-sm font-bold uppercase pb-4">Sports </div>
			 <div   className="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet </div>
			<p   className="text-sm pb-3">
				By  <div   className="font-semibold hover:text-gray-800">David Grzyb </div>, Published on October 22nd, 2019
			</p>
			 <div   className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna.. </div>
			 <div   className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i> </div>
		</div>
	</article>



</section>

<aside className="w-full md:w-1/3 flex flex-col items-center px-3">

	<div className="w-full bg-white shadow flex flex-col my-4 p-6">
		<p className="text-xl font-semibold pb-5">About Us</p>
		<p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
		 <div   className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
			Get to know us
		 </div>
	</div>

	<div className="w-full bg-white shadow flex flex-col my-4 p-6">
		<p className="text-xl font-semibold pb-5">Instagram</p>
		<div className="grid grid-cols-3 gap-3">
			<img className="hover:opacity-75"   alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=1"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=2"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=3"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=4"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=5"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=6"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=7"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=8"/>
			<img className="hover:opacity-75"  alt='blogIcos' src="https://source.unsplash.com/collection/1346951/150x150?sig=9"/>
		</div>
		 <a href="https://www.instagram.com/_thx411" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
			<i className="fab fa-instagram mr-2"></i>@_thx411
		 </a>
	</div>

</aside>

</div>



{/* 
<div className="flex justify-center items-center">
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">


    {firstThree.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
         <div rel="noopener noreferrer"   className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <img src={firstblog.attributes.firstblogImg.data.attributes.url} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">Noster tincidunt reprimique ad pro</h3>
                <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                <p>{firstblog.attributes.firstblogDesc}</p>
            </div>
         </div>
        </Link>
          ) }
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                   
			{firstThreeBlogs.map((blog)=>

                <Link to={`/blog/${blog.id}`}>
			<article className="flex flex-col dark:bg-gray-900">
				 <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500"  src={blog.attributes.blogImg.data.attributes.url} />
				 </div>
				<div className="flex flex-col flex-1 p-6">
					 <div rel="noopener noreferrer"   ariaLabel="Te nulla oportere reprimique his dolorum"> </div>
					 <div rel="noopener noreferrer"   className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire </div>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.attributes.blogTitle}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 4, 2020</span>
						<span>2.4K views</span>
					</div>
				</div>
			</article>
              </Link>

                    ) }


    </div>
    
  </div>
</div>
</div> */}

                

            </>
  )
}

export default Blogs