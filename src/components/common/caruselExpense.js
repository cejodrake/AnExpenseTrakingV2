import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';
import useInput from './useInput';

import goydo1 from '../img/goydo1.png'
import goydo2 from '../img/goydo2.png'
import goydo3 from '../img/goydo3.png'







const CaruselExpense = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>

                <img className="d-block w-100" src={goydo1} alt="First slide" />

                <Carousel.Caption>
                    {/* <h1> Santiago Calix </h1>
                    <p>lo mas lindo de papa.</p>*/}
                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={goydo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    { /*  <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={goydo3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/*<h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    
                    </p>*/}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default CaruselExpense;