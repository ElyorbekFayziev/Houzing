import { Container, Wrapper } from "./style"
import Input from '../../components/Generic/Input'
import Button from '../../components/Generic/Button'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Signup =()=>{
    const [body, setBody] = useState({});
    const navigate = useNavigate();
  
    const onChange = ({ target: { value, name } }) => {
      setBody({...body,[name]: value,});
    };
    const info = () => {
      message.info("Ro'yxatga olish muvaffaqiyatli yakunlandi!");
    };
  
    const onSubmit = async () => {
      fetch(`https://houzing-app.herokuapp.com/api/public/auth/register`,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{"Content-Type": "application/json"}
      }).then((res)=>res.json())
      .then((res)=>{
        if(res?.success === 'true'){
          info();
          navigate("/signin")
        }
        else{
          message.warning(`Ro'yxatga olib bo'lmadi!`)
        }
      })
    };

    return(
        <Container>
            <Wrapper>
                <div className="subTitle">Sign up</div>
                <Input onChange={onChange} placeholder='Email' name='email' margin={'10'} marginLeft={"2"} stil='none' type='email'/>
                <Input onChange={onChange} placeholder='Firstname' name='firstname' margin={'10'} marginLeft={"2"} stil='none' type='text'/>
                <Input onChange={onChange} placeholder='Lastname' name='lastname' margin={'10'} marginLeft={"2"} stil='none' type='text'/>
                <Input onChange={onChange} placeholder='Password' name='password' margin={'10'} bottom={'25'}  marginLeft={"2"} type='password' stil='none'/>
                <Button onClick={onSubmit} width={'100%'}>Register</Button>
            </Wrapper>
        </Container>
    )
}
export default Signup