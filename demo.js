let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('Enter Name of Student');
    namasteBtn.textContent='Roll no.1 : '+name;
}