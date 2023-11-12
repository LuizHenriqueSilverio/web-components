class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card_left');

        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous");

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title');
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card_right');

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('card-image') || '../../assets/img/default-photo.jpg';
        newsImage.alt = 'Foto da noticia';

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement('style');

        style.textContent = `
            .card_right > img {
                max-width: 250px;
            }

            .card {
                width: 720px;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card_left > span {
                font-weight: 400;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card_left > p{
                color: gray;
            }
        `;

        return style;
    }
}

customElements.define('card-news', CardNews);