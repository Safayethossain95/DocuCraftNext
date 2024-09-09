import React from 'react'
import ContentDisplay from '@/app/components/ContentDisplay';
import { getDocuments } from '@/lib/doc';
import { getDocumentsByTags } from '@/utils/doc-utils';

const TagsPage = ({params:{name}}) => {
  const docs = getDocuments()
  const matchedDocuments = getDocumentsByTags(docs,name)
  return (
    <div>
        <ContentDisplay id={matchedDocuments[0].id}/>
    </div>
  )
}

export default TagsPage