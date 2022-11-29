import React, { useState } from 'react'
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfpass, setCnfpass] = useState("");
    const history = useNavigate()
    

    const handleSignup = () => {
        console.log(history)
      
        if (fname === "") {
            alert("Please Enter First Name")
        } else if (lname === "") {
            alert("Please Enter LastName")
        } else if (email === "") {
            alert("Please enter Email ID")
        } else if (password === "") {
            alert("Please enter Password")
        } else if (cnfpass === "") {
            alert("Please confirm Password")
        }else if(password !== cnfpass){
            alert("password doesnt match")
        }else{
            enterSignup()
        }
    }
    const enterSignup = async () =>{
        const url = "https://hbauth.herokuapp.com/users";
        const userName = fname + " " + lname
        const data = { 
            name : userName ,
            email : email,
            password : password,
            confirmPassword : cnfpass
         }
        try {
          await axios.post(url, data).then((res) => {
            if (res.data.token) {

              alert('successfully Signup')
              history('/login')
              
            }
          })
        }
        catch (error) {
            console.log("Ërror")
        //   setError('Invalid Login');
          return;
        };
    }
        return (
            <div>
                <h1>Signup</h1>
                <div style={{ padding: "10px", textAlign: "center" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Input size="large" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} prefix={<UserOutlined />} style={{ marginBottom: "5px" }} />
                        <Input size="large" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} prefix={<UserOutlined />} style={{ marginBottom: "5px" }} />
                    </div>
                    <Input size="large" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} prefix={<MailOutlined />} style={{ marginBottom: "5px" }} />
                    <Input size="large" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} prefix={<LockOutlined />} style={{ marginBottom: "5px" }} />
                    <Input size="large" placeholder="Confirm Password" value={cnfpass} onChange={(e) => setCnfpass(e.target.value)} prefix={<LockOutlined />} style={{ marginBottom: "5px" }} />
                    <Button type="primary" style={{ marginTop: "10px" }} onClick={handleSignup}>Sign Up</Button>
                </div>
            </div>
        )
    }