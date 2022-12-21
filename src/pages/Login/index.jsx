import { Container, Wrap } from "./style"
import {Input} from '../../components/Generic/Input'
import {Button} from '../../components/Generic/Button'
const Login = ()=>{
    return(
        <Container>
            <Wrap>
            <div className="subtitle">Registrarion</div>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='Login'/>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='First Name'/>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='Last Name'/>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='Email'/>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='User role'/>
            <Input type={'none'} margin={'20'} width={'520'} placeholder='Password'/>
            <Input type={'none'} margin={'20'} bottom={'32'} width={'520'} placeholder='Re-enter password'/>
            <Button width={'520'}>Register</Button>
            </Wrap>
        </Container>
    )
}
export default Login