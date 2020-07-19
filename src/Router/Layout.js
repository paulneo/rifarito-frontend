import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function App({ children }) {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {/* <Menu.Item key="1">
            <Link to='/stepTwo'>Inicio</Link>
          </Menu.Item> */}
          <Menu.Item key="2">
            <Link to='/'>Comprar</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/registerTickets'>Registrar números</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '5px 50px', marginTop: 84 }}>
        { children }
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
}

export default App;
