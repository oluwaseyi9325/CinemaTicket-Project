// aud.innerHTML=`<audio controls  autoplay loop > <source  src="/m1.mp3" type="audio/mp3" >  </audio>`;
 
const loginCust=()=>{
  let getCustLoginDetails = JSON.parse(localStorage.getItem('customersList'));
  getCustLoginDetails.forEach((loginDetails )=> {
    if ((loginEmail.value==loginDetails.email&&loginPws.value==loginDetails.password)) {
     
      loginInfoEnter.style.display='none';
    enterBtn.style.display='block';
    ticketIdValue.value=`SeYi${Math.floor(Math.random() * 1000000) + 1}Ad${Math.floor(Math.random() * 100) + 1}TeQ`;
    }
  });

 
  
}

// function copiedBtn() {
//   let ticket =document.querySelector() ticketIdValue;
//   ticket.select();
//   document.execCommand('copy');
// }

const EnterHall = () => {
  let getDateReg = new Date();
  let ticketArray;
  let getTicketStore=(!localStorage.getItem('ticketFolders'))?[]:JSON.parse(localStorage.getItem('ticketFolders'));
  ticketArray=getTicketStore;
  let ticketObj={
    email:loginEmail.value,
    id:ticketIdValue.value,
    Tokens:777,
    date:`${getDateReg.getDate()} / 0${getDateReg.getMonth()+1} / 22`,
      time:`(${getDateReg.getHours()}:${getDateReg.getMinutes()})`,
      coinUsed:2000,
      raminscoin:50
  }
  ;
  let promHall= prompt('Enter your ticket Id Here !!!');
  // let getTicketIdFromLocal= JSON.parse(localStorage.getItem('ticketFolders'));
  // getTicketIdFromLocal.forEach((IDS,i) => {
  //   if (promHall==ticketIdValue.value) {
  //     alert('good')
  //   }
  // });
  if (promHall!=ticketIdValue.value) {
    alert('Wrong Ticket ID')
    roomHall.style.display='none';
  }else{
    roomHall.style.display = "block";
  }
  ticketArray.push(ticketObj);
  localStorage.setItem('ticketFolders',JSON.stringify(ticketArray));
  // ${entering}.vis
  entering.style.display = "none";
 
  cinemaBackground.style.backgroundColor = "blue";
};
let getlocaDetails = JSON.parse(localStorage.getItem("cinema_Details_text"));
cinemaName.innerHTML = getlocaDetails[0].tet;
cinema_Name.innerHTML = getlocaDetails[0].tet;
welcomeMeassageFromAdmin.innerHTML = getlocaDetails[0].welMs;
let giflocal = localStorage.getItem("cinema_Details_gif");
let bdglocal = localStorage.getItem("cinema_Details_bdg");
gifimg.src = `/img/${giflocal}`;
cinemaBackground.style.backgroundImage = `url(/img/${bdglocal})`;

const checkBook = () => {
  if (confirm('Are you done with your bookings ?')) {
    bookModal.style.display='block';
  notification_message.style.display = "none";
  }
};
const closeBtnBook=()=>{
  bookModal.style.display='none';
  notification_message.style.display = "block";
}
const printTicket=()=>{
 window.print();
}

const chr = () => {
  
  let chrlocal = localStorage.getItem("cinema_Details_chr");
  let chrNumber = localStorage.getItem("Number_chairs");
  let book_ck_local;
  let solveBok_chairs_prob = !localStorage.getItem("bkNum")
    ? []
    : JSON.parse(localStorage.getItem("bkNum"));
  book_ck_local = solveBok_chairs_prob;
  for (let i = 0; i < chrNumber; i++) {
    if (i + 1 == book_ck_local[0]) {
     
      continue;
    } else if (i + 1 == book_ck_local[1]) {
      continue;
    } else if (i + 1 == book_ck_local[2]) {
      continue;
    }else if(i+1== book_ck_local[3]){
      continue;
    }else if (i+1== book_ck_local[4]) {
      continue;
    }else if (i+1== book_ck_local[5]) {
      continue;
    }else if (i+1== book_ck_local[6]) {
      continue;
    }else if (i+1== book_ck_local[7]) {
      continue;
    }else if (i+1== book_ck_local[8]) {
      continue;
    }else if (i+1== book_ck_local[9]) {
      continue;
    }else if (i+1== book_ck_local[10]) {
      continue;
    }
    // }else if (i+1!=book_ck_local[8]){
    //  continue;
    // }

    
  // }
    dispChairs.innerHTML += ` <span id="yy"  onclick="bk(${i})" class="bg-danger"><img src="/img/${chrlocal}"  alt="" class="mb-5" style="border:5px solid grey; border-radius:10px; border-left:solid blue; border-right:solid green; border-bottom:solid brown;"> <span class='bg-primary p-1' style="border-radius:10px;">${
      1 + i
    }</span></span> `;
  }
};
chr();

