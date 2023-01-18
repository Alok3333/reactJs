import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../pages/MainContainer/cardbar.css';
import motoImg from '../../asserts/Images/moto g31.webp';

const CardMainBar = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.products);
      });
  }, []);

  return (
    <>
      <Container className="mainContainer">
        <Row>
          <Col sm={5} className="tabCol">
            <div className="colTitleName">
              <img src={motoImg} alt="Motorola"></img>
            </div>
            <Row>
              <Col sm>
                <div className="d-grid gap-2">
                  <Button className="btn btn-warning py-3" size="lg">
                    ADD TO CART
                  </Button>
                </div>
              </Col>
              <Col sm>
                <div className="d-grid gap-2">
                  <Button className="btn btn-danger py-3" size="lg">
                    BUY NOW
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          {products.map((product) => {
              return (
          <Col sm={7} className="tabCol">
            <div className="colTitleName-2">
              <div>
                <h1>{product.title}</h1>
                <span>MOTO G31+ (Baby Blue, 64 GB) (4 GB RAM)</span>
              </div>
              <div className="reviews">
                <div className="reviews-2">
                  <span className="ratings"> 4.2 </span>
                  <span className="total"> 332 Ratings & 21 Reviews</span>
                </div>
              </div>
              <div className="offer">
                <span>Extra ₹2500 off</span>
              </div>
              <div>
                <span className="price">₹11,499</span>
                <span className="priceOff">₹9,999</span>
                <span className="pricePercent">25% off</span>
              </div>
            </div>
            <hr style={{ color: 'silver' }} />
            <div className="offerDetail">
              <div className="offerDetailTitle">Available offers</div>
              <div className="offerDetail-2">
                <ul>
                  <li className="TermCon">
                    <b>Bank Offer</b> 10%instant discount on Federal Bank
                    Credit/Debit Cards, up to ₹1500 on orders of ₹5,000 and
                    above
                    <span className="TermCon-2">T&C</span>
                  </li>
                  <li className="TermCon">
                    <b>Bank Offer</b> 10%instant discount on Punjab National
                    Bank Credit Card, up to ₹1250, on orders of ₹5,000 and above
                    <span className="TermCon-2">T&C</span>
                  </li>
                  <li className="TermCon">
                    <b>Bank Offer</b> 5%Cashback on Flipkart Axis Bank Card
                    <span className="TermCon-2">T&C</span>
                  </li>
                  <li className="TermCon">
                    <b>Special Price</b> Get extra ₹2500 off (price inclusive of
                    cashback/coupon)
                    <span className="TermCon-2">T&C</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          );
        })}
        </Row>
      </Container>
    </>
  );
};

export default CardMainBar;
