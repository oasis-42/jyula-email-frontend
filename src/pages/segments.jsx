import React from "react";

function Segments() {

  const [listSegments, setListSegments] = useState([]);

  const getListContacts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/segments")
        .then((response) => response.json())
        .then((json) => setListSegments(json));
    } catch (error) {
      //tratar erros
    }
  }



  return <div>
    segmentos
    {/* //criar componente pra listar
    {listSegments.map((item) => <Componente de lista />)} */}
    </div>;
}

export default Segments;
