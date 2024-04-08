import { React, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);
  return (
    <>
      <h2 className='head-text'> I know that <span>Good Dev</span> <br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profiles-item'
            key={about.title + index}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title}/> */}
            {/* <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2> */}
            {/* <p className='p-text' style={{marginTop: 25, fontSize: '1 rem'}}>{about.description}</p> */}
            <p className='p-text' style={{ marginTop: 25, fontSize: '1rem' }}>Hi! I'm Samuel Olofintoye, a frontend developer with over 3 years of professional experience. 
            I am a dedicated and highly skilled developer known for delivering exceptional web applications and websites. My expertise lies in crafting engaging, responsive, 
            and accessible user interfaces using cutting-edge frontend technologies such as React and Angular.  </p>

            <p className='p-text' style={{ marginTop: 25, fontSize: '1rem' }}>Throughout my career, I have demonstrated a strong track record of translating design concepts into pixel-perfect, interactive interfaces that elevate user 
              experiences. I thrive in collaborative environments and have successfully collaborated with cross-functional teams, including designers and backend developers, 
              to ensure the seamless integration and delivery of projects.  </p>

            <p className='p-text' style={{ marginTop: 25, fontSize: '1rem' }}>Driven by a passion for innovation and a commitment to excellence, I continuously seek opportunities to expand my skill set and stay updated with the latest 
              trends and best practices in frontend development. My goal is to leverage my expertise and creativity to contribute to the success of impactful projects and 
              drive positive outcomes for clients and users alike.</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);