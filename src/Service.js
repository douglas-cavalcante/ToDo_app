import axios from "axios";

const HEADER_PARAMS = {
  Accept: "application/json",
  "Content-Type": "application/json",
}
const URL_BASE = "https://b7web.com.br/todo/42387";

export function addItem(description) {
  return axios.post(URL_BASE, { item: description }, { headers: HEADER_PARAMS })
    .then((response) => response.data);
}

export function getItems() {
  return axios.get(URL_BASE)
    .then((response) => response.data.todo);
}

export function updateItem(id, description) {
  return axios.put(`${URL_BASE}/${id}`, { item: description }, { headers: HEADER_PARAMS })
    .then((response) => response.data);
}

export function updateStatusItem(id, done) {
  return axios.put(`${URL_BASE}/${id}`, { done: done }, { headers: HEADER_PARAMS })
    .then((response) => response.data);
}

export function deleteItem(id) {
  return axios.delete(`${URL_BASE}/${id}`, { headers: HEADER_PARAMS })
    .then((response) => response.data);
}