import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  const { data, isLoading, isError} = fetcher('api/postsid')
 
  if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest post</h1>

      {/* Grid column */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data.map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        </div>
    </section>
  );
}

function Post({data}) {
  const {id,category,title,img,summary,author} = data;
  return (
    <div className="item">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={img ||"/"}
            className="rounded"
       width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"/"}>
            {category || "unknown"}
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href={"/"}>
            {" "}
            -May,2023
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
            href={"/"}
          >
            {title||"Unknown"}
            Lorem Lorem ipsum dolor sit amet .{" "}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {summary||"Unknown"}
        </p>
        {author?<Author></Author>:<></>}
      </div>
    </div>
  );
}
