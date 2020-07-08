export default class Clima {
    static semana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    
    static atualizarDia() {
        const dia = this.semana[new Date().getDay()];
        const abbr = document.querySelector('.weather .day');
        abbr.title = dia;
        abbr.textContent = dia.substr(0, 3);
    }
}