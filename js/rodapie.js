const rodapie = document.querySelector('body')
rodapie.classList='rodapie'
const content = document.createElement('footer')
content.innerHTML = `
<div class="rodapie-empresa">
<div class="logo-lista">
    <div class="logo">
        <img src="./resource/img/logo.svg" alt="logo">
    </div>
    <div class="lista">
        <li class="lista-item">quienes somos</li>
        <li class="lista-item">politíca de privacidad</li>
        <li class="lista-item">programa de fidelidad</li>
        <li class="lista-item">nuestras tiendas</li>
        <li class="lista-item">quiero ser franquiciado</li>
        <li class="lista-item">anúncie aquí</li>
    </div>
</div>
<div class="contacto">
    <form action="#">
        <label class="contacto-titulo" for="">hable con nosotros</label>
        <input class="contacto-nombre" type="text" placeholder="Nombre">
        <textarea class="contacto-mensaje" name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje"></textarea>
        <button class="contacto-boton">Enviar Mensaje</button>
    </form>
</div>
</div>
<div class="rodapie-desarrollador">
<span class="autor">Desarrollado por <b>Victor Javier Hernandez Mendoza</b> 2023</span>
</div>
`

rodapie.appendChild(content)
console.log(rodapie)
