import Swal from "sweetalert2";

function SwalError(errors){

  const defaultMessage = "Infelizmente tivemos um problema. Por favor, contate um administrador."

  Swal.fire({
    icon: "error",
    title: "Oh, não! :(",
    text: errors || defaultMessage,
  })
}

export default SwalError;