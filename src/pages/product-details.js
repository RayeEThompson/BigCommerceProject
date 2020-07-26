import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const ProductDetailsWrapper = styled.div`
  max-width: 1000;
  margin: 0 auto;
`

const ProductDetails = ({ location }) => {
  return (
    <Layout>
      <StaticQuery
        query={singleProduct}
        render={data => (
          <div>
            {console.log(data, location)}
            {data.allBigCommerceProducts.edges[
              `${location.state.choice}`
            ].node.images.map(({ url_standard, description }, i) => {
              return <img key={i} src={url_standard} alt={description} />
            })}
            <h3>
              {
                data.allBigCommerceProducts.edges[`${location.state.choice}`]
                  .node.name
              }
            </h3>
            <p>
              {
                data.allBigCommerceProducts.edges[`${location.state.choice}`]
                  .node.sku
              }
            </p>
            <p>
              $
              {data.allBigCommerceProducts.edges[
                `${location.state.choice}`
              ].node.price.toFixed(2)}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  data.allBigCommerceProducts.edges[`${location.state.choice}`]
                    .node.description,
              }}
            ></p>
          </div>
        )}
      />
    </Layout>
  )
}

export const singleProduct = graphql`
  query singleProduct {
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
          }
        }
      }
    }
  }
`
export default ProductDetails
