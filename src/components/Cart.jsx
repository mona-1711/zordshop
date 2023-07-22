// import React from "react";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";



const Cart = ({data}) => {
    const { id } = useParams();
  console.log(id);

  const [card, setCard] = useState({});

    useEffect(() => {
        const d = data?.filter((card) => card.id === parseInt(id));
        console.log(d);
        setCard(d);
    },[])
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img
        src={card && card[0]?.img}
        class="card-img-top"
        alt={card && card[0]?.title}
      />
      <div class="card-body">
        <h5 class="card-title">{card && card[0]?.title}</h5>
        <p class="card-text">
        <p>{card && card[0]?.brand}</p>

        </p>
        <a href="#" class="btn btn-primary">
          Proceed to check out
        </a>
      </div>
    </div>
  );
};

export default Cart;
