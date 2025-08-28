import React from 'react'

const event = () => {
    const handleClick = () => {
        alert("You click the button");
    }
  return (
    <div>
        <h2>We are lerning Event</h2>
        <button onMouseOver={handleClick}>Click the button</button>

    </div>
  )
}

export default event