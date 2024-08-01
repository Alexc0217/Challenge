import Swal from "sweetalert2";

function SwalSuccess({message, redirect = null}){
  Swal.fire({
    icon: "success",
    title: "Sucesso! :)",
    text: message || "Solicitação executada com sucesso.",
  }).then(() => {
    if(redirect){
      window.location.href = redirect
    }
  })
}

export default SwalSuccess;