import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { H3, Text } from "@bigcommerce/big-design"

const ProductViewWrapper = styled.div`
  max-width: 1000px;
  margin: 1.5% auto;

  .product-view {
    background-color: #313440;
    margin: 2% auto;
    padding: 8%;
    border-radius: 25px;

    a {
      text-decoration: none;
      color: white;
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
              <Link to={`/product-details`} state={{ choice: index }}>
                <div>
                  {node.images.map(({ url_standard, description }, i) => {
                    return <img key={i} src={url_standard} alt={description} />
                  })}
                </div>
                <>
                  <H3 color="white">{node.name}</H3>
                  <Text color="white">{node.sku}</Text>
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
