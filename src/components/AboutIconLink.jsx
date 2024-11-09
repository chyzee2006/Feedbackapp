import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#section1',
        }}>
            <FaQuestion size={30} />
        </Link>  
    </div>
  )
}

export default AboutIconLink