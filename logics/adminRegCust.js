// let customrersName = nameCust.value;
// let customrersEmail = emailCust.value;
// let customrersPassword_first = passwordCust_1.value;
// let customrersPassword_comfirm = passwordCust_2.value;
// let customer_get_local = localStorage.getItem("customersList");
// let customer_parse_loca
//   ADMIN REGISTER CUSTOMERS
// let getComName;
// if (!localStorage.getItem('cinema_Details_text')) {
//   getComName=[];
// }else{
//    getComName= JSON.parse(localStorage.getItem('cinema_Details_text'));
// }
// getComName[0].tet=cinemaName.innerHTML;


const adminRegCust = () => {
  let customrersName = nameCust.value;
  let customrersEmail = emailCust.value;
  let customrersPassword_first = passwordCust_1.value;
  let customerImage=imgCust.value;
  let getDateReg = new Date();
  let customer_get_local = localStorage.getItem("customersList");
  let customer_Array;
  let conditionCustReg = !customer_get_local
    ? []
    : JSON.parse(customer_get_local);
  customer_Array = conditionCustReg;
  let custObj = {};
  (custObj.name = customrersName),
    (custObj.email = customrersEmail),
    (custObj.password = customrersPassword_first),
    (custObj.img=customerImage.slice(12)),
    custObj.dateReg=`${getDateReg.getDate()} / 0${getDateReg.getMonth()+1} / 22 (${getDateReg.getHours()}:${getDateReg.getMinutes()})`;
    customer_Array.push(custObj);
    (customrersName&&customrersEmail&&customrersPassword_first&&customerImage) &&(customrersPassword_first==passwordCust_2.value)?localStorage.setItem("customersList", JSON.stringify(customer_Array)):alert('no');
  loadCustomersLis();
};
// LOAD CUSTOMERS LIST FOR ADMINc
const loadCustomersLis = () => {
  let listCust = "";
  let custLength = "";
  let get_local_cust;
  let customer_parse_local= (!localStorage.getItem("customersList"))? []: JSON.parse(localStorage.getItem("customersList"));
  get_local_cust=customer_parse_local;
  get_local_cust.forEach((custFunstion, i) => {
    listCust += `
     <tr>
     <td>${i + 1}</td>
     <td>${custFunstion.name}</td>
     <td>${custFunstion.email}</td>
     <td>${custFunstion.dateReg}</td>
   </tr>
     `;
  });
  customersList_table.innerHTML = listCust;
  custLength = get_local_cust.length;
  custTotal.innerHTML = custLength;
};
loadCustomersLis();

//  REG STAFF LIST
const adminRegStaff = () => {
  let staffName = nameStaff.value;
  let staffEmail = emailStaff.value;
  // let getDateReg = new Date();
  let staffPassword_first = passwordStaff_1.value;
  let staff_get_local = localStorage.getItem("staffList");
  let staff_Array;
  let conditionstaffReg = !staff_get_local ? [] : JSON.parse(staff_get_local);
  staff_Array = conditionstaffReg;
  let staffObj = {};
  (staffObj.name = staffName),
    (staffObj.email = staffEmail),
    (staffObj.password = staffPassword_first),
    staff_Array.push(staffObj);
    (staffName&&staffEmail&&staffPassword_first)&&(staffPassword_first==passwordStaff_2.value)?
  localStorage.setItem("staffList", JSON.stringify(staff_Array)): alert('Please fill the required area and with correct password');
  loadStaffLis();
};

// LOAD CUSTOMERS LIST FOR ADMINc
const loadStaffLis = () => {
  let listStaff = "";
  let staffLength = "";
  let get_local_staff;
  let staff_parse_local= (!localStorage.getItem("staffList"))? []: JSON.parse(localStorage.getItem("staffList"));
    get_local_staff=staff_parse_local;
  get_local_staff.forEach((staffFunstion, i) => {
    listStaff += `
     <tr>
     <td>${i + 1}</td>
     <td>${staffFunstion.name}</td>
     <td>${staffFunstion.email}</td>
     <td>12/04/2022</td>
   </tr>
     `;
  });
  staffList_table.innerHTML = listStaff;
  staffLength = get_local_staff.length;
  staffTotal.innerHTML = staffLength;
};
loadStaffLis();


const send_chairs=()=>{
  let chairsNumFrom_local=localStorage.getItem('Number_chairs');
 let numChairSet=enter_chairs_num.value;
//  let condChairsNum= numChairSet ? 
  if (numChairSet) {
    localStorage.setItem('Number_chairs', Number(chairsNumFrom_local)+ Number(numChairSet));
  }
  enter_chairs_num.value='';
  showNumberOfChairs.innerHTML= localStorage.getItem('Number_chairs');
}
send_chairs();

const clear_hall=()=>{
  if (confirm('You are about to clear the Hall !!!')) {
    localStorage.removeItem('Number_chairs');
  send_chairs();
  }
}


