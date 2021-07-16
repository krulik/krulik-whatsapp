export function getChatUsersList(chat, usersContext) {
  return chat?.userIds.map(userId => {
    let fullUser = usersContext.allUsers[userId] || {};
    return fullUser.userName;
  }).join(', ');
}

const API_URL = 'https://whatsapp-server-zlilyoffe.herokuapp.com';

export let get = (route) => fetch(`${API_URL}/${route}`, {
  credentials: 'include',
  mode: 'cors'
}).then(res => res.json())

export let post = (route, body) => fetch(`${API_URL}/${route}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});