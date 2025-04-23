//RESUELVE TUS EJERCICIOS AQUI

// 1.- Obtener todas las razas de perro

function getAllBreeds() {

    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => Object.keys(data.message));

  }
  

  
  // 2.- Obtener una imagen random de cualquier raza

  function getRandomDog() {

  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => data.message); 

}


  
  // 3.- Obtener todas las imágenes de la raza "komondor"

  function getAllImagesByBreed() {

    return fetch('https://dog.ceo/api/breed/komondor/images')
      .then(response => response.json())
      .then(data => data.message); 

  }
  
  

  // 4.- Obtener imágenes de una raza pasada como argumento

  function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(data => data.message); 
  }
  


  
  getAllBreeds().then(console.log);        
  getRandomDog().then(console.log);         
  getAllImagesByBreed().then(console.log);  
  getAllImagesByBreed2('beagle').then(console.log); 



//   5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil 
//   de usuario de github a partir de su nombre de usuario. 
//   (https://api.github.com/users/{username}).

  function getGitHubUserProfile(username) {

    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json());
  }


//   6.- Declara una función printGithubUserProfile(username) que reciba como argumento 
//   el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

  function printGithubUserProfile(username) {

    return getGitHubUserProfile(username)
      .then(user => {
        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.alt = 'imagen de usuario';
  
        const name = document.createElement('h1');
        name.textContent = user.name || user.login;
  
        document.body.appendChild(img);
        document.body.appendChild(name);
  
        return {
          img: user.avatar_url,
          name: user.name || user.login
        };
      });
  }

  
//   7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición 
//   a la API para obtener información de ese usuario y devuelva un string que represente 
//   una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:


 
// 8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá
//  en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la 
//  función getAndPrintGitHubUserProfile(username) que se ejecute cuando se pulse el botón 
//  buscar.(Esto no se testea).
  
document.getElementById('searchBtn').addEventListener('click', function () {
    const username = document.getElementById('usernameInput').value;
  
    getAndPrintGitHubUserProfile(username)
      .then(html => {
        document.getElementById('result').innerHTML = html;
      })
      .catch(error => {
        document.getElementById('result').innerHTML = '<p>Usuario no encontrado</p>';
        console.error(error);
      });
  });
