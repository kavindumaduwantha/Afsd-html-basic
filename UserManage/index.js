console.log("run");


let store = [];

const onWindowLoad = () => {
   let data =""
   for(let i=0; i<store.length; i++){
      data += `<div class="card p-3" style="width: 18rem;">
      <h6 class="card-subtitle mb-1 text-body-secondary ">First name : ${store[i].fname} </h6>
      <h6 class="card-subtitle mb-1 text-body-secondary">Last name : ${store[i].lname} </h6>
      <h6 class="card-subtitle mb-1 text-body-secondary">Your age : ${store[i].age}</h6>
      <h6 class="card-subtitle mb-1 text-body-secondary">Address : ${store[i].address} </h6>
      <button onclick="deleteuser(${i})" type="button" class="btn btn-danger m-1">Delete</button>
    </div>`

   }
    document.getElementById('display').innerHTML = data

}

function deleteuser(val) {
  store.splice(val, 1);
  onWindowLoad();
}

const clear = () => {
    document.getElementById('f-name').value = ''
    document.getElementById('l-name').value = ''
    document.getElementById('age').value = ''
    document.getElementById('ads').value = ''


}

const saveuser = () => {
    const f_name = document.getElementById('f-name').value
    const l_name = document.getElementById('l-name').value
    const age = document.getElementById('age').value
    const ads = document.getElementById('ads').value
    
    
if(f_name !=='' && l_name !=='' && age !=='' && ads !==''){
    store.push({
       fname: f_name,
       lname: l_name,
       age: age,
       address: ads

    })
    clear();
    onWindowLoad();
}else{
    alert('please fil text..!')
}
}
