import React from "react";
import styled from "styled-components";
import tour1 from "../assets/easy.gif";
import tour2 from "../assets/stripe.gif";
import tour3 from "../assets/lang.gif";

import ellipse from "../assets/ellipse.png";

export default function Tours() {
  const data = [
    {
      image: tour1,
      title: "Easy To Use",
    },
    {
      image: tour2,
      title: "Secure payment gateway ",

    },
    {
      image: tour3,
      title: "Multilingual Support",

    },
  ];
  return (
    <Section id="tour">
      <h2>Why Us ?</h2>
      <img src={ellipse} alt="ellipse" className="ellipse" />
      <div className="tours">
        {data.map(({ image, title, price, reviews }, index) => {
          return (
            <div className="tour" key={title}>
              <div className="image">
                <img src={image} alt="tour" />
                {index === 1 && (
                  <div className="vectors">
                    {/* <img src={vector1} alt="vector" className="vector1" />
                    <img src={vector2} alt="vector" className="vector2" /> */}
                  </div>
                )}
              </div>
              <div className="info">
                <div className="details">
                  <h4>{title}</h4>
                  <div className="price-details">
                    <span className="price"></span>
                    <div className="reviews">
                      <span className="review"></span>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 15rem;
  margin-bottom: 5rem;
  position: relative;
  .ellipse {
    position: absolute;
    right: -5rem;
    top: -20rem;
    height: 30rem;
  }
  h2 {
    text-align: center;
    transform: translateY(-150px);
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  .tours {
    display: flex;
    gap: 1rem;
    justify-content: center;
    .tour {
      position: relative;
      &:nth-of-type(2) {
        transform: translateY(-150px);
      }
      .image {
        img {
          height: 25rem;
        }
        .vectors {
          .vector1 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            left: -9rem;
          }
          .vector2 {
            position: absolute;
            height: 8rem;
            top: 0rem;
            right: -8rem;
          }
        }
      }
      .info {
        position: absolute;
        bottom: -30px;
        right: 0;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        button {
          padding: 0.5rem 0.7rem;
          background-color: var(--primary-color);
          border: none;
          font-size: 1.1rem;
          color: white;
          cursor: pointer;
        }
        .details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          .price-details {
            display: flex;
            gap: 1rem;
            .price {
              color: var(--primary-color);
              font-weight: bolder;
            }
            .reviews {
              display: flex;
              gap: 0.5rem;
              .stars {
                svg {
                  color: #ffc01e;
                }
              }
              .review {
                color: var(--secondary-text);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 2rem;
    .ellipse {
      display: none;
    }
    h2 {
      transform: translateY(0px);
      font-size: 2rem;
    }
    .tours {
      flex-direction: column;
      gap: 5rem;
      .tour {
        &:nth-of-type(2) {
          transform: translateY(0);
        }
        button {
          display: none !important;
        }
        .image {
          img {
            max-inline-size: 100%;
            block-size: auto;
          }
          .vectors {
            display: none;
          }
        }
      }
    }
  }
`;
