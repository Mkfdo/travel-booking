import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>This  is easy to navigate and made it so easy to compare rates and make the best selection for my trip from finding the best places. Absolutely great features.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h5 className='mb-0 mt-3'>John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Reliable and easy booking.... Easy to use platform with all available information. Affordable prices to suit all budgets. I've always had great service from this website, and have recommended you to other travellers.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h5 className='mb-0 mt-3'>Lia Franklin</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>The site is very easy to navigate. The photos are generally really reflective of the property. The guest reviews are accurate. The filters are easy to use and relevant. Reservations are straight forward.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                <div>
                    <h5 className='mb-0 mt-3'>John Lione</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

    </Slider>
  )
}

export default Testimonials