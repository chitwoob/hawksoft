export async function getContactsApi() {
  // const url = `api/Tracker/AddTracker`;

  // let headers = new Headers();
  // const jsonStr = JSON.stringify(hwObj);

  // headers.append('Content-Type', 'text/json');
  // headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

  // try {
  //   const response = await fetch(url, { method: 'POST', headers: headers, body: jsonStr });
  //   return await response.json();
  // } catch (error) {
  //   return {};
  // }
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