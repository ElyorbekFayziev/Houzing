import { Container, Wrap } from "./style"
import {Input} from '../../components/Generic/Input'
import {Button} from '../../components/Generic/Button'
const Login = ()=>{
    return(
        <Container>
            <Wrap>
            <div className="subtitle">Registrarion</div>
            <Input width={'520'} placeholder='Login'/>
            <Input width={'520'} placeholder='First Name'/>
            <Input width={'520'} placeholder='Last Name'/>
            <Input width={'520'} placeholder='Email'/>
            <Input width={'520'} placeholder='User role'/>
            <Input width={'520'} placeholder='Password'/>
            <Input width={'520'} placeholder='Re-enter password'/>
            <Button width={'520'}>Register</Button>
            </Wrap>
        </Container>
    )
}
export default Login