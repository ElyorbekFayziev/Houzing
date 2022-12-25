import { Container, Wrap } from "./style"
import {Input} from '../../components/Generic/Input'
import {Button} from '../../components/Generic/Button'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { message } from "antd";
const Login = ()=>{
        const [body, setBody] = useState({});
        const navigate = useNavigate();
        const onChange = ({ target: { value, name } }) => {
          setBody({...body,[name]: value,});
        };
        const onSubmit = async () => {
          fetch(`https://houzing-app.herokuapp.com/api/public/auth/login`,{
            method:"POST",
            body:JSON.stringify(body),
            headers:{"Content-Type": "application/json"}
          }).then((res)=>res.json())
          .then((res)=>{
            if (res?.authenticationToken) {
                  navigate("/home");
                  localStorage.setItem("token", res?.authenticationToken);
                }
                message.info("Muvaffaqiyatli yakunlandi!");
              }).catch((err)=>{
               err &&  message.warning('Password yoki Email xato!')
          })
        };
    return(
        <Container>
            <Wrap>
            <div className="subtitle">Registrarion</div>
            <Input stil={'none'} margin={'20'} marginLeft={'0'} type={'email'} onChange={onChange} name='email' placeholder='Email'/>
            <Input stil={'none'} margin={'20'} marginLeft={'0'} type={'password'} onChange={onChange} name='password' bottom='20' placeholder='Password'/>
            <Button width={'100%'} onClick={onSubmit}>Login</Button>
            </Wrap>
        </Container>
    )
}
export default Login;