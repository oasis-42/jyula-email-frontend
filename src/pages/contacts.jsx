import React from "react";

function Contacts() {

  const [listContacts, setListContacts] = useState([]);

  const getListContacts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/contacts")
        .then((response) => response.json())
        .then((json) => setListContacts(json));
    } catch (error) {
      //tratar erros
    }
  }

  return <div>
    contacts
    {/* //criar componente pra listar
    {listContacts.map((item) => <Componente de lista />)} */}
  </div>;
}

export default Contacts;
