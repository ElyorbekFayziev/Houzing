import { Checkbox, message } from "antd";
import noimg from '../../assets/img/noimg.jpeg'
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "../Generic";
import Recent from "../Recomended";
import nouser from "../../assets/img/nouser.jpeg";
import {Container,Content,Description,Details,Hr,Icons,Img,Info,Section,User,Wrapper} from "./style";
import { PropertiesContext } from "../../context/properties";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  const [state] = useContext(PropertiesContext);
  const save = (event) => {
    event?.stopPropagation();
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${data?.id}?favourite=${!data?.favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (data?.favorite) res?.success && message.warning("Successfully disliked");
        else res?.success && message.info("Successfully liked");
        state.refetch && state.refetch();
      });
    };
    // const onClick = (
    //   <>
    //   <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
    //     <Img.Wrap>
    //     <Img.Content>
    //     <Img.First src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
    //     <Img.First src={(data?.attachments && data?.attachments[2]?.imgPath)  || noimg}/>
    //     <Img.First src={(data?.attachments && data?.attachments[3]?.imgPath)  || noimg}/>
    //     <Img.Last src={(data?.attachments && data?.attachments[4]?.imgPath)  || noimg}/>
    //     </Img.Content>
    //     </Img.Wrap>
    //   </>
    // );
  const img = ()=>{
    if(data?.attachments?.length === 1 ) {
      console.log(1,data?.attachments);
        return(
          <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
        )
    }
    else if(data?.attachments?.length === 2 ){

      return(
        <>
        <Img.Wrap>
        <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
        <Img src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
        </Img.Wrap>
        </>
      )
    }
    else if(data?.attachments?.length === 3 ){

        return(
          <>
          <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
          <Img.Wrap>
          <Img.Content>
          <Img.First src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
          <Img.First src={(data?.attachments && data?.attachments[2]?.imgPath)  || noimg}/>
          </Img.Content>
          </Img.Wrap>
          </>
        )
    }
    else if(data?.attachments?.length === 4){

      return(
        <>
        <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
        <Img.Wrap>
        <Img.Content>
        <Img.First src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
        <Img.First src={(data?.attachments && data?.attachments[2]?.imgPath)  || noimg}/>
        <Img.First src={(data?.attachments && data?.attachments[3]?.imgPath)  || noimg}/>
        </Img.Content>
        </Img.Wrap>
        </>
      )
    }
    else if(data?.attachments?.length === 5){
return(
  <>
        <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
        <Img.Wrap>
        <Img.Content>
        <Img.First src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
        <Img.First src={(data?.attachments && data?.attachments[2]?.imgPath)  || noimg}/>
        <Img.First src={(data?.attachments && data?.attachments[3]?.imgPath)  || noimg}/>
        <Img.Last src={(data?.attachments && data?.attachments[4]?.imgPath)  || noimg}/>
        </Img.Content>
        </Img.Wrap>
        </>
)
    }
    // else if(data?.attachments?.length > 5){
    //   return(
    //     <>
    //    <Img src={(data?.attachments && data?.attachments[0]?.imgPath)  || noimg}/>
    //     <Img.Wrap>
    //     <Img.Content>
    //     <Img.First src={(data?.attachments && data?.attachments[1]?.imgPath)  || noimg}/>
    //     <Img.First src={(data?.attachments && data?.attachments[2]?.imgPath)  || noimg}/>
    //     <Img.First src={(data?.attachments && data?.attachments[3]?.imgPath)  || noimg}/>
    //     <Dropdown
    //     overlay={onClick}
    //     placement='bottomRight'
    //     arrow={{ pointAtStart: true}}
    //     trigger='click'
    //   >
    //     <div>
    //       <Imgg>
    //         <Img.Last src={(data?.attachments && data?.attachments[4]?.imgPath)  || noimg} />
    //         <Blur />
    //         <Text>+{data?.attachments?.length-5 || '0'}</Text>
    //       </Imgg>
    //     </div>
    //   </Dropdown>
    //     </Img.Content>
    //     </Img.Wrap>
    //     </>
    //   )
    // }
  }
  // console.log(data?.attachments?.length);
  return (
    <React.Fragment>
      <Wrapper>{img()}</Wrapper>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city},{data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love onClick={save} favorite={data?.favorite}/> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>
                Area {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title>${data?.salePrice || 0}/mo</Details.Title>
                </del>
                <h2 className="title"> ${data?.price || 0}/mo</h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title mt='48'>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Hr></Hr>
          <Content.Title mb='24' mt='48'>Location</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <div className="subTitle">Address:</div>
                <Info>{data?.address || 'no'}</Info>
              </Content>
              <Content flex>
                <div className="subTitle">State/County: </div>
                <Info>{data?.description || 'no'}</Info>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                <div className="subTitle">City:</div>
                <Info>{data?.city || 0}</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Zip:</div>
                <Info>{data?.zipCode || 0}</Info>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                <div className="subTitle">Area:</div>
                <Info>{data?.category?.name || 'no'}</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Country:</div>
                <Info>{data?.country || 0}</Info>
                </Content>
              </Container>
            </Section>
          </Section>
          <Hr mt='48'></Hr>
          <Content.Title mb='24' mt='48'>Property Details</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <div className="subTitle">Property ID:</div>
                <Info>{data?.id || 0}</Info>
              </Content>
              <Content flex>
                <div className="subTitle">Price:</div>
                <Info>${data?.price || 0}</Info>
              </Content>
              <Content flex>
              <div className="subTitle">Property Size:</div>
                <Info>{data?.houseDetails?.area || 0}</Info>
              </Content>
              <Content flex>
              <div className="subTitle">Year Bulit:</div>
                <Info>{data?.houseDetails?.yearBuilt || 0}</Info>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                <div className="subTitle">Bedrooms:</div>
                <Info>{data?.houseDetails?.beds || 0}</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Bathrooms:</div>
                <Info>{data?.houseDetails?.bath || 0}</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Garage:</div>
                <Info>{data?.houseDetails?.garage || 0}</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Garage size:</div>
                <Info>{data?.houseDetails?.garage || 0} m3</Info>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                <div className="subTitle">Property Type:</div>
                <Info>Apartment</Info>
                </Content>
                <Content flex>
                <div className="subTitle">Property Status:</div>
                <Info>For Sale</Info>
                </Content>
              </Container>
            </Section>
          </Section>
          <Hr mt='48'></Hr>
          <Content.Title mb='24' mt='48'>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Conditioner />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Barbecue/>
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Dryer/>
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Dumbbell/>
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Gras/>
                  <Details.Title>
                    Lawn {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Laundry/>
                  <Details.Title>
                    Laundry {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Microwave/>
                  <Details.Title>
                    Microwave {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Outdoorshower/>
                  <Details.Title>
                    Outdoor Shower {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Refrigerator/>
                  <Details.Title>
                  Refrigerator {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Sauna/>
                  <Details.Title>
                  Sauna {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Swimmer/>
                  <Details.Title>
                  Swimming Pool {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Coaxial/>
                  <Details.Title>
                  TV Cable {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Liquidsoap/>
                  <Details.Title>
                  Washer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Wifi/>
                  <Details.Title>
                    Wifi {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Blinds />
                  <Details.Title>
                    Window Coverings {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Chair />
                  <Details.Title>
                    Dining room {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
        </Container>
        <Container className="user" flex={1} style={{height:'fit-content'}}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Elyorbek Fayziev</div>
              <div className="info">998 91 538 0788</div>
            </Content>
          </Section>
          <Input stil='none' placeholder="Name" />
          <Input stil='none' placeholder="Phone" />
          <Input stil='none' placeholder="Email" />
          <Input stil='none' placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"100%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Hr></Hr>
      <Recent text={'Similar listings'}/>
    </React.Fragment>
  );
};

export default HouseItem;