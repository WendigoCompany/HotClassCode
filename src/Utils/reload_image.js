export default function ReloadImage(e, url) {
    let giveUp = 0;
    const max = 30;

    setTimeout(() => {
        console.log("Fallo al cargar... Volviendo a intentar");
        e.target.src = "";
        e.target.src = url;
        e.target.onload = () => {
            console.log("Recarga exitosa.");
        };
    }, 500)
}

