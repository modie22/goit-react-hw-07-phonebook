import { api } from "./apiUrl";

export const getAllContacts = async () => {
    return await api('/contacts')
}

export const addContact = async (contact) => {
    const { data } = await api.post('/contacts', contact) 
    return data
}

export const removeContact = async (id) => {
    const { data } = await api.delete(`/contacts/${id}`)
    return data
}