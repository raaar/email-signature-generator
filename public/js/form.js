class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `

        <style>
            @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
        </style>

        <form class="js-form">   
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" class="form-control js-input" data-bind="bind-name">
            </div>


            <div class="form-group">
                <label for="role">Role</label>
                <input id="role" type="text" name="" value="" class="form-control js-input" data-bind="bind-role">
            </div>

            <div class="form-group">
                <label for="mob">Mobile</label>
                <input id="mob" type="text" name="" value="" class="form-control js-input" data-bind="bind-mobile">
            </div>


            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="text" name="" value="" class="form-control js-input js-input-email-link" data-bind="bind-email">
            </div>

            <div class="form-group">
                <label for="linkdin">Linkedin</label>
                <input id="linkdin" type="text" name="" value="" class="form-control js-input-link" data-bind="bind-linkedin">
            </div>

            <button class="btn btn-primary mb-3">Generate</button>
        </form>
        `
    }
    connectedCallback() {

        this.shadowRoot.querySelector(".js-form")
            .addEventListener('submit', this._onSubmit.bind(this));

        this.shadowRoot.querySelector(".js-input-email-link")
            .addEventListener('change', this._onChangeInputEmail.bind(this));

        [...this.shadowRoot.querySelectorAll(".js-input-link")]
            .map(item => item.addEventListener('change', this._onChangeInputLink.bind(this)));

        [...this.shadowRoot.querySelectorAll(".js-input")]
            .map(item => item.addEventListener('change', this._onChange.bind(this)));
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector(".js-form")
            .removeEventListener('submit', this._onSubmit);

        this.shadowRoot.querySelector(".js-input-email-link")
            .removeEventListener('change', this._onChangeInputEmail);


        [...this.shadowRoot.querySelectorAll(".js-input-link")]
            .map(item => item.removeEventListener('change', this._onChangeInputLink));

        [...this.shadowRoot.querySelectorAll(".js-input")]
            .map(item => item.removeEventListener('change', this._onChange));
    }

    _onChange(e) {
        if(!e.currentTarget.dataset.hasOwnProperty('bind')) {
            return;
        }

        const signatureTarget = e.currentTarget.dataset['bind'];
        document.querySelector(`.${signatureTarget}`).textContent = e.target.value;
    }

    _onChangeInputLink(e) {
        if(!e.currentTarget.dataset.hasOwnProperty('bind')) {
            return;
        }

        const inputVal = e.target.value;
        const signatureTarget = e.currentTarget.dataset['bind'];

        document.querySelector(`.${signatureTarget}`).setAttribute('href', inputVal);    
    }

    _onChangeInputEmail(e) {
        if(!e.currentTarget.dataset.hasOwnProperty('bind')) {
            return;
        }

        const inputVal = e.target.value;
        const signatureTarget = e.currentTarget.dataset['bind'];

        document.querySelector(`.${signatureTarget}`).setAttribute('href', `mailto:${inputVal}`);    
    }

    _onSubmit(e) {
        e.preventDefault();
        const html = document.querySelector('.js-form-root').innerHTML;
        document.querySelector('.js-code').innerHTML = html;
    }
}

customElements.define('email-form',Form);