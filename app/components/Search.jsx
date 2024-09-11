"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search({ docs }) {
  const [keyword, setkeyword] = useState("");
  const [result, setresult] = useState([]);
  const handlesearch = (e) => {
    setkeyword(e.target.value);

    const found = docs.filter((doc) =>
      doc.title.toLowerCase().includes(e.target.value)
    );
    setresult(found);
  };
  const router = useRouter();
  const handleredirect=(myid)=>{
    setresult([]);
    setkeyword("")
    router.push(`/docs/${myid}`)
  }
  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto w- relative">
        <div className="flex items-center">
          <Image
            src="/search.svg"
            alt="Search"
            className="h-5 w-5"
            width={50}
            height={50}
          />
          <input
            value={keyword}
            onChange={(e) => handlesearch(e)}
            className="p-2 w-full outline-0"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="absolute w-full top-[50px] bg-white ">
          {keyword && keyword.trim().length > 0
            ? result.map((item, key) => {
                return (
                  <>
                    <p className="my-2 cursor-pointer hover:text-blue-600" onClick={()=>handleredirect(item.id)}>{item.title}</p>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
