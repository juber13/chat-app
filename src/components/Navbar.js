import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user-info'>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg" alt="" />
        <span className='name'>John</span>
        <button className='logout-btn'>Log out</button>
      </div>
    </div>
  )
}

export default Navbar