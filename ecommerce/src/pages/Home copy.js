import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import home1 from "./Pictures/hOME1.png" ;
import home2 from "./Pictures/hOME2.png";
import home4 from "./Pictures/hOME4.png";
import home5 from "./Pictures/hOME5.png";
import home6 from "./Pictures/hOME6.png";
import one from "./Pictures/1.jpg";
import two from "./Pictures/2.jpg";
import three from "./Pictures/3.jpg";
import six from "./Pictures/6.jpg";
import seven from "./Pictures/28.jpg";
import eight from "./Pictures/25.jpg";
import nine from "./Pictures/27.jpg";
import ten from "./Pictures/29.jpg";

import "./Home.css"
const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={2}>
          <h1>
            World Best Online <br /> Shopping
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency. <br />
            Consistent hard work gains success. Greatness will come.
          </p>
          <Button href="Catagories.html" variant="primary">
            Explore Now &#8594;
          </Button>
        </Col>
        <Col md={8} className='home-4'>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={home1}alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home5} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={home6} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <h2 className="title mt-5">
        <a name="wsection"></a>Featured <font color="blue">Products</font>
      </h2>
      <center>Summer Collection New Modern Design</center>
      <Row className="mt-3">
      {[
          { title: "Women's Clothing", img: one, desc: 'Kurtis Frock', price: 'LKR.5,000/=', link: 'Details.html' },
          { title: 'Cosmetics', img: two, desc: 'Cosmetics', price: 'LKR.3500/=', link: 'Details.html' },
          { title: "Women's Watches", img: three, desc: 'Quartz', price: 'LKR.2000/=', link: 'Details.html' },
          { title: 'Slippers', img: six, desc: 'Sandals', price: 'LKR.1750/=', link: 'Details.html' },
        ].map((product, idx) => (
          <Col md={3} key={idx} className="mb-4">
            <div className="list">
              <h4>
                <a name={`w${idx + 1}`}></a>{product.title}
              </h4>
              <img src={product.img} className="offer-img" alt={product.desc} />
              <br />
              {product.desc} <br />
              {product.price}
              <br />
              <Button href={product.link} variant="primary">
                Buy Now &#8594;
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <h2 className="title mt-5">
        <a name="wsection"></a>Latest <font color="blue">Products</font>
      </h2>
      <Row className="mt-3">
        {[
          { title: 'Snowglobe', img:seven, desc: 'Purple Snowglobe', price: 'LKR.5,000/=', link: 'Details.html' },
          { title: 'Cards', img: eight, desc: 'Cards', price: 'LKR.3500/=', link: 'Details.html' },
          { title: 'Gift Vouchers', img: nine, desc: 'Quartz', price: 'LKR.2000/=', link: 'Details.html' },
          { title: 'Teddy Bears', img: ten, desc: 'Sandals', price: 'LKR.1750/=', link: 'Details.html' },
        ].map((product, idx) => (
          <Col md={3} key={idx} className="mb-4">
            <div className="list">
              <h4>
                <a name={`w${idx + 1}`}></a>{product.title}
              </h4>
              <img src={product.img} className="offer-img" alt={product.desc} />
              <br />
              {product.desc} <br />
              {product.price}
              <br />
              <Button href={product.link} variant="primary">
                Buy Now &#8594;
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <div className="test mt-5">
        <h1 className="title">
          <a name="wsection"></a>Some thing you <font color="Blue">can</font> do here
        </h1>
        <Row className="mt-3">
          {[
            { title: 'Your Orders', desc: 'Track packages Edit or cancel orders' },
            { title: 'Returns and Refunds', desc: 'Returns or exchange items print return mailing labels' },
            { title: 'Get Product Help', desc: 'Troubleshoot product setup and usage issues' },
            { title: 'Payments and gift cards', desc: 'Add or edit payment methods view reload gift card balance' },
          ].map((service, idx) => (
            <Col md={3} key={idx} className="mb-4">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          {new Array(4).fill({ title: 'Safe Online Shopping', desc: 'Learn how to protect your account Report something suspicious' }).map(
            (service, idx) => (
              <Col md={3} key={idx} className="mb-4">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </Col>
            )
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
