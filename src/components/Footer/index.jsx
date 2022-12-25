import { Container, Content, Icon } from './style';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location /> Oybek ko'chasi, 53-uy
        </Content.Item>
        <Content.Item>
          <Icon.Phone /> 998 91 538 0788
        </Content.Item>
        <Content.Item>
          <Icon.Email /> elyor.fayziev@icloud.com
        </Content.Item>
      </Content>
      <Content>
        <Content.Title>Wide Renge Of Properties</Content.Title>
        <Content.Item> Uzbekistan</Content.Item>
        <Content.Item> USA</Content.Item>
        <Content.Item> UAE</Content.Item>
        <Content.Item> Switzerland</Content.Item>
      </Content>
      <Content>
        <Content.Title>Financing Made Easy</Content.Title>
        <Content.Item>Frontend </Content.Item>
        <Content.Item>Backend </Content.Item>
        <Content.Item>Mobile </Content.Item>
        <Content.Item>Flutter </Content.Item>
        <Content.Item>Android </Content.Item>
      </Content>
      <Content>
        <Content.Title>See Neighborhoods</Content.Title>
        <Content.Item>t.me/Elyor_Fayziev</Content.Item>
        <Content.Item>instagram.com/fayziev__1</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;