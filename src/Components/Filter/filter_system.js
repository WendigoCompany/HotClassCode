import girls from "../../DB/manifiest.en.json"
import { create_html, replace_html } from "../../Utils/html";

export const Filter_Func=(e)=>{

    console.clear()

    // const element = create_html('option' , {value: 'perro', textContent: 'perroi'})
    // replace_html([element], document.getElementById("droplist"))


    const select = document.getElementById("droplist");
    let  tags = [];
    girls.map(g => g.tags.map(t => (tags.indexOf(t) == -1) ? (tags.push(t)) : ("")))
   let tags_filtred = tags.filter(t => t.toString().toLowerCase().replaceAll(" ", "").includes(e.target.value.replaceAll(" ", "").toLowerCase()));

    let elements = [];
    if(tags_filtred.length > 0){
        tags_filtred.map(t => elements.push(create_html('option' , {value: t, textContent: t})))
    }else{
        tags.map(t => elements.push(create_html('option' , {value: t, textContent: t})))
    }
    replace_html(elements,select )

    select.focus()

    //     setTimeout(() => {
  
    //         select.size = select.length; 
    //     }, 0);

    // select.addEventListener('blur', () => {
    //     select.size = 1; // Restablece el tamaño
    // });



    

    
}   