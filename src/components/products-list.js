import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ProductViewWrapper = styled.div`
  max-width: 1000px;
  margin: 1.5% auto;
  color: white;

  .product-view{
    background-color: #313440;
    margin: 2% auto;
    padding: 2%;
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
              <div>
                {node.images.map(({ url_standard, description }, i) => {
                  return <img key={i} src={url_standard} alt={description} />
                })}
              </div>
              <h3>{node.name}</h3>
              <p>{node.sku}</p>
              <p>${node.price.toFixed(2)}</p>
              <p dangerouslySetInnerHTML={{ __html: node.description }}></p>
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
          id
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
