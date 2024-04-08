import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const experiences = [
    {
      year: 'SEPT 2023 - PRESENT',
      works: [
        {
          name: 'FRONTEND DEVELOPER',
          company: 'Mida'
        }
      ]
    },
    {
      year: 'MAR 2023 - OCT 2023',
      works: [
        {
          name: 'FRONTEND DEVELOPER',
          company: 'DemoHub Global'
        }
      ]
    },
    {
      year: 'DEC 2021 - DEC 2022',
      works: [
        {
          name: 'FRONTEND DEVELOPER',
          company: 'Seamfix'
        }
      ]
    },
    {
      year: 'JUN 2021 - DEC 2021',
      works: [
        {
          name: 'FRONTEND DEVELOPER INTERN',
          company: 'Seamfix'
        }
      ]
    }
  ];

  const skills = [
    {
      name: 'HTML',
      bgColor: '#edf2f8',
      icon: images.html
    },
    {
      name: 'CSS',
      bgColor: '#edf2f8',
      icon: images.css
    },
    {
      name: 'JavaScript',
      bgColor: '#edf2f8',
      icon: images.javascript
    },
    {
      name: 'Angular',
      bgColor: '#edf2f8',
      icon: images.angular
    },
    {
      name: 'React',
      bgColor: '#edf2f8',
      icon: images.react
    },
    {
      name: 'TypeScript',
      bgColor: '#edf2f8',
      icon: images.typescript
    }
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      {/* <img src={require(‘/images/image-name.png’)} alt="ahhhh" /> */}

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, wIndex) => (
                  <React.Fragment key={wIndex}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
