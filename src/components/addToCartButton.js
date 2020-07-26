import React from "react"
import { Button, padding } from "@bigcommerce/big-design"


const AddToCartButton = ({ children }) => {
  return (
    <div>
      {console.log(children)}
      <a
        href={`https://rachaels-store.mybigcommerce.com/cart.php?action=add&product_id=${children}`}
      >
        <Button padding="xxxLarge">Add to Cart</Button>
      </a>
    </div>
  )
}

export default AddToCartButton
