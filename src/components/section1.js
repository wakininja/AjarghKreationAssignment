import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function section1() {
  return (
    <section className="py-16">
        <div className="Container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">TRENDING</h1>

{/* This is for containing our image and information of blog */}

            {Slide()}

        </div>
    </section>
  )
}

//  because we are going to itrate over array just making function for this

 function Slide(){
  return (
    <div className="grid md:grid-cols-2">
       <div className="image">
            <Link href={"/"}><Image src={"/images/img1.png"} width={600} height={600}/></Link>
       </div>
       <div className="info flex justify-cente flex-col">
        <div className="category">
            <Link className="text-orange-600 hover:text-orange-800" href={"/"}>Ecommerce</Link>
            <Link className="text-gray-800 hover:text-gray-600" href={"/"}> -May,2023</Link>
        </div>
        <div className="title">
            <Link className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600" href={"/"}> Lorem Lorem ipsum dolor sit amet . </Link>
        </div>
        <p className="text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur quaerat deserunt excepturi, obcaecati alias nisi asperiores iusto est similique vel dolorum itaque minus quod veritatis quo aut? Dolorum, nesciunt.
        </p>
        
       <Author/>
       </div>
    </div>
  )
}

