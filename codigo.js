lista=[{ 
      username:"admin",
      password:"admin.123",
      nivel:1  
    },
    { 
      username:"supervisor",
      password:"super.123",
      nivel:2  
    },
    { 
      username:"captura",
      password:"cap.123",
      nivel:3  
    }
  ]

localStorage.setItem("datos",JSON.stringify(lista));
usuarios=JSON.parse(localStorage.getItem("datos"));
console.log(typeof(usuarios));

function logo(){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const validUser = usuarios.find(user => user.username === username && user.password === password)
  if(!validUser) { return alert('Usuario y/o contraseña incorrectos!')}
  
  
 const nivel=validUser.nivel 
 if(nivel=='1') window.location.href = "indexadmin.html";
 else 
     if(nivel=='2') window.location.href = "indexsupervisor.html";
     else window.location.href = "indexcaptura.html";

}


