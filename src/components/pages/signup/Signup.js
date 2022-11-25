import React from 'react'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <div style={{ padding: "10px", textAlign: "cente" }}>
                <div style={{display:"flex",gap:"10px"}}>
                    <Input size="large" placeholder="First Name" prefix={<UserOutlined />} style={{ marginBottom: "5px" }} />
                    <Input size="large" placeholder="Last Name" prefix={<UserOutlined />} style={{ marginBottom: "5px" }} />
                </div>
                <Input size="large" placeholder="Mobile Number" prefix={<PhoneOutlined />} style={{ marginBottom: "5px" }} />
                <Input size="large" placeholder="Email" prefix={<MailOutlined />} style={{ marginBottom: "5px" }} />
                <Input size="large" placeholder="Password" prefix={<LockOutlined />} style={{ marginBottom: "5px" }} />
                <Button type="primary" style={{ marginTop: "10px" }}>Sign Up</Button>
            </div>
        </div>
    )
}