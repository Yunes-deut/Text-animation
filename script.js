let containerEl=document.querySelector('.container');

  const ich=["youtuber","Webentwickler","Designer"]
  let ichIndex=0;
  let ichIndexIndex=0;
  function Karriere(){ 
    containerEl.innerHTML=`<h1> Ich bin ${ich[ichIndex].slice(0,ichIndexIndex)}</h1>`;
    ichIndexIndex++;
    if(ichIndexIndex===ich[ichIndex].length+1){
        ichIndex++;
        ichIndexIndex=0;
    }
    if(ichIndex===ich.length){
      ichIndex=0;
    }
    setTimeout(Karriere,400);
  }
  Karriere();
 