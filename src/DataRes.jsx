import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List.jsx';

const DataRes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //npx json-server db.json
    axios
      .get('http://localhost:3000/services')
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let makeTree = (array) =>
    array.filter((item) => {
      item.children = array.filter((i) => i.head === Number(item.id));
      return item.head == null;
    });

  const res = makeTree(data);
  console.log(res.map((i) => i.children));
  console.log(res);
  return (
    <>
      <List res={res} />
    </>
  );
};

export default DataRes;
