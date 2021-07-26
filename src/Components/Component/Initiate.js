import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import SpaceBarIcon from "@material-ui/icons/SpaceBar";
import Styles from "./Initiate.module.css";
import { ClientCapabilityToken } from "../../APIUtils/APIUTlis";
const Initiate = (props) => {
  const [workerSID, setWorkerSID] = useState("");

  const initiateHandler = async () => {
    try {
      const responseToken = await ClientCapabilityToken(workerSID);
      console.log(responseToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={Styles.initiate}>
      <div className={Styles.initiate__container}>
        <div className={Styles.initiate__text}>
          <h1>WORKER SID</h1>
        </div>
        <div className={Styles.initiate__input}>
          <input
            placeholder="Worker SID"
            value={workerSID}
            onChange={(e) => setWorkerSID(e.target.value)}
          />
        </div>
        <IconButton
          className={Styles.initiate__button}
          onClick={initiateHandler}
        >
          <SpaceBarIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Initiate;
