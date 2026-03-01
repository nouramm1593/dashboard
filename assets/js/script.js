let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#sidebar-toggle");

toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right; //الحصول على القيمة المعنية//

    if(window.innerWidth > 767){
        // يتم ازالة المحتوى لأجهزة الحاسوب
     if(sidebarRight == "0px"){
         sidebar.style.right = "-250px"; 
         content.style.marginRight = "0";
     }
         else {
         sidebar.style.right = "0";
             content.style.marginRight = "250px";
         } 
        }
        else {
            if(sidebarRight == "0px") {
                sidebar.style.right = "-250px";
            }
            else {
                sidebar.style.right = "0";
            }
        }
     });

  





// toggle_sidebar.addEventListener("click", () => {
//     // الحصول على العرض الفعلي للشريط الجانبي
//     let sidebarwidth = window.getComputedStyle(sidebar).width;
//     if(sidebarwidth == "250px"){
//         sidebar.style.width = "0"; 
//         content.style.marginRight = "0";  
//     }
//     else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px";
//     }

// });


let messagescontainer = document.getElementById('messages-container');
let messagesarea = document.getElementById('messages-area');
messagescontainer.addEventListener('click' , function(){
    messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block";

});






// new DataTable('#example');



new DataTable('#example', {
    responsive: true,
    buttons: [
        {
            extend: 'copy',
            text: 'نسخ'
        },
        {
            extend: 'excel',
            text: 'اكسل'
        },
        {
            extend: 'pdf',
            text: 'ملف'
        },
        {
            extend: 'print',
            text: 'طباعة'
        },     
    ],
    layout: {
        topStart: 'buttons'
    }
});


