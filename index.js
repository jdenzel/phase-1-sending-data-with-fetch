// Add your code here
function submitData(){
    return fetch(`http://localhost:3000/users`, configurationObject)
    .then(res => res.json())
    .then(function (data){
        let div = document.createElement("div")
        document.body.append(div)
        document.querySelector('div').innerHTML = data.id

    })
     .catch(function (error){
      let div = document.createElement("div")
        document.body.append(div)
        document.querySelector('div').innerHTML = error
     })
    
}

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name:"Steve",
        email:"steve@steve.com"
      }),
};



// const user = document.createElement("div")
//         document.querySelector('body').appendChild(user)
//         document.querySelector('div').innerHTML = data.id


//         const newDiv = document.createElement("div")
//         const errorDiv = document.getElementById("errorDiv");
//         const errorMessage = document.createElement("p");
//         const errorText = document.createTextNode(`Error: ${error.message}`);
//         errorMessage.appendChild(errorText);
//         errorDiv.appendChild(errorMessage);