const data = fetch('http://localhost:3000/user1').then((res) => {
  res.json().then((response) => console.log(response));
  return res;
});