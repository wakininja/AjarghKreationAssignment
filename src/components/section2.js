import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest post</h1>

      {/* Grid column */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* This will show my all list of blogs */}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={"/images/img1.png"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link className="text-orange-600 hover:text-orange-800" href={"/"}>
            Ecommerce
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
            {" "}
            Lorem Lorem ipsum dolor sit amet .{" "}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          consequuntur quaerat deserunt excepturi, obcaecati alias nisi
          asperiores iusto est similique vel dolorum itaque minus quod veritatis
          quo aut? Dolorum, nesciunt.
        </p>
        <Author />
      </div>
    </div>
  );
}
