const loadCustomersLis = () => {
    let listCust = "";
    // let custLength = "";
   
    let get_local_cust;
    let customer_parse_local=(!localStorage.getItem("customersList"))?[]:JSON.parse(localStorage.getItem("customersList"));
    // let customer_get_local = localStorage.getItem("customersList");
    // let customer_parse_local = JSON.parse(customer_get_local);
     get_local_cust = customer_parse_local;
    get_local_cust.forEach((custFunstion, i) => {
      listCust += `
       <tr>
       <td>${i + 1}</td>
       <td>${custFunstion.name}</td>
       <td>${custFunstion.email}</td>
       <td>${custFunstion.password}</td>
       <td>${custFunstion.dateReg}</td>
       <td><button class="btn btn-secondary" data-toggle="modal" data-target="#imgPop" onclick="custImgBtn(${i})"><i class="fas fa-user"></i></button></td>
       <td>View</td>
       <td><button class="btn btn-success" data-toggle="modal" data-target="#addCustModal" onclick=editBtn(${i})>Edit</button></td>
       <td><button class="btn btn-danger" onclick=deleteBtn(${i})>Delete</button></td>
     </tr>
       `;
    });
    customersList_table.innerHTML = listCust;
    // custLength = get_local_cust.length;
    // custTotal.innerHTML = custLength;
  };
  loadCustomersLis();

  const deleteBtn=(delBtn)=>{
   if (confirm('Are you sure?')) {
    let customer_get_local = localStorage.getItem("customersList");
    let customer_parse_local = JSON.parse(customer_get_local);
    customer_parse_local.splice(delBtn,1);
    localStorage.setItem('customersList',JSON.stringify(customer_parse_local));
      loadCustomersLis();
   }
  }
  
  const editBtn=(editPopValue)=>{
    sEdit.innerHTML=`<button class="btn btn-primary" onclick="adminSaveEdit(${editPopValue})">Save Edit</button>`;
    // alert('seyi')
    let customer_get_local = localStorage.getItem("customersList");
  let customer_parse_local = JSON.parse(customer_get_local);
     nameCust.value=customer_parse_local[editPopValue].name;
    emailCust.value=customer_parse_local[editPopValue].email;
    passwordCust_1.value=customer_parse_local[editPopValue].password;
    passwordCust_2.value=customer_parse_local[editPopValue].password;
  }
  

  const adminSaveEdit=(saveEditBtn)=>{
    let customer_get_local = localStorage.getItem("customersList");
    let customer_parse_local = JSON.parse(customer_get_local);
    customer_parse_local[saveEditBtn].name= nameCust.value;
    customer_parse_local[saveEditBtn].email=emailCust.value;
    customer_parse_local[saveEditBtn].password=passwordCust_1.value;
    localStorage.setItem('customersList',JSON.stringify(customer_parse_local));
    loadCustomersLis();
  }
const custImgBtn=(popCustImg)=>{
  let customer_parse_local=(!localStorage.getItem("customersList"))?[]:JSON.parse(localStorage.getItem("customersList"));
  displayCustImg.innerHTML=` <img src="/img/${customer_parse_local[popCustImg].img}" style="border-radius: 10px;" width="80%" alt="">
  <div class="h4">
   ${customer_parse_local[popCustImg].name}
  </div>`;
}
  