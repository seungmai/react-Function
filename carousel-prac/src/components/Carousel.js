import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Carousel = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Wrap>
        <Text>1</Text>
      </Wrap>
      <WrapTwo>
        <Text>2</Text>
      </WrapTwo>
      <Wrap>
        <Text>3</Text>
      </Wrap>
      <WrapTwo>
        <Text>4</Text>
      </WrapTwo>
      <Wrap>
        <Text>5</Text>
      </Wrap>
      <WrapTwo>
        <Text>6</Text>
      </WrapTwo>
    </Slider>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 500px;
  background-color: orange;
`;

const WrapTwo = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
`;

const Text = styled.h1`
  text-align: center;
  color: white;
`;

export default Carousel;
