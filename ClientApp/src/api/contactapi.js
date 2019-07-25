export async function getContactsApi(user) {
  const url = `api/Contacts/${user}`;
    
    let headers = new Headers();

    headers.append('Content-Type', 'text/json');
    try {
      const response = await fetch(url, {method:'GET',headers: headers});
      return await response.json();
    } catch (error) {
      return [];
    }
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

export async function updateContactApi(data) {
  const url = `api/Contacts`;

  let headers = new Headers();
  const jsonStr = JSON.stringify(data);
  headers.append('Content-Type', 'text/json');

  try {
    const response = await fetch(url, { method: 'PUT', headers: headers, body: jsonStr  });
  } catch (error) {
    return {};
  }
}

export async function deleteContactApi(id) {
  const url = `api/Contacts/${id}`;

  let headers = new Headers();
  headers.append('Content-Type', 'text/json');

  try {
    const response = await fetch(url, { method: 'DELETE', headers: headers});
  } catch (error) {
    return {};
  }
}