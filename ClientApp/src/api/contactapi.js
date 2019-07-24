export async function getContactsApi() {

}

export async function addContactApi(data) {
  const url = `api/Contacts`;

  let headers = new Headers();
  const jsonStr = JSON.stringify(data);
  headers.append('Content-Type', 'text/json');

  try {
    const response = await fetch(url, { method: 'POST', headers: headers, body: jsonStr  });
  } catch (error) {
    return {};
  }
}