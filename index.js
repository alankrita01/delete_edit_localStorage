function saveToLocalStorage(event){

  event.preventDefault();
  const name=event.target.username.value;
  const email=event.target.emailId.value;

  const obj ={
    name : name,
    email : email
  }

  localStorage.setItem('userDetails'+email,JSON.stringify(obj));
  showNewUserOnScreen(obj);
}



function showNewUserOnScreen(user){

  //check if email already present or not
  if(localStorage.getItem(user.email)!== null){
    removeUserFromScreen(user.email);
  }

  const parentNode=document.getElementById('listOfUser');
  const childHTML=`<li id=${user.email}> ${user.name} - ${user.email} <button style="border-color: green;" onclick=editUserDetails('${user.email}')>Edit</button> <button style="border-color: red;" onclick=deleteUser('${user.email}')>Delete</button> </li> `;

  parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

//edit user

function editUserDetails(emailId,name){

  document.getElementById('email').value=emailId;
  document.getElementById('username').value=name;

  deleteUser(emailId);
}

//delete user function

function deleteUser(emailId){
  console.log(emailId);
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}


//remove function
function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUser');
  const childNodeToBeDeleted = document.getElementById(emailId);

  if(childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}