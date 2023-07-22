// import React from "react";
// import "./ProductDetail.css";

// const ProductDetail = (props) => {
//   return (
//     <div>
//       <title>{props.product.name}</title>
//       <link
//         href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
//         rel="stylesheet"
//       />

//       <div class="wrapper">
//         <div class="product-img">
//           <img src={props.product.img} height="420" width="327" />
//         </div>
//         <div class="product-info">
//           <div class="product-text">
//             <h1>{props.product.name}</h1>
//             <h2>{props.product.desc}</h2>
//             <p>
//               Harvest Vases are a reinterpretation
//               <br /> {" "}
//             </p>
//           </div>
//           <div class="product-price-btn">
//             <p>
//                           <span>{ props.product.price}</span>
//             </p>
//             <button type="button">buy now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = ({ products }) => {
//   const { productId } = useParams();
//   const product = products.find((product) => product.id === productId);

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div>
//       <title>{product.name}</title>
//       <link
//         href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
//         rel="stylesheet"
//       />

//       <div className="wrapper">
//         <div className="product-img">
//           <img src={product.img} height="420" width="327" alt={product.name} />
//         </div>
//         <div className="product-info">
//           <div className="product-text">
//             <h1>{product.name}</h1>
//             <h2>{product.desc}</h2>
//             <p>{product.description}</p>
//           </div>
//           <div className="product-price-btn">
//             <p>
//               <span>{product.price}</span>
//             </p>
//             <button type="button">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;












// import { useParams } from "react-router-dom";
// import React from 'react';
// // import Women from "./Women";
// // import Men from "./Men";


// function ProductDetail(product) {
  
    
//       return (
//         <div>
//           <title>{product.name}</title>
//           <link
//             href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"
//             rel="stylesheet"
//           />
    
//           <div className="wrapper">
//             <div className="product-img">
//               <img src={product.img} height="420" width="327" alt={product.name} />
//             </div>
//             <div className="product-info">
//               <div className="product-text">
//                 <h1>{product.name}</h1>
//                 <h2>{product.desc}</h2>
//                 <p>{product.description}</p>
//               </div>
//               <div className="product-price-btn">
//                 <p>
//                   <span>{product.price}</span>
//                 </p>
//                 <button type="button">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//   // Rest of your component codez
// }


// export default ProductDetail