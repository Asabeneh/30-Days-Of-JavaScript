
url = 'https://jsonplaceholder.typicode.com/posts'
const ul = document.createElement('ul');

// NORMAL
fetch(url) // 1
.then(response => response.json()) // 2
.then(data => {
    data.forEach(post => {
        const {id, title} = post;
        console.log(id, title);
        const li = document.createElement('li');
        li.style.color = 'red';
        li.style.background = 'yellow';
        li.innerHTML = `<p>${id < 10 ? '0' + id : id} - ${title}</p>`;
        ul.append(li);
    });
    document.body.append(ul);
}); // 3


// async / await
const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(post => {
        const {id, title} = post;
        const li = document.createElement('li');
        li.style.color = 'red';
        li.style.background = 'yellow';
        li.innerHTML = `<p>${id < 10 ? '0' + id : id} - ${title}</p>`;
        ul.append(li);
    });
    document.body.append(ul);
}
getData();