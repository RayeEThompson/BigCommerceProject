import React from "react"
import Layout from "../components/layout"
import ProductList from "../components/productsList"
import { Panel, Box } from "@bigcommerce/big-design"

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Panel header="Available Products - Click to See Details for an Item or Add to Cart">
          <Box
            backgroundColor="secondary20"
            border="box"
            borderRadius="normal"
            padding="medium"
          >
            <ProductList />
          </Box>
        </Panel>
      </>
    </Layout>
  )
}

export default IndexPage
