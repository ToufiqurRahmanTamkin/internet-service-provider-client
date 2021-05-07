import React from "react";

const IpService = ({ _id, name, description, imageURL }) => {
  console.log("this is ip service");
  return (
    <article className="service mb-4 text-center">
      <div className="">
        <img  src={imageURL} alt={name} />
      </div>
      
      <div className="service-info">
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default IpService;
