const form = document.querySelector('.add');
const ul = document.querySelector('ul');
const botoesApagar = document.querySelectorAll('i')
const procura = document.querySelector('.search');

var listaTodos = [];



form.addEventListener('submit', e => {
    e.preventDefault();
    
    ul.innerHTML=ul.innerHTML+`
    <li class="list-group-item d-flex justify-content-between align-items-center">      
    <span>${form.add.value}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `  
    listaTodos.push(form.add.value);  
    form.add.value=""
    console.log(listaTodos)
})


ul.addEventListener('click', e=>{
        if(e.target.tagName == 'I'){

            let li = (e.target).parentElement;
            console.log(li.innerText);

            listaTodos = listaTodos.filter(list => list != li.innerText)
            console.log(listaTodos);
            ul.removeChild(li)
        };                      
})

procura.addEventListener('keyup', e=>{
    e.preventDefault(); 

    const listas = document.querySelectorAll('li');

    listas.forEach( (li)=>{
        console.log(li.innerText) 
        if (!li.innerText.toLowerCase().includes(procura.search.value.toLowerCase())){
            li.classList.add('filtered')
        }else{
            li.classList.remove('filtered')
        }
            
    })

    console.log(procura.search.value)

})





