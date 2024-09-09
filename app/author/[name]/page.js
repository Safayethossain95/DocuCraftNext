import React from 'react'
import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByAuthor } from '@/utils/doc-utils';
const AuthorPage = ({params:{name}}) => {
  const docs = getDocuments()
  const matchedDocuments = getDocumentsByAuthor(docs,name)
  let temp = matchedDocuments[0].id
  return (
    <div>
        <ContentDisplay id={temp}/>
    </div>
  )
}

export default AuthorPage