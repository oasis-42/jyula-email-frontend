import { useEffect, useState } from "react";
import { getAllContacts } from "../models/contacts";
import type { Contact } from "../models/contacts";
import Pagination from "../components/pagination/Pagination";

function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItens, setTotalItens] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    getAllContacts()
      .then(value => setContacts(value.content))
      .catch(err => console.log(err.message) /*handle error */);
  }, []);

  const fetchSegments = async (page = 1) => {
    const response = await getAllContacts('', page - 1);
    setContacts(response.content);
    setTotalItens(response.totalElements);
  }

  return <div>
    

    <div className="d-flex justify-content-end">
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItens}
        currentPage={currentPage}
        onChangePage={(page: number) => fetchSegments(page)}
      />
    </div>
  </div>;
}

export default Contacts;
