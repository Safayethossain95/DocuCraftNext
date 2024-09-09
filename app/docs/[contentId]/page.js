import React from 'react'
import ContentDisplay from '@/app/components/ContentDisplay'
const page = ({params:{contentId}}) => {
  return (
    <div>
      <ContentDisplay id={contentId}/>
    </div>
  )
}

export default page
