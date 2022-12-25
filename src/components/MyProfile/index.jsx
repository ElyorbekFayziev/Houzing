import { AntTable, Container, Icons, User, Wrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import noimg from "../../assets/img/noimg.jpeg";
import { useQuery } from "react-query";
import { message } from "antd";
const { REACT_APP_BASE_URL: url } = process.env;
export const MyProfile = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const { data, refetch } = useQuery([search], () => {
    return (
      fetch(`${url}/houses/me`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json" 
        }
      })
    )
  });

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => {
        return (
          <User>
            <User.Img
              src={
                (data?.attachments && data?.attachments[0]?.imgPath) || noimg
              }
            />
            <User flex>
              <div className="subTitle">
                {data.country}, {data.address}
              </div>
              <div className="info">
                {data.city} {data.region}
              </div>
              <del>
                <div className="info">${data.price}</div>
              </del>
            </User>
            <div style={{ marginLeft: "auto" }}>
            </div>
          </User>
        );
      },
    },
    {
      title: "Year Build",
      render: (data) => <span> {data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span> {data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span> $ {data.price}</span>,

      width: 150,
    },
    {
      title: "Action",
      key: "email",
      width: 100,
      render: (data) => {
        return (
          <User>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
    },
  ];

  const onDelete = (id) => {
    fetch(`${url}/houses/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
      }
    }).then((res)=>res.json())
    .then((res)=>{
      if (res?.success) {
        message.info("Muvaffaqiyatli o'chirildi!");
        refetch();
    }})
  };

  return (
    <Wrapper>
      <User>
        <div style={{ textAlign: "start" }} className="title">
          My Properties
        </div>
        <div style={{ marginLeft: "auto" }} className="title">
          <Button onClick={() => navigate("/myprofile/newhouse")}>
            Add House
          </Button>
        </div>
      </User>

      <Container>
        <AntTable
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              }, // click row
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;