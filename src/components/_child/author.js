import Link from "next/link";
import Image from "next/image";

export default function author() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/author/auth1.jpg"}width={20}height={20}className="rounded-full"/>
        <div className="flex flex-col justify-center px-4">
            <Link className="text-md font-bold text-gray-800 hover:text-gray-600" href={'/'}>Wakil Thakur</Link>
        </div>
    </div>
  )
}
