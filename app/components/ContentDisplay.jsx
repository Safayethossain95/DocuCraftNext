import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);
  return (
    <article className="prose dart:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>
          Published on {documentContent.date} by{" "}
          <Link href={`/author/${documentContent.author}`}>
            {documentContent.author}
          </Link>
          {" "} under the {" "}
          <Link href={`/categoryies/${documentContent.category}`}>
            {documentContent.category} {" "} 
          </Link>Category.
        </span>
      </div>
      <div>
        {
            documentContent.tags && documentContent.tags.map(tag => (
                <Tag tag={tag} key={tag}/>
            ))
        }
      </div>
      <div className="lead" dangerouslySetInnerHTML={{__html: documentContent.contentHTML}}>
       
      </div>
    </article>
  );
};

export default ContentDisplay;
