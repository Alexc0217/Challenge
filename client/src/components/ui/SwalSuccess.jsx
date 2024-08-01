import Swal from "sweetalert2";

function SwalSuccess(message){
  Swal.fire({
    icon: "success",
    title: "Sucesso! :)",
    text: message || "Solicitação executada com sucesso.",
  })
}

export default SwalSuccess;