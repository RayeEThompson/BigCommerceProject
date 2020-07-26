import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { H3 } from "@bigcommerce/big-design"

const ProductViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  .product-view {
    background-color: #5E637A;
    margin: 2% auto;
    padding: 4% 0%;
    width: 650px;
    height: 525px;
    border-radius: 25px;
    text-align: center;

    img {
        width: 500px;
        height: 350px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 25px;
    }

    a {
      text-decoration: none;
      color: white;
      margin: none;
      cursor: pointer;
    }

    p {
      font-family: "Epilogue", sans-serif;
      font-size: 100%;
      font-weight: 400;
    }
  }
`

const ProductList = () => {
  return (
    <StaticQuery
      query={bcQuery}
      render={data => (
        <ProductViewWrapper>
          {data.allBigCommerceProducts.edges.map(({ node }, index) => (
            <div key={index} className="product-view">
              <Link to={`/productDetails`} state={{ choice: index }}>
                <div>
                  {node.images.map(({ url_standard, description }, i) => {
                    return <img key={i} src={url_standard} alt={description} />
                  })}
                </div>
                <>
                  <H3 color="white">{node.name}</H3>
                  <p color="white">${node.price.toFixed(2)}</p>
                </>
              </Link>
            </div>
          ))}
        </ProductViewWrapper>
      )}
    />
  )
}

export const bcQuery = graphql`
  query bcQuery {
    allBigCommerceProducts {
      edges {
        node {
          bigcommerce_id
          name
          sku
          price
          description
          images {
            url_standard
            url_thumbnail
            url_tiny
            url_zoom
            id
            description
          }
        }
      }
    }
  }
`
export default ProductList
