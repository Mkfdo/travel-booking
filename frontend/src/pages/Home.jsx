import React from 'react'
import '../styles/home.css';
import { Container , Row , Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero_content'>

                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt='' />
                </div>

                <h1>
                  Travelling opens the door to creating{" "}
                  <span className='highlight'> memories</span>
                </h1>

                <p>
                  Dreaming of a fabulous vacation? Close your eyes and imagine being in a place you’ve always wanted to visit. What if you could make that dream a reality?
                </p>

              </div>
            </Col>

            <Col lg='2'>
              <div className='hero_img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero_img-box mt-4'>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>

            <Col lg='2'>
              <div className='hero_img-box mt-5'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>

            <SearchBar />
            
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services_subtitle'>What we serve</h5>
              <h2 className='services_title'>We offer our best services</h2>
            </Col>

            <ServiceList />
            
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="explore"><b>Explore</b></h5>
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>

            <FeaturedTourList />

          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" >
              <div className="experience_content">
                <h5 className='experience'><b>Experience</b></h5>
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>Get ready for the adventure of a lifetime <br /> As we take you deep into your dream trip.</p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h5 className='gallery'><b>Gallery</b></h5>
              <h2 className='gallery_title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h5 className='fans_love'><b>Fans Love</b></h5>
              <h2 className='testimonial_title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />

    </>
  );
};

export default Home