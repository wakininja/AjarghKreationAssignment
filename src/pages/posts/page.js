import Format from "../../layouts/format";
import Author from "../../components/_child/author";
import Image from  "next/image";

export default function page() {
  return (
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
            <Author/>
        </div>
        <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">
                Lorem ipsum dolor sit amet consectetur?
            </h1>
            <p className="text-gray-500 text-xl text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, consectetur enim quisquam a excepturi modi odit aspernatur repellendus nesciunt cum perferendis eum eos debitis, totam in temporibus ratione veritatis velit? Sit, deserunt. Architecto molestias iure aperiam.
            </p>
            <div className="py-10">
                <Image src={"/images/img1.png"} width={900} height={600}/>
            </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto magni cumque inventore culpa. Nam neque dignissimos velit. Minima explicabo ab nam nesciunt ea culpa accusamus blanditiis ad nemo obcaecati veniam hic maxime, dolore sed.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto magni cumque inventore culpa. Nam neque dignissimos velit. Minima explicabo ab nam nesciunt ea culpa accusamus blanditiis ad nemo obcaecati veniam hic maxime, dolore sed.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto magni cumque inventore culpa. Nam neque dignissimos velit. Minima explicabo ab nam nesciunt ea culpa accusamus blanditiis ad nemo obcaecati veniam hic maxime, dolore sed.</p>
            </div>
        </div>
        </section>

    </Format>
  )
}
