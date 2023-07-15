import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1) {
      return 0;
    }
    if(number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const prevPerson = () => {
    setIndex((index) => {
      let nextIndex = index - 1;
      return checkNumber(nextIndex);
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return checkNumber(nextIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if(randomNumber === index) {
      randomNumber = index + 1; 
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
      <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
      <div>
        <button className='random-btn' onClick={randomPerson}>Surprise me</button>
      </div>
    </article>
  );
};

export default Review;
