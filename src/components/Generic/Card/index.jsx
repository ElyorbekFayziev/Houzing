import { Button1, Container, Content, Icons, Img, Main, User, Way } from "./style"
import house1 from '../../../assets/img/house1.png'
import user1 from '../../../assets/img/user1.png'
const Card =()=>{
    return(
        <Container>
            <Img src={house1}/>
            <Button1 left>FEATURED</Button1>
            <Button1 right dark>FOR SALE</Button1>
            <User src={user1}/>
            <Content>
                <Content.Text>New Apartment Nice Wiew</Content.Text>
                <div className="info">Quincy St, Brooklyn, NY, USA</div>
                <Main>
                    <Main.Item>
                    <Icons.Bed/> <div className="info">4 Beds</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Bath/><div className="info">5 Baths</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Car/><div className="info">1 Garage</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Ruler/><div className="info">1200 Sq Ft</div>
                    </Main.Item>
                </Main>
            </Content>
                <Way></Way>
                <Content footer>
        <Main.Item footer>
          <del className='info'>$2,800/mo</del>
          <Content.Text>$7,500/mo</Content.Text>
        </Main.Item>
        <Main.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Main.Item>
      </Content>
        </Container>
    )
}

export default Card