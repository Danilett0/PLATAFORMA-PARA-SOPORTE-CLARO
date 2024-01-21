
import toastr from "toastr";
import "toastr/build/toastr.min.css";


export const copyToClipboard = (e) => {
    navigator.clipboard
      .writeText(e.target.innerText)
      .then(() => {
        toastr.success("Texto copiado al portapapeles");
      })
      .catch((err) => console.error("Error al copiar el texto: ", err));
  };