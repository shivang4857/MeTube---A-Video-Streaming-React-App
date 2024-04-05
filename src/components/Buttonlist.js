import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button names= "trending" />
      <Button names = "games"/>
      <Button names = "movies" />
      <Button names = "comedy"/>
      <Button names = "tech"/>
      <Button names = "news"/>
      <Button names = "motivation"/>
      <Button names = "sports"/>
      <Button names = "new to me"/>
      <Button names = "travel"/>
      <Button names = "old songs"/>
      <Button names = "vlogs"/>
      

    </div>
  )
}

export default Buttonlist
