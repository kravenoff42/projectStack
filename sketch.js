let urls;
let request = new XMLHttpRequest();
// request.setRequestHeader();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.joncraven.com/MealMaker/outline.md', true);


request.onload = function () {
  console.log(this.response);
  let list = document.getElementById('list');
  let data = this.response;
  // let data = JSON.parse(this.response);
  console.log(data);
  list.appendChild(data);

  // data.forEach(repo => {
    // let h1 = document.createElement('h1');
    // h1.innerHTML = repo.name;
    // list.appendChild(h1);
    // let url = document.createElement('p')
    // url.innerHTML = repo.url;
    // urls.push(repo.url);
    // list.appendChild(url);
    // let html_url = document.createElement('p')
    // html_url.innerHTML = repo.html_url;
    // list.appendChild(html_url);
    // let desc = document.createElement('p');
    // desc.innerHTML = repo.description;
    // list.appendChild(desc);
  //   let info = document.createElement('p');
  //   info.innerHTML = repo.status;
  //   list.appendChild(desc);
  // });
  // list.innerHTML = JSON.stringify(this.response);
}

// Send request
request.send();

window.onload = ()=>{

}

//raw URL
// https://raw.githubusercontent.com/kravenoff42/MealMaker/master/projectInfo.json
