/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";
// Internacionalización (Intl): Formato a fechas o a monedas
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('es-MX', {
        style: 'currency', 
        currency: 'MXN'
    }).format(price);
    return newPrice;
}
//Conectarnos al servidor
window
    .fetch(url)
    //procesar respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    .then(responseJSON => {
        const todosLosItems = [];
        
        responseJSON.data.forEach(item => {
            //crear imagen
            const imagen = document.createElement('img');
            imagen.src = 'https://platzi-avo.vercel.app' + item.image
            //crear contenedor para los textos
            const textContainer = document.createElement('div');
            //crear título
            const title = document.createElement('h2');
            title.textContent = item.name
            //crear precio 
            const price = document.createElement('p');
            price.textContent = formatPrice(item.price);
            
            //inyectar textos al contenedor de textos
            textContainer.append(title, price);
            textContainer.className = 'text-container'

            //inyecta todos los elementos anteriores en un div
            const container = document.createElement('div');
            container.append(imagen, textContainer);
            container.className = "card";
            todosLosItems.push(container);
        });
        const mainContainer = document.querySelector('#container');

        mainContainer.append(...todosLosItems);
    });





