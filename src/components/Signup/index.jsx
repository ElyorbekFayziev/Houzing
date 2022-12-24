import { Checkbox, Container, Text, Wrapper } from "./style"
import Input from '../../components/Generic/Input'
import Button from '../../components/Generic/Button'

const Signup =()=>{
    return(
        <Container>
            <Wrapper>
                <div className="subTitle">Sign in</div>
                <Text>Login</Text>
                <Input placeholder='Email' marginLeft={"2"} type='none'/>
                <Input placeholder='Password' margin={'35'} marginLeft={"2"} type='none'/>
                <Container.Div>
                    <div className="info">
                        <Checkbox type={'checkbox'}></Checkbox>
                        <Text.P>Remember me</Text.P>
                    </div>
                    <Text.Forgot>Forgot</Text.Forgot>
                </Container.Div>
                <Button width={'100%'}>Login</Button>
            </Wrapper>
        </Container>
    )
}
export default Signup