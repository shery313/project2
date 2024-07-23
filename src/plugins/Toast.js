import Swal from "sweetalert2"
export const Toast = (icon,title,text)=>{
    const toast=Swal.mixin({
        toast:true,
        showConfirmButton:false,
        position:"center",
        timer:3000,
        timerProgressBar:true
    })
    toast.fire({
        icon:icon,
        title:title,
        text:text
    })
    
}