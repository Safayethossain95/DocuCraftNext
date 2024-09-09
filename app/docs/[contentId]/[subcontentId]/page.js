import ContentDisplay from '@/app/components/ContentDisplay'
import React from 'react'

const page = ({params:{subcontentId}}) => {
  return (
    <div>
       <ContentDisplay id={subcontentId}/>
    </div>
  )
}

export default page
