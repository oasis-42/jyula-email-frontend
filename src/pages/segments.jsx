import React, { useEffect, useState } from "react";
import { getAllSegments } from "../models/segments";
import Pagination from "../components/pagination/Pagination";
import {CardList} from "../components/cardList/cardList";

function Segments() {
  const [segments, setSegments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItens, setTotalItens] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getAllSegments()
      .then(value => setContacts(value.content))
      .catch(err => console.log(err.message) /*handle error */);
  }, []);


  const fetchSegments = async (page = 1) => {
    const response = await getAllSegments('', page - 1);
    setSegments(response.data.content);
    setTotalItens(response.data.totalElements);
  }



  return <div>
    segmentos

    <CardList />


    <div className="d-flex justify-content-end">
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItens}
        currentPage={currentPage}
        onChangePage={(page) => fetchSegments(page)}
      />
    </div>
  </div>;
}

export default Segments;
