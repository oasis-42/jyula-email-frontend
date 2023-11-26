import { useEffect, useState } from "react";
import { getAllContacts } from "../models/contacts";
import type { Contact } from "../models/contacts";

function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    getAllContacts()
      .then(value => setContacts(value.content))
      .catch(err => console.log(err.message) /*handle error */);
  }, []);

  return <div>
    {/* //criar componente pra listar
    {listContacts.map((item) => <Componente de lista />)} */}
  </div>;
}

export default Contacts;
