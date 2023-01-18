import React from 'react'
import Flower1 from '../../asserts/Images/flower.jpg';
import Flower2 from '../../asserts/Images/flower2.jpg';
import Flower3 from '../../asserts/Images/flower3.jpg';

const BlogListImg = () => {
  return (
    <div>
        <h2>BlogListImg</h2>
        <img src={Flower1} alt='Photos' style={{width: '400px', height: '400px', margin: '0px 10px'}}/>
        <img src={Flower2} alt='Photos' style={{width: '400px', height: '400px', margin: '0px 10px'}}/>
        <img src={Flower3} alt='Photos' style={{width: '400px', height: '400px', margin: '0px 10px'}}/>
    </div>
  )
}

export default BlogListImg