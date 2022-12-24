import { Button1, Container, Content, Icons, Img, Main, User, Way } from "./style"
import house1 from '../../../assets/img/house1.png'
import user1 from '../../../assets/img/user1.png'
const Card =({data,onClick})=>{
  const {attachments,salePrice,price,houseDetails,address,city,country,description,category} = data
    return(
        <Container onClick={onClick}>
            <Img src={attachments[0]?.imgPath ||house1}/>
            <Button1 left>FEATURED</Button1>
            <Button1 right dark>FOR SALE</Button1>
            <User src={user1}/>
            <Content>
                <Content.Text>{city},{country},{description}</Content.Text>
                <div className="info">{address ||'Quincy St, Brooklyn, NY, USA'} - {category?.name || 'Category'},{houseDetails?.room}-room</div>
                <Main>
                    <Main.Item>
                    <Icons.Bed/> <div className="info">{houseDetails?.beds || 0}Beds</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Bath/><div className="info">{houseDetails?.bath || 0} Baths</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Car/><div className="info">{houseDetails?.garage || 0} Garage</div>
                    </Main.Item>
                    <Main.Item>
                    <Icons.Ruler/><div className="info">{houseDetails?.area || 0} Sq Ft</div>
                    </Main.Item>
                </Main>
            </Content>
                <Way></Way>
                <Content footer>
        <Main.Item footer>
          <del className='info'>${price || 0}/mo</del>
          <Content.Text>${salePrice || 0}/mo</Content.Text>
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