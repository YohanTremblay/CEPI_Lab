
// fetch('http://localhost:3000/Publication')
// .then(reponse => reponse.json())
// .then(json =>{
//     json.forEach(element => {
//         let text = $(` <div class=" card col-lg-4 yeah">
//         <img class="img-fluid" src="..\\style\\Image\\imageNotFound.png" alt="">
//         <h2> ${element.title} </h2>
//         <p class="card-text"> ${element.content.substr(0, 150)} </p>
//         <button type="button" onclick="location.href='http://127.0.0.1:5500/html/Blog.html?id=${element.id}';">Voir Publication</button>
//         </div>`)
//         $("#Publi").append(text);
//     });
// });

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(<FooterComp/>);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<HeaderComp/>);

const publi = ReactDOM.createRoot(document.getElementById('publi'));
publi.render(<BlogList/>);



