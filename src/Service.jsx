import React from "react";
import Card from './Card';
import arr from './Arr'
const Service = () => {
  return (
    <>
      <div className="my-2">
        <h2 className="text-center"> Services</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto d-flex flex-row flex-wrap justify-content-center align-items-center">
            {
                arr.map((data,index)=>{
                return <Card link={data.link} title={data.title} con={data.con} key={index} />
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
