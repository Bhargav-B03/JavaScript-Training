import icons from 'url:../../img/icons.svg';

export default class View {
    _data;

    render(data, render = true) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

        // false entry 
        // if (Array.isArray(data) && data.length === 1 && data[0].id == '5ed6604691c37cdc054bd068') return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();

        if (!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        this._data = data;

        // newMarkup is a string of html elements, we need actual html elements to compare to identify change
        const newMarkup = this._generateMarkup();

        // creating a virtual DOM to compare with the existing DOM
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        // selecting all the elements from it
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            // changing value elements
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") {
                // changing the value of element present in DOM
                curEl.textContent = newEl.textContent;
            }

            // changing attribute elements
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr =>
                    curEl.setAttribute(attr.name, attr.value)
                );
            }
        })
    }

    renderSpinner() {
        const markup = `
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
        `;
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
};