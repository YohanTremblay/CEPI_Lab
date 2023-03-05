const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);
fetch('http://localhost:3000/Publication?id=' + id)
.then(reponse => reponse.json())
.then(json =>{
    json.forEach(element => {
        let text = $(`  
    <div class="text-center">
        <img class="img-fluid largeurMax " src="\\style\\Image\\imageNotFound.png" alt="Responsive image">  
    </div> 
    <div>
        <h1 class="colorText">${element.title}</h1>
    </div>
    <div>
        <p>${element.content}</p>
    </div>
    `)
        $("#contenueBlog").append(text);
    });
});

fetch('http://localhost:3000/Commentaire?lier=' + id)
.then(reponse => reponse.json())
.then(json =>{
    json.forEach(element => {
        let text = $(` <div class="d-flex flex-start mt-4">
        <img class="rounded-circle shadow-1-strong me-3"
          src="\\style\\Image\\LogoProfile.png" alt="avatar" width="65"
          height="65" />
        <div class="flex-grow-1 flex-shrink-1">
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-1">
                Utilisateur <p> <span class="small">${element.Date}</span> </p>
              </h6>
            </div>
            <p class="small mb-0">
              ${element.content}
            </p>
          </div>
        </div>
      </div>`)
        $("#comment").append(text);
    });
});

function ajoutCommentaire()
{
    let date = new Date().toLocaleDateString();

    fetch('http://localhost:3000/Commentaire?lier=' + id,
        {
            method: "POST",
            body : JSON.stringify({
                lier : id,
                Date : date,
                content : document.getElementById('Commentaire').value
            }),
            headers : {
                'Content-type' : 'application/json; charset=UTF-8',
            }
        }
    )
}
