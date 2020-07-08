export default class Sites {
    static obterDados() {
        const dados = [];

        for (let i = 0; i < 10; i++) {
            dados.push({
                src: 'img/arena-war.png',
                alt: 'Arena War'
            });
        }
        
        return dados;
    }

    static criarElementos() {
        const dados = this.obterDados();

        const sitesSection = document.querySelector('.sites');
        const template = sitesSection.querySelector('template');
        const figure = template.content.querySelector('figure');

        for (const key in dados) {
            const figureImportNode = document.importNode(figure, true);
            const img = figureImportNode.querySelector('img');

            const dado = dados[key];

            img.src = dado.src;
            img.alt = dado.alt;

            sitesSection.appendChild(figureImportNode);
        }
    }
}