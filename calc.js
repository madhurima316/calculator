var s= '';
function add(p){
  s+=p;
  document.querySelector('#input').value=s;
}
function delchar(){
  s=s.slice(0,s.length-1);
  document.querySelector('#input').value=s;
}
function calculate(){
  let m= document.querySelector('#input').value;
  var num= [];
  var oper= [];
  let no = '';
  for (let i of m){
    if (!((i==='+')||(i==='-')||(i==='/')||(i==='*')||(i==='**'))){
      no += i;
    }else{
      num.push(parseFloat(no));
      no = '';
      oper.push(i);
    }
  }
  num.push(parseFloat(no));
  operation(num,oper);
  s='';
}

function operation(num,oper){
  for (let j =0; j< oper.length;j++){
    let k= oper[j];
    if (k==='**'){
      num[j]= num[j]**num[j+1];
      num.splice(j+1,1);
      oper.splice(j,1);
    }
  }
  for (let j =0; j< oper.length;j++){
    let k= oper[j];
    if (k==='/'){
      num[j]= num[j]/num[j+1];
      num.splice(j+1,1);
      oper.splice(j,1);
    }
  }
  for (let j =0; j< oper.length;j++){
    let k= oper[j];
    if (k==='*'){
      num[j]= num[j]* num[j+1];
      num.splice(j+1,1);
      oper.splice(j,1);
    }
  }
  for (let j =0; j< oper.length;j++){
    let k= oper[j];
    if (k==='+'){
      num[j]= num[j]+ num[j+1];
      num.splice(j+1,1);
      oper.splice(j,1);
    }
  }
  for (let j =0; j< oper.length;j++){
    let k= oper[j];
    if (k==='-'){
      num[j]= num[j]- num[j+1];
      num.splice(j+1,1);
      oper.splice(j,1);
    }
  }
  document.querySelector('#input').value=num[0];
}

