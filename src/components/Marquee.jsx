import React from 'react'

const Marquee = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
        <div className="flex whitespace-nowrap gap-4 md:gap-10 lg:gap-20 animated ">
            <h1 className="marquee-text">CALL OF DUTY</h1>
            <h1 className="marquee-text">CALL OF DUTY</h1>
            <h1 className="marquee-text">CALL OF DUTY</h1>
            <h1 className="marquee-text">CALL OF DUTY</h1>
            <h1 className="marquee-text">CALL OF DUTY</h1>
            <h1 className="marquee-text">CALL OF DUTY</h1>
        </div>
    </div>
  )
}

export default Marquee