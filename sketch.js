var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com', true);

request.onload = function () {
  // Begin accessing JSON data here
  // let data = JSON.parse(this.response);

  // data.forEach(repo => {
  //   // Log each movie's title
  //   list.appendChild(repo.title);
  // });
  let list = document.getElementByID('list');
  list.innerHTML = JSON.stringify(this.response);
}

// Send request
request.send();
