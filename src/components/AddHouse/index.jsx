import React, { useEffect } from "react";
import { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete } from "./style";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../Generic";
import Loading from "../Generic/Loading";
import { Checkbox } from "antd";
import { useFormik } from "formik";
import TextArea from "antd/lib/input/TextArea";

const { REACT_APP_BASE_URL: url } = process.env;

export const AddNewHouse = () => {
  const [imgs, setImgs] = useState([]);
  const [load,setLoad] = useState(true)
  const [initial, setInitail] = useState({
    houseDetails: {},
    homeAmenitiesDto: {},
    componentsDto: {},
    status: true,
    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // Edit house
  useEffect(() => {
    if(id){
      fetch(`${url}/houses/id/${id}`)
      .then((res)=>res.json())
      .then((res)=>{
        setImgs(res?.data?.attachments);
        setInitail({ ...res?.data });
      })
    }
  },[id]);
  
  useEffect(() => {
    fetch(`${url}/categories/list`)
    .then((res)=>res.json())
    .then((res)=>{
      setCategory(res?.data || [])
    })
  },[]);
  
  // Add house
  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      fetch(`${url}/${id?`houses/${id}`:'houses'}`,{
        method: id ? "PUT" : "POST",
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json" 
        },
        body:JSON.stringify({
          ...values,categoryId: 1,name: "elyor",attachments: imgs,
        })
      })
      .then((res)=>res.json())
      .then((res)=>{
        if (res?.success) navigate("/myprofile");
        setLoad(false)
      })
    },
  });

  const addImg = () => {
    if (!(imgs.length >= 4) && img) {
      setImgs([...imgs,{ imgPath: img, id: `${img.length * Math.random()}${img}$` },]);
      setImg("");
    }
  };
  return (
    <>{id && load?<Loading></Loading>:
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <MenuWrapper>
          <h1 className="subTitle">Address</h1>
          <Section>
            <Input
              name="country"
              value={formik.values.country}
              placeholder="Country"
              onChange={formik.handleChange}
              />
            <Input
              onChange={formik.handleChange}
              name="region"
              value={formik.values.region}
              placeholder="Region"
              />
            <Input
              onChange={formik.handleChange}
              name="city"
              value={formik.values?.city}
              placeholder="City"
              />
            <Input
              onChange={formik.handleChange}
              name="address"
              
              value={formik.values?.address}
              placeholder="Address"
            />
          </Section>
          <h1 className="subTitle">Apartment info</h1>
          <Section>
            <Input
              type="number"
              name="houseDetails.area"
              value={formik.values.houseDetails?.area}
              onChange={formik.handleChange}
              placeholder="area"
            />
            <Input
              type="number"
              name="houseDetails.bath"
              value={formik.values.houseDetails?.bath}
              onChange={formik.handleChange}
              placeholder="bath"
            />
            <Input
              type="number"
              name="houseDetails.beds"
              value={formik.values.houseDetails?.beds}
              onChange={formik.handleChange}
              placeholder="beds"
            />
            <Input
              type="number"
              name="houseDetails.garage"
              value={formik.values.houseDetails?.garage}
              onChange={formik.handleChange}
              placeholder="garage"
            />
            <Input
              type="number"
              name="houseDetails.yearBuilt"
              onChange={formik.handleChange}
              placeholder="yearbuilt"
              value={formik.values.houseDetails?.yearBuilt}
            />
            <Input
              type="number"
              value={formik.values.houseDetails?.room}
              name="houseDetails.room"
              onChange={formik.handleChange}
              placeholder="room"
            />
            <SelectAnt
              defaultValue={"Select Category"}
              value={formik.values.categoryId}
              onChange={formik.handleChange}
            >
              <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
              {category.map((value) => {
                return (
                  <SelectAnt.Option key={value.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </Section>
          <h1 className="subTitle">Price</h1>
          <Section>
            <Input
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              placeholder="Name"
            />
            <Input
              value={formik.values.zipCode}
              name="zipCode"
              onChange={formik.handleChange}
              placeholder="Zip Code"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="price"
              value={formik.values.price}
              placeholder="Price"
            />
            <Input
              type="number"
              onChange={formik.handleChange}
              name="salePrice"
              value={formik.values.salePrice}
              placeholder="Sale price"
            />
          </Section>
          <Section>
            <Input
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
              placeholder="Add Image URL"
            />{" "}
            <Button
              type={"button"}
              onClick={addImg}
              disabled={imgs.length >= 4}
            >
              Add Image URL
            </Button>
          </Section>
          <Section flex>
            {imgs.map((value) => {
              return (
                <pre key={value.id}>
                  {value?.imgPath}
                  <IconDelete
                    onClick={() => {
                      let res = imgs.filter((vl) => vl.id !== value.id);
                      setImgs(res);
                    }}
                  />
                </pre>
              );
            })}
          </Section>
          <Section>
            <TextArea
              onChange={formik.handleChange}
              rows={6}
              placeholder="description"
              name="description"
            />
          </Section>
          <h1 className="subTitle">Additional</h1>
          <Section gap>
            <Section flex>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.busStop">
                Bus Stop
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.garden">
                Garden
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.market">
                Market
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.park">
                Park
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.parking">
                Parking
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.school">
                School
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.statium">
                Statium
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.subway">
                Subway
              </Checkbox>
              <Checkbox onChange={formik.handleChange}name="homeAmenitiesDto.superMarket">
                Super Market
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.tv">
                TV
              </Checkbox>
            </Section>
            <Section flex>
              <Checkbox onChange={formik.handleChange} name="houseDetails.airCondition">
                Air Condition
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.courtyard">
                Courtyard
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.furniture">
                Furniture
              </Checkbox> 
              <Checkbox onChange={formik.handleChange} name="houseDetails.gas">
                 Gas Stove  
              </Checkbox>
              <Checkbox onChange={formik.handleChange} name="houseDetails.internet">
                Internet
              </Checkbox>
            </Section>
          </Section>
          <Button onClick={useFormik}>{id ? "Update" : "Save"}</Button>
        </MenuWrapper>
      </form>
    </Wrapper>
          }
    </>
  );
};

export default AddNewHouse;