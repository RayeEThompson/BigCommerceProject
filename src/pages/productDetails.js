import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { H0, H1, H4 } from "@bigcommerce/big-design"
import AddToCartButton from "../components/addToCartButton"

const ProductDetailsWrapper = styled.div`
  margin: 1% 18%;
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #eceef5;
  border-radius: 25px;
  font-family: "Epilogue", sans-serif;
  font-size: 100%;
  font-weight: 400;

  .product-price {
    padding: 6.5% 0%;
    font-weight: 800;
    font-size: 160%;
  }

  .product-description-wrapper {
    grid-column: 1/3;
  }

  .buttons {
    a {
      text-decoration: none;
    }
  }

  .img-div {
    img {
      width: 450px;
      object-fit: cover;
      object-position: center center;
      padding-right: 10%;
    }
  }
`

export const ProductDetails = ({ location }) => {
  if (location.state) {
    return (
      <Layout>
        <H0 margin="medium" paddingLeft="xxxLarge">
          Product Details
        </H0>
        <StaticQuery
          query={singleProduct}
          render={data => (
            <ProductDetailsWrapper>
              {console.log(data, location)}
              {console.log(location.state.choice)}
              <div className="img-div">
                {data.allBigCommerceProducts.edges[
                  location.state.choice
                ].node.images.map(({ url_standard, description }, i) => {
                  return <img key={i} src={url_standard} alt={description} />
                })}
              </div>
              <div>
                <H1>
                  {
                    data.allBigCommerceProducts.edges[location.state.choice]
                      .node.name
                  }
                </H1>
                <H4>
                  {(() => {
                    switch (
                      data.allBigCommerceProducts.edges[location.state.choice]
                        .node.brand_id
                    ) {
                      case data.allBigCommerceBrands.edges[0].node
                        .bigcommerce_id:
                        return data.allBigCommerceBrands.edges[0].node.name
                      case data.allBigCommerceBrands.edges[1].node
                        .bigcommerce_id:
                        return data.allBigCommerceBrands.edges[1].node.name
                      case data.allBigCommerceBrands.edges[2].node
                        .bigcommerce_id:
                        return data.allBigCommerceBrands.edges[2].node.name
                      case data.allBigCommerceBrands.edges[3].node
                        .bigcommerce_id:
                        return data.allBigCommerceBrands.edges[3].node.name
                      case data.allBigCommerceBrands.edges[4].node
                        .bigcommerce_id:
                        return data.allBigCommerceBrands.edges[4].node.name
                      default:
                        return data.allBigCommerceBrands.edges[0].node.name
                    }
                  })()}
                </H4>
                <p className="product-price">
                  $
                  {data.allBigCommerceProducts.edges[
                    location.state.choice
                  ].node.price.toFixed(2)}
                </p>
                <div className="buttons">
                  <AddToCartButton>
                    {
                      data.allBigCommerceProducts.edges[location.state.choice]
                        .node.bigcommerce_id
                    }
                  </AddToCartButton>
                </div>
              </div>
              <div className="product-description-wrapper">
                <hr></hr>
                <H4 padding="large">Product Description</H4>
                <p
                  className="product-description"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.allBigCommerceProducts.edges[location.state.choice]
                        .node.description,
                  }}
                ></p>
              </div>
            </ProductDetailsWrapper>
          )}
        />
      </Layout>
    )
  } else {
    return <Layout></Layout>
  }
}

export const singleProduct = graphql`
  query singleProduct {
    allBigCommerceProducts {
      edges {
        node {
          bigcommerce_id
          name
          sku
          price
          brand_id
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
    allBigCommerceBrands {
      edges {
        node {
          name
          bigcommerce_id
        }
      }
    }
  }
`

export default ProductDetails
