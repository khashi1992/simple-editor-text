const textarea=document.querySelector('textarea');
const bottomEditor=document.querySelector('#bottomEditor');
const p=document.querySelector('p');
const button=document.querySelectorAll('button');
const leftAligen=document.querySelector('#leftAligen');
const centerAligen=document.querySelector('#centerAligen');
const rigthAligen=document.querySelector('#rigthAligen');
const italic=document.querySelector('#italic');
const bold=document.querySelector('#bold');
const plus=document.querySelector('#plus');
const mines=document.querySelector('#mines');
const pickColor=document.querySelector('#pickColor');
const color=document.querySelector('#color');
const main=document.querySelector('main');
const img=document.querySelector('#img');
const changeBack=document.querySelector('#changeBack');
let count=16;
let flag=0;
//
(function(){
    window.addEventListener('load',(e)=>{
        textarea.focus();
    });
})
// 
button.forEach((index,value)=>{
    index.addEventListener('click',(e)=>{
       index.classList.toggle('btn');
    });
});

// 
textarea.addEventListener('focus',(e)=>{
    bottomEditor.style.border='none';
    textarea.style.border='none';
    textarea.style.outline='none';
});
textarea.addEventListener('blur',(e)=>{
    bottomEditor.style.border='1px solid white';
    bottomEditor.style.borderRadius ='16px';
    let val=textarea.value;
    if(val.length==0){
        p.classList.remove('p');
        p.classList.add('p1');
    }
    p.style.fontSize
});
textarea.addEventListener('click',(e)=>{
    p.classList.add('p');
    p.classList.remove('p1');
});
leftAligen.addEventListener('click',(e)=>{
    if(textarea.value.length>0){
        textarea.style.textAlign='left';
    }
});
centerAligen.addEventListener('click',(e)=>{
    if(textarea.value.length>0){
        textarea.style.textAlign='center';
    }
});
rigthAligen.addEventListener('click',(e)=>{
    if(textarea.value.length>0){
        textarea.style.textAlign='right';
    }
});
italic.addEventListener('click',(e)=>{
    if(textarea.value.length>0){
        textarea.style.fontFamily='italic';
    }if (textarea.value.length>0){
        bold.addEventListener('dblclick',(e)=>{
            textarea.style.fontWeight='normal';
        })
    }
});
bold.addEventListener('click',(e)=>{
    if(textarea.value.length>0){
        textarea.style.fontWeight='bold';
    }if (textarea.value.length>0){
        bold.addEventListener('dblclick',(e)=>{
            textarea.style.fontWeight='normal';
        })
    }
});
plus.addEventListener('click',(e)=>{ 
    let val=textarea.value;
   while(val.length>0){
        ++count;
        textarea.style.fontSize=count+'px';
        console.log(count);
        break;
     }
});
mines.addEventListener('click',(e)=>{ 
    let val=textarea.value;
   while(val.length>0 && count!=0){
        --count;
        textarea.style.fontSize=count+'px';
        console.log(count);
        break;
      
        
     }
});
pickColor.addEventListener('click',(e)=>{
    color.click();
   
    color.addEventListener('change',(e)=>{
        
        let valColor=color.value;
        console.log(valColor);
        textarea.style.color=valColor;
    })
});
changeBack.addEventListener('click',(e)=>{
   
   
    console.log(img);   
    
    
     
   
    while(flag==0 || flag==1){
        
        
       
        console.log(flag);
        
        console.log(flag);
        if(flag==1){
           
            console.log("flag = 1");
            main.classList.toggle('black');    
            img.src='asset/img/icons8-moon-60.png';
            button.forEach(index=>{
                index.classList.toggle('button');
            });
              
         flag=0;  
        }else{
            console.log("flag = 0");
            main.classList.toggle('white');
            img.src='asset/img/icons8-sun-100.png';
        }
        ++flag;
        
        console.log(flag);
        break;
    }
   
   
});