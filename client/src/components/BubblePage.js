import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../auth/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(true)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
    useEffect(() => {
        if (update) {
            setTimeout(() => {
                axiosWithAuth()
                    .get('/colors')
                    .then(res => setColorList(res.data))
                    .catch(err => console.log(err));
                setUpdate(false);
            }, 500);
            
            
        }
    }, [update])

  return (
    <>
      <ColorList colors={colorList} setUpdate={setUpdate} update={update} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
