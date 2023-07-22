import { useState } from "react";
import Product from "./Product";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Men({ data }) {
  const [menproduct, setmenproduct] = useState([
    {
    //   id: "men",
      img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F60%2F2a%2F602a44c930651379edfb0cb30ca9c62d337fbf2d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      name: "Relaxed Fit Cotton cargo joggers",
      price: "$120",
      desc: "This is Joggers",
      category: "men",
      size: "L,M,S",

      brand: "ZARA",
    },
    {
    
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      name: "COOLMAX® Regular Fit T-shirt",
      price: "$320",
      desc: "T shirt",
      category: "men",
      size: "s,L,M",

      brand: "ZARA",
      },
      {
    
        img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa9%2F13%2Fa913e1d6543ef465cd25494722562d9423aed9ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: " Relaxed Fit Oxford shirt",
        price: "$300",
        desc: "shirt",
        category: "men",
        size: "s,L,M",
  
        brand: "ZARA",
      },
    //   {
    
    //     img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F20%2F35%2F20356dd91d87a4a1e9275e15cdff29c8dcf7269b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
    //     name: "Relaxed Fit Hoodie",
    //     price: "$150",
    //     desc: "Hoodie",
    //     category: "men",
    //     size: "s,L,M",
  
    //     brand: "ZARA",
    //   },
      {
    
        img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd2%2F32%2Fd23241daefee8c80f3b93ce796d027f44073075e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: "Slim Jeans",
        price: "$170",
        desc: "Jeans",
        category: "men",
        size: "s,L,M",
  
        brand: "ZARA",
      },
      {
    
        img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: "COOLMAX® Regular Fit T-shirt",
        price: "$320",
        desc: "T shirt",
        category: "men",
        size: "s,L,M",
  
        brand: "ZARA",
      },
      {
    
        img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F3b%2Ffb3b30157a50139a736832cf8f5fbb4948cf4655.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        name: "COOLMAX® Regular Fit T-shirt",
        price: "$320",
        desc: "T shirt",
        category: "men",
        size: "s,L,M",
  
        brand: "ZARA",
      },
  ]);
  console.log(menproduct);
  return (
      <div className="padding-container" id="men">
          
      {menproduct.map((menproduct) => (
        <div className="product-container">
          <Link to="./Men" className="productlink">
            <Card menproduct={menproduct} />
          </Link>
        </div>
      ))}
   `</div>
  );
}
export default Men;
