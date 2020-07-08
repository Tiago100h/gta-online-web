export default class PublicidadePatrocinada {
    static obterDados() {
        const dados = [];

        for (let i = 0; i < 3; i++) {
            dados.push({
                src: 'img/legendary-motorsport.png',
                alt: 'Legendary Motorsport'
            });
        }
        
        return dados;
    }

    static criarElementos() {
        const dados = this.obterDados();

        const publicidadePatrocinadaSection = document.querySelector('.publicidade-patrocinada');
        const template = publicidadePatrocinadaSection.querySelector('template');
        const figure = template.content.querySelector('figure');

        for (const key in dados) {
            const figureImportNode = document.importNode(figure, true);
            const img = figureImportNode.querySelector('img');
            const figCaption = figureImportNode.querySelector('figcaption');

            const dado = dados[key];

            img.src = dado.src;
            img.alt = dado.alt;
            figCaption.textContent = 'Publicidade Patrocinada';
            figCaption.classList.add('uppercase');

            publicidadePatrocinadaSection.appendChild(figureImportNode);
        }
    }
}