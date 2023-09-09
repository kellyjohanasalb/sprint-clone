let btns = document.querySelectorAll('.bottom_header_content button');
let status_area = document.querySelector('.status_area');
let calls_area = document.querySelector('.call_area');
let contact_list = document.querySelector('.contact_list');
let community_area = document.querySelector('.community_area');
let chatBtns = document.querySelector('.chatBtns');
let status_btns =document.querySelector('.status_btns');
let callBtns = document.querySelector('.callBtns');
btns.forEach((element) =>{
    element.addEventListener('click', () =>{
        document.querySelector('.active').classList.remove('active');
       if(element.id === "status"){
        status_area.style.left = '0';
        contact_list.style.left = '-100%';
        calls_area.style.left="100%";
        community_area.style.left ="-100%";
        element.classList.add('active');
        chatBtns.style.display = "none";
       status_btns.style.display = "block";
       callBtns.style.display = "none";
       }else if(element.id === "chats"){
        status_area.style.left = '100%';
        contact_list.style.left = '0%';
        calls_area.style.left="100%";
        community_area.style.left ="-100%";
        element.classList.add('active');
        chatBtns.style.display = "block";
        status_btns.style.display = "none";
        callBtns.style.display = "none";
       }else if(element.id === "calls"){
        calls_area.style.left="0";
        status_area.style.left = '-100%';
        contact_list.style.left = '-100%';
        community_area.style.left ="-100%";
        element.classList.add('active');
        chatBtns.style.display = "none";
        status_btns.style.display = "none";
        callBtns.style.display = "block";
       }else{
        calls_area.style.left="100%";
        status_area.style.left = '100%';
        contact_list.style.left = '100%';
        community_area.style.left ="0";
        element.classList.add('active');
        chatBtns.style.display = "none";
        status_btns.style.display = "none";
        callBtns.style.display = "none";
       }
    })
})