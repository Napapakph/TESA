import React from 'react';
import { Input, Space, message } from 'antd';
import axios from 'axios';

const { Search } = Input;

const InputApi = () => {
    // ฟังก์ชันสำหรับการค้นหาและส่งข้อมูลไปยัง API
    const onSearch = async (value) => {
        try {
            const response = await axios.post('http://<ip_address>:<port>/api/data', {
                query: value, // ส่งข้อมูลที่กรอกจาก input
            });

            // ตรวจสอบสถานะการตอบกลับ
            if (response.status === 200) {
                message.success('Data sent successfully!');
            } else {
                message.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error sending data:', error);
            message.error('Error sending data');
        }
    };

    return (
        <div className='inputApi' style={{ width: '100%', height: 100, marginBottom: 20, backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Search
                    placeholder="Input search text"
                    allowClear
                    enterButton="Search API"
                    size="large"
                    onSearch={onSearch}
                    style={{ width: '50%' }}
                />
            </Space>
        </div>
    );
};

export default InputApi;
