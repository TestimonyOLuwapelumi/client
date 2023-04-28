import React from 'react'
import { Link } from 'react-router-dom'


const Blogj = ({allDatab}) => {
    console.log(allDatab);
  return (
    <>
    
    <section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {allDatab.map((blog)=>
        <Link to={`/blog/${blog.id}`}>
    <div className="lg:hidden border-b-2">
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
                        <p className="text-xs text-gray-500 uppercase">#blogs</p>
                        <h3 className="text-md font-semibold leading-tight mb-3">{blog.attributes.blogTitle}</h3>
                        <div className="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{blog.attributes.blogDesc}</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>
			<div rel="noopener noreferrer"   className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-44   " alt='blogImg' src={blog.attributes.blogImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#blog</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{blog.attributes.blogTitle}</h3>
					<span className="text-xs ">{blog.attributes.blogDesc}</span>
					<p></p>
				</div>
        <span className="spann topp"></span>
      <span className="spann rightt"></span>
      <span className="spann bottomm"></span>
      <span className="spann leftt"></span>
			</div> 
       </Link>
       )}
    
		
		</div>
		
	</div>
</section>
    
    </>
  )
}

export default Blogj