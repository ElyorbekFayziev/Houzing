import { Container, Wrap } from "./style"
import {Input} from '../../components/Generic/Input'
import {Button} from '../../components/Generic/Button'
import useRequest from '../../hooks/useRequest'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { message } from "antd";

const Login = ()=>{
        const request = useRequest();
        const [body, setBody] = useState({});
        const navigate = useNavigate();
        const onChange = ({ target: { value, name } }) => {
          setBody({...body,[name]: value,});
        };
        const onSubmit = async () => {
          request({
            url: `/public/auth/login`,
            method: "POST",
            body,
            xato: true,
          })
          .then((res) => {
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
            <Input type={'none'} margin={'20'} onChange={onChange} name='email' placeholder='Email'/>
            <Input type={'none'} margin={'20'} onChange={onChange} name='password' bottom='20' placeholder='Password'/>
            <Button width={'100%'} onClick={onSubmit}>Login</Button>
            </Wrap>
        </Container>
    )
}
export default Login