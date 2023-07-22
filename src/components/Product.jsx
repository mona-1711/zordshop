// import React from "react";
// import Card from "react-bootstrap/Card";
// import "./Product.css";
// import { Link } from "react-router-dom";

// function Product({ product }) {
//   return (
//     <div id="Product" className="producttt" style={{ width: "20rem" }}>
//       <div className="container page-wrapper">
//         <div className="page-inner">
//           <div className="row">
//             <div className="el-wrapper">
//               <div className="box-up">
//                 <img className="img w-100" src={product.img} alt="" />
//                 <div className="img-info">
//                   <div className="info-inner">
//                     <span className="p-name">{product.name}</span>
//                     <span className="p-company">{product.brand}</span>
//                   </div>
//                   <div className="a-size">
//                     Available sizes :{" "}
//                     <span className="size">{product.size}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="box-down">
//                 <div className="h-bg">
//                   <div className="h-bg-inner"></div>
//                 </div>

//                 <a className="cart" href="#">
//                   <span className="price">{product.price}</span>
//                   <span className="add-to-cart"><Link to="./display">
//                     <span className="txt">Check this out</span></Link>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Product;
