import React from 'react'
import Slider from 'react-slick';

type Props = {}

const Banner = (props: Props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div className="max-w-7xl mx-auto h-[432px] pt-44 mb-64"><Slider {...settings}>
    <div>
      <img className="h-[432px] w-full" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-2.jpg" alt="" />
    </div>
    <div>
    <img className="h-[432px] w-full" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-5.jpg" alt="" />
    </div>
    <div>
    <img className="h-[432px] w-full" src="http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/slide-1.jpg" alt="" />
    </div>
 
  </Slider></div>
  )
}

export default Banner