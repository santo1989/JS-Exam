
function magicAction()
{
    let inputs = document.querySelectorAll('.inputs');
    console.log(inputs[1].checked);
  

}
let inputs = document.querySelectorAll(".inputs");

for(let i = 0;i<inputs.length;i++)
{
    let title = document.getElementById('title');
   let text = document.getElementById('text');
   let button = document.getElementById('button');
   let img = document.getElementById('img');
   let header = document.getElementById('header');
   let footer = document.getElementById('footer');
   let card = document.getElementById('main_card');
   
//    console.log(textElement);
    inputs[i].addEventListener('change', function() {
        if(inputs[0].checked) {
          title.setAttribute('class','text card-title d-block');
        } else {
            title.setAttribute('class',' card-title d-none');
        }
        if(inputs[1].checked) {
            text.setAttribute('class','text card-text d-block');
          } else {
            text.setAttribute('class','card-text d-none');
          }
          if(inputs[2].checked) {
            button.setAttribute('class','text btn btn-primary d-block');
          } else {
            button.setAttribute('class','btn btn-primary d-none');
          }
          if(inputs[3].checked) {
            img.setAttribute('class',' img-fluid d-block');
          } else {
            img.setAttribute('class',' img-fluid d-none');
          }
          if(inputs[4].checked) {
            header.setAttribute('class','text card-header text d-block')
          } else {
            header.setAttribute('class','card-header text d-none');
          }
          if(inputs[5].checked) {
            footer.setAttribute('class','text card-footer d-block');
          } else {
            footer.setAttribute('class',' card-footer d-none');
          }
          
          if(inputs[6].checked) {
            let textElement =  document.querySelectorAll('.text');
            
            for(let i = 0; i<=textElement.length;i++)
            {
                try{
                    textElement[i].classList.add('text-center');
                    
                }catch(err)
                {

                }
                
            }
          } else {
            let textElement =  document.querySelectorAll('.text');
            for(let i = 0; i<=textElement.length;i++)
            {
                try{textElement[i].classList.remove('text-center');}catch(err){}
            }
          }
          if(inputs[7].checked) {
            card.setAttribute('class','card py-5 card_id mx-auto w-75 border border-success')
            } else {
                card.setAttribute('class','card py-5 card_id mx-auto w-75')
            }
          if(inputs[8].checked) {
            let textElement =  document.querySelectorAll('.text');
            
            for(let i = 0; i<=textElement.length;i++)
            {
                try{
                    textElement[i].classList.add('text-white');
                }
                catch(err)
                {
                   
                }
            }
          } else {
            let textElement =  document.querySelectorAll('.text');
            
            for(let i = 0; i<=textElement.length;i++)
            {
                try{
                    textElement[i].classList.remove('text-white');
                }catch(err)
                {

                }
            }
          }
        card.style.backgroundColor = inputs[9].value;
        codes = document.querySelectorAll('.d-block');
        let code_container = document.getElementById('codes_container');
        let codeElements = document.querySelectorAll('.d-block');
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
        const container = document.querySelector('#codes_container');
        removeAllChildNodes(container);
        for(let i=0;i<codeElements.length;i++)
        {
            const p = document.createElement('p');
            const textNode = document.createTextNode(codeElements[i].outerHTML);
            code_container.appendChild(textNode);
            code_container.setAttribute('class','text-danger')
            
        }
        
        
      });
}


// magicAction();
function reset()
{
    let inputs = document.querySelectorAll(".inputs");
    for(let i=0;i<inputs.length;i++)
    {
        if(i==9)
        {
            continue;
        }
        inputs[i].checked = false;
        
    }
    
    let blockElements = document.querySelectorAll('.d-block');
    for(let i=0;i<blockElements.length;i++)
    {
        blockElements[i].classList.add('d-none');
    }
    let card = document.getElementById('main_card');
    inputs[9].value='#ffffff';
    card.style.backgroundColor = inputs[9].value;
    let codeElements = document.querySelectorAll('.d-block');
        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }
    const container = document.querySelector('#codes_container');
    removeAllChildNodes(container);
}