function bk(bookStatus) {
  
   if (typeTokens.value) {
    window.location.reload();
    let chrNumber = localStorage.getItem("Number_chairs");
  let book_ck_local;
  let solveBok_chairs_prob = !localStorage.getItem("bkNum")
    ? []
    : JSON.parse(localStorage.getItem("bkNum"));
  book_ck_local = solveBok_chairs_prob;
  if (book_ck_local.length >=10) {
  
    alert(`You can't book more than 5 sit`);
   
  }else{
      alert(`You booked sit ##${bookStatus+1}`);
      let minusSitBooked=chrNumber-1;
      localStorage.setItem('Number_chairs',minusSitBooked);
  }


   
  let chrArray;
  if (!localStorage.getItem("bkNum")) {
    chrArray = [];
  } else {
    chrArray = JSON.parse(localStorage.getItem("bkNum"));
  }
  chrArray.push(`${bookStatus + 1}`);
  localStorage.bkNum = JSON.stringify(chrArray);}

  // sitNUm.innerHTML=3;
  // let chrlocal=localStorage.getItem('cinema_Details_chr');
  yy.innerHTML = `<img src="/img/chr3.jpg"  alt="" class="mb-5" style="border:5px solid grey; border-radius:10px; border-left:solid blue; border-right:solid green; border-bottom:solid brown;">`;
  //    alert(`you book ${bookStatus+1}`);
}

const getTokensBtn = () => {
  chat_sec.style.display = "block";
  notification_message.style.display = "none";
};
let chrlocal = localStorage.getItem("cinema_Details_chr");
let book_ck_local;
    let solveBok_chairs_prob = !localStorage.getItem("bkNum")
      ? []
      : JSON.parse(localStorage.getItem("bkNum"));
    book_ck_local = solveBok_chairs_prob;

for (let i = 0; i < book_ck_local.length; i++) {
  chrBooked.innerHTML += `<img src="/img/${chrlocal}" class="mr-4 mt-3" width="10%" alt=""></img> `;
  if (i==2) {
      break;
  }
}

// tickID.disabled=true;
// let pp=prompt('Please Type your Ticket Id');
// if (pp=='ade') {
//   alert('good')
// }else{
//   alert('coem')
// }
  const ticketBtn=()=>{
    let validBookingArray;
    if (! localStorage.getItem('ticketIDS')) {
      validBookingArray=[];
    }else{
      validBookingArray=JSON.parse( localStorage.getItem('ticketIDS'))
    }
    let getDateReg = new Date();
    let validObj={
      email:ticEmail.value,
      ticId:Math.floor(Math.random() * Date.now()),
      sitBookNum:3,
      date:`${getDateReg.getDate()} / 0${getDateReg.getMonth()+1} / 22`,
      time:`(${getDateReg.getHours()}:${getDateReg.getMinutes()})`,
      coinUsed:2000,
      raminscoin:50
    }
    validBookingArray.push(validObj);
    if (ticEmail.value) {
      localStorage.setItem('ticketIDS',JSON.stringify(validBookingArray));
    }
    // let ticketUUid=Math.floor(Math.random() * Date.now());
    // tickID.value=ticketUUid;
   
      // let book_ck_local;
      // let solveBok_chairs_prob = !localStorage.getItem("bkNum")
      //   ? []
      //   : JSON.parse(localStorage.getItem("bkNum"));
      // book_ck_local = solveBok_chairs_prob;
      // for (let i = 0; i < book_ck_local.length; i++) {
      //     booked_number.innerHTML+=`${book_ck_local[i]},`
          
      // }
     
      
}


const clrBook=()=>{
    localStorage.removeItem('bkNum');
}
// let tokensArray=[];
const sendMessage=()=>{

 if ( textArea.value==1) {
   typeOne.innerHTML=2;
   typeStatus.innerHTML=`<i>To countinues !!!</i>`;
 }else if (textArea.value==2&&typeOne.innerHTML==2) {
  typeOne.innerHTML=3;
  typeStatus.innerHTML=`<i>To countinues !!!</i>`;
 }else if (textArea.value==3&&typeOne.innerHTML==3) {
  typeOne.innerHTML='??';
  typeStatus.innerHTML=`<i>Please Enter the Number of sit you need !!!</i>`;
 }else if (textArea.value&&typeOne.innerHTML=='??') {
  typeOne.innerHTML=textArea.value;
  typeStatus.innerHTML=`<i>Press "generate" to load tokens</i>`;
 }else if (textArea.value=='generate') {
  
  let tokens=`##${Math.floor(Math.random() * 1900) + 1}??`;
  yourTokens.innerHTML=` <span class="p-3" style="background-color: black; border-radius: 10px;">${tokens}</span> Please copy your Tokens for Bookings`;
  typeStatus.innerHTML=`<i>SIt booked</i>`;
  let tokensArray;
  let getTokensStore=(!localStorage.getItem('TokensFolders'))?[]:JSON.parse(localStorage.getItem('TokensFolders'));
  tokensArray=getTokensStore;
  let tokensObj={
    tyepeone:`${typeOne.innerHTML}`,
    tok:`${tokens}`,
    id:`${ticketIdValue.value}`
  }
  tokensArray.push(tokensObj)
  localStorage.setItem('TokensFolders',JSON.stringify(tokensArray))
  // localStorage.setItem('TokensFolders',`${typeOne.innerHTML} ${tokens} ${ticketIdValue.value}`)
 }else{
   alert(`You can't procedure with this,Please check the number your type!!`);
 }
};

const bookedSpaceBtn=()=>{
  let tokensBox = typeTokens.value;
  alert(tokensBox);
}