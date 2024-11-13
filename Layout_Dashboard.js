

import {Layout, theme } from 'antd';
import ChartShow from './Graph';
import './layout.css'
import InputApi from './Input';


const { Header ,Content } = Layout;


const DashboardLayout = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Header
           style={{
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#fff7f7', // เปลี่ยนสีพื้นหลังตามที่ต้องการ
            fontSize: 30,
            fontWeight: 'bold',
            color: '#3aa9b0',
            borderBottom: '2px solid #ddd', // เพิ่มเส้นกั้นระหว่าง Header กับ Content
            border: '2px solid #ddd', // เส้นขอบรอบ Header
            borderRadius: '8px', // 
        }}
        >
          <div style={{ flex: 1, textAlign: 'center' }}>DASHBOARD</div>
          
        </Header>
        <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <InputApi /> {/* วาง InputAPI component ไว้ด้านบนของกราฟ */}
                <ChartShow />
            </div>
        </Content>
       </Layout>
    </Layout>
  );
};
export default DashboardLayout;