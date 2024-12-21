


document.addEventListener("DOMContentLoaded", () => {
  
  let register = document.querySelector(".signup button");
  let box = document.querySelector(".mainbox");
  const btn = document.querySelector(".btn button");
  
  register.addEventListener("click", async (e) => {
    let email = document.createElement("div");
    email.setAttribute("class", "con");
    email.innerHTML = `<input type="email" class="in" placeholder="Email Address" id="email">`;
    box.prepend(email);  
    btn.innerText = "Sign up" 
  });
  
  btn.addEventListener("click", async () => {
    let details = {}
    let usernamev = document.querySelector("#username").value
    let passvalue = document.querySelector("#pass").value
    if( btn.innerText ==="Sign up" ){
      let emailvalue = document.querySelector("#email").value
      details = {
        email :emailvalue,
        username: usernamev,
        pass : passvalue,
      }

      let requestsend = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      });
      // let result = await requestsend.json()
      // console.log(result);
    }
    else{
      details = {
        username: usernamev,
        pass : passvalue,
      }

      let reqsend = await fetch("/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      });
    }
    })
  })

  
 