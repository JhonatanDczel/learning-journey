import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/items";

export default function Contact() {

  const params = useParams()
  const contact = useMemo(()=>getContact(params.contactId), [params.contactId])
  console.log(contact)

  if (!contact) {
    throw new Error('Contact does not exist')
  }

  return (
    <>
      <h1>Contact</h1>
      <p>id: {params.contactId}</p>
      <h2>name: {contact.name}</h2>
    </>
  );
}