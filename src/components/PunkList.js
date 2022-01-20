import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
      <div className="punkList">
        {punkListData.map((punk, key) => (
          <div onClick={() => setSelectedPunk((punkListData.length -1) - punk.token_id)} key={key}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
            />
          </div>
        ))}
      </div>
  );
};

export default PunkList;
