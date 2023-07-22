import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../components/FullCard.css";

const FullCard = ({ data }) => {
  const { id } = useParams();
  console.log(id);

  const [card, setCard] = useState({});

  useEffect(() => {
    const d = data?.filter((card) => card.id === parseInt(id));
    console.log(d);
    setCard(d);
  }, []);

  return (
    <div className="">
      {data?.map((card, index) => (
        <section className="full">
          <div className="container ">
            <div className="fullcard">
              {/* <h1>{card && card[0]?.title}</h1>
            <p>{card && card[0]?.description}</p> */}
              <title>{card && card[0]?.title}</title>
              <link
                href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
                rel="stylesheet"
              />

              <div className="wrapper">
                <div className="product-img">
                  <img
                    src={card && card[0]?.img}
                    height="420"
                    width="327"
                    alt={card && card[0]?.title}
                  />
                </div>
                <div className="product-info">
                  <div className="product-text">
                    <h1>{card && card[0]?.title}</h1>
                    <p>{card && card[0]?.description}</p>
                    <p>{card && card[0]?.brand}</p>

                    <p>
                      <label for="size">Choose a size: </label>

                      <select id="cars">
                        <option value="sizem">M</option>
                        <option value="sizel">L</option>
                        <option value="sizeXL">XL</option>
                        <option value="sizeS">S</option>
                      </select>
                    </p>
                  </div>
                  <div class="product-price-btn">
                    <p>
                      <span>{card && card[0]?.price}</span>$
                    </p>
                    <Link to={`/carts/${card.id}`}>
                      <button type="button">buy now</button><br /></Link>
                    {/* <a href="" className="addtocart">Add to cart</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>))}
    </div>
  );
};

export default FullCard;
