import Head from 'next/head'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import { Layout } from 'antd';

const { Header, Content} = Layout;

const Product = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Product</title>
      </Head>

      <Header className="site-layout-background">
        Product
      </Header>

      <Content className="site-layout-background layout-content">
        Product content
      </Content>

    </DefaultLayout>
  )
}

export default Product
