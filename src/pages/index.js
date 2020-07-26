import React from "react"
import Layout from "../components/layout"
import ProductList from "../components/products-list"
import { Panel, Box } from "@bigcommerce/big-design"

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Panel header="Available Products">
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
