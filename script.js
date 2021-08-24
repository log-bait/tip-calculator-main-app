// formula for percentage
// console.log((p/100)*x)
const fivepercent = document.querySelector('#five');
const tenpercent = document.querySelector('#ten');
const fifteenpercent = document.querySelector('#fifteen');
const twtfive = document.querySelector('#twentyfive');
const fiftypercent = document.querySelector('#fifty');
const bill = document.querySelector('#formbill');
const people = document.querySelector('#formpeople');
const reset = document.querySelector('#reset');
let tip = document.querySelector('#tip');
let total =document.querySelector('#total');
const textinfo = document.querySelector('.textinfo');
const custom = document.querySelector('#custum');


custom.addEventListener('submit', (e)=>{
    e.preventDefault();
    const valuecust = document.querySelector('#cust').value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;
const result = ((valuecust/100)*bill).toFixed(2);
console.log(result)
if(isNaN(person) || person < 1){
    textinfo.innerHTML= `<p>can not be zero</p>`
  }else{
      tip.innerHTML = `$${(result/person).toFixed(2)}`;
      total.innerHTML = `$${(bill/person).toFixed(2)}`;
   }
    // const custvalue = custom.input;
    // console.log(valuecust);
})

reset.addEventListener('click', ()=>{
    people.reset();
    bill.reset();
custom.reset();
tip.innerHTML=`<p>$0.00</p>`
total.innerHTML=`<p>$0.00</p>`
})
bill.addEventListener('submit', (e)=>{
    e.preventDefault();
})
people.addEventListener('submit', (e)=>{
    e.preventDefault();
})

fivepercent.addEventListener('click', ()=>{
    const five = fivepercent.value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;
  const result = ((five/100)*bill).toFixed(2);
  if(isNaN(person) || person < 1){
      textinfo.innerHTML= `<p>can not be zero</p>`
    }else{
        tip.innerHTML = `$${(result/person).toFixed(2)}`;
        total.innerHTML = `$${(bill/person).toFixed(2)}`;

     }
})


tenpercent.addEventListener('click', ()=>{
    const ten = tenpercent.value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;
    const result = (ten/100)*bill;
    if(isNaN(person) || person < 1){
        textinfo.innerHTML= `<p>can not be zero</p>`
      }else{
          tip.innerHTML = `$${(result/person).toFixed(2)}`;
          total.innerHTML = `$${(bill/person).toFixed(2)}`;
  
       }
  })


  fifteenpercent.addEventListener('click', ()=>{
    const fifteen = fifteenpercent.value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;
    const result = (fifteen/100)*bill;
    if(isNaN(person) || person < 1){
        textinfo.innerHTML= `<p>can not be zero</p>`
      }else{
          tip.innerHTML = `$${(result/person).toFixed(2)}`;
          total.innerHTML = `$${(bill/person).toFixed(2)}`;
  
       }
  })

  twtfive.addEventListener('click', ()=>{
    const twentyfive = twtfive.value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;

    const result = (twentyfive/100)*bill;
    if(isNaN(person) || person < 1){
        textinfo.innerHTML= `<p>can not be zero</p>`
      }else{
          tip.innerHTML = `$${(result/person).toFixed(2)}`;
          total.innerHTML = `$${(bill/person).toFixed(2)}`;
  
       }
  })

  fiftypercent.addEventListener('click', ()=>{
    const fifty = fiftypercent.value;
    const bill = document.querySelector('#bill').value;
    const person =document.querySelector('#people').value;

    const result = (fifty/100)*bill;
    if(isNaN(person) || person < 1){
        textinfo.innerHTML= `<p>can not be zero</p>`
      }else{
          tip.innerHTML = `$${(result/person).toFixed(2)}`;
          total.innerHTML = `$${(bill/person).toFixed(2)}`;
  
       }
  })
