import { redirect } from "react-router-dom";
import { getContact, deleteContact } from "../contacts";

export async function action({ params }) {
    const contact = await getContact(params.contactId)
    await deleteContact(contact.id)
    return redirect(`/`)
}