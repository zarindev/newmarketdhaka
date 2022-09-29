import React from 'react';
import './AboutUsPage.css';
import TopNav from '../../components/Navbar/TopNav';
import BottomNav from '../../components/Navbar/BottomNav';
import Footer from '../../components/Footer/Footer';
import { useDocTitle } from '../../hooks/useDocTitle';
import thirdImage from '../../images/about-content-one.png';
import fourthImage from '../../images/about-content-two.png';

const aboutData = [
  {
    id: 1,
    title: 'Who we are?',
    desc: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.',
    image: null,
  },
  {
    id: 2,
    title: 'Inspired Magazine Design',
    desc: 'Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.',
    image: null,
  },
  {
    id: 3,
    title: 'Catherine Bergego Schaal',
    desc: 'In this subject we have, of course, the difficulty that the quantum mechanical behavior of things is quite strange. Nobody has an everyday experience to lean on to get a rough, intuitive idea of what will happen. So there are two ways of presenting the subject: We could either describe what can happen in a rather rough physical way, telling you more or less what happens without giving the precise laws of everything; or we could, on the other hand, give the precise laws in their abstract form. But, then because of the abstractions, you wouldn’t know what they were all about, physically. The latter method is unsatisfactory because it is completely abstract, and the first way leaves an uncomfortable feeling because one doesn’t know exactly what is true and what is false. We are not sure how to overcome this difficulty. You will notice, in fact, that Chapters 1 and 2 showed this problem. The first chapter was relatively precise; but the second chapter was a rough description of the characteristics of different phenomena. Here, we will try to find a happy medium between the two extremes.',
    image: thirdImage,
  },
  {
    id: 4,
    title: 'Entry Level Computer Engineer',
    desc: 'In this subject we have, of course, the difficulty that the quantum mechanical behavior of things is quite strange. Nobody has an everyday experience to lean on to get a rough, intuitive idea of what will happen. So there are two ways of presenting the subject: We could either describe what can happen in a rather rough physical way, telling you more or less what happens without giving the precise laws of everything; or we could, on the other hand, give the precise laws in their abstract form. But, then because of the abstractions, you wouldn’t know what they were all about, physically. The latter method is unsatisfactory because it is completely abstract, and the first way leaves an uncomfortable feeling because one doesn’t know exactly what is true and what is false. We are not sure how to overcome this difficulty. You will notice, in fact, that Chapters 1 and 2 showed this problem. The first chapter was relatively precise; but the second chapter was a rough description of the characteristics of different phenomena. Here, we will try to find a happy medium between the two extremes.',
    image: fourthImage,
  },
  {
    id: 5,
    title:
      'The Calm meditation app is getting its own celebrity-filled HBO Max show',
    desc: 'Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.',
    image: null,
  },
];

const AboutUsPage = () => {
  useDocTitle();

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="about">
        <div className="about-banner">
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="about-content">
          {aboutData.map((item) => {
            return (
              <div className="about-item" key={item.id}>
                <h4 className="about-item-title">{item.title}</h4>
                <p className="about-item-desc">{item.desc}</p>
                <div className="about-item-image-ctn">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="about-item-image"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
