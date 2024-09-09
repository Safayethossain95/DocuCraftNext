"use client";
import {
  getDocumentsByAuthor,
  getDocumentsByCategory,
  getDocumentsByTags,
} from "@/utils/doc-utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Sidebar({ docs }) {
  const pathname = usePathname();
  const [rootNodes, setRootNodes] = useState([]);
  const [nonrootNodes, setnonRootNodes] = useState({});
  useEffect(() => {
    let matchedDocs = docs;

    if (pathname.includes("/tags")) {
      const tag = pathname.split("/")[2];
      matchedDocs = getDocumentsByTags(docs, tag);
    } else if (pathname.includes("/author")) {
      const author = pathname.split("/")[2];
      matchedDocs = getDocumentsByAuthor(docs, author);
    } else if (pathname.includes("/category")) {
      const category = pathname.split("/")[2];
      matchedDocs = getDocumentsByCategory(docs, category);
    }

    const roots = matchedDocs.filter((doc) => !doc.parent);

    const nonRoots = matchedDocs
      .filter((doc) => doc.parent)
      .reduce((acc, doc) => {
        const key = doc.parent;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(doc);
        return acc;
      }, {});

      const nonRootskeys = Reflect.ownKeys(nonRoots);
      nonRootskeys.forEach(key => {
        const foundInRoots = roots.find((root) => root.id === key)
        if(!foundInRoots){
            const foundInDocs = docs.find((doc)=>doc.id===key)
            roots.push(foundInDocs)
        }
      })
      roots.sort((a,b)=>{
        if(a.order > b.order){
            return 1
        }
      })

    setRootNodes([...roots]);
    setnonRootNodes({ ...nonRoots });
  }, [pathname]);

  return (
    <nav className="lg:block my-10">
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
          <ul role="list" className="border-l border-transparent">
            {rootNodes.map((rootNode) => (
              <li key={rootNode.id} className="relative">
                <Link
                  aria-current="page"
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                  href={`/docs/${rootNode.id}`}
                >
                  <span className="truncate">{rootNode.title}</span>
                </Link>
                {nonrootNodes[rootNode.id] && (
                  <ul role="list" className="border-l border-transparent">
                    {nonrootNodes[rootNode.id].map((subRoot) => (
                      <li key={subRoot.id}>
                        <Link
                          className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          href={`/docs/${rootNode.id}/${subRoot.id}`}
                        >
                          <span className="truncate">{subRoot.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </nav>
  );
}
