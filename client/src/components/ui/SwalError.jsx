import Swal from "sweetalert2";

function SwalError(message){
  Swal.fire({
    icon: "error",
    title: "Oh, não! :(",
    text: `Infelizmente tivemos um problema. Por favor, contate um administrador. error: ${message}`,
  })
}

export default SwalError;