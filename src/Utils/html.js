
export const replace_html = (childs = [], father) => {
    father.textContent = "";
    console.log(childs);

    childs.map(ch => father.append(ch))
}


export const create_html = (e = "", attrs = {
    className: '',
    id: '',
    textContent: '',
    innerText: '',
    innerHTML: '',
    value: '',
    placeholder: '',
    src: '',
    href: '',
}) => {
    const element = document.createElement(e);

    let specials = [
        'textContent',
        'innerText',
        'innerHTML',
        'value',
        'placeholder',
        'src',
        'href'
    ];

    Object.keys(attrs).map(at => {
        if(specials.indexOf(at) != -1){
            element[at] = attrs[at];
        }else{
            element.setAttribute(at, attrs[at])
        }

        
    })

    return element
}


// export const update_html =(html_elements, father)=>{

// }

