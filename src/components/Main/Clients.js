import React from "react";
import audiophile from "@images/client-audiophile.svg";
import databiz from "@images/client-databiz.svg";
import maker from "@images/client-maker.svg";
import meet from "@images/client-meet.svg";

const clientImgs = [audiophile, databiz, maker, meet];

const Clients = () => {
  return (
    <div className="grid grid-cols-4 items-center gap-4 my-4">
      {clientImgs.map((clientImg, index) => {
        return (
          <img
            key={("client-img-", index)}
            src={clientImg}
            alt="client image"
          />
        );
      })}
    </div>
  );
};

export default Clients;
