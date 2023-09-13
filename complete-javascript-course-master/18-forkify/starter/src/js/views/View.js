import icons from 'url:../../img/icons.svg'

export default class View {
    _data;

    /**
     * 将接收到的对象渲染在DOM上
     * @param {Object | Object[]} 这是将被渲染的数据
     * @param {boolean} [render = true] 如果为false，将创建食谱字符串
     * @returns {undefined | string} A markup string is returned if render = false
     * @this {Object} View instance
     * @author Lex Sium
     * @todo Finish implementation
     * */

    render(data) {
        if (!data || Array.isArray(data.results) && data.results.length === 0) return this.renderError()
        this._data = data
        const markup = this._generateMarkup()
        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    update(data) {
        if (!data || Array.isArray(data.results) && data.results.length === 0) return this.renderError()
        this._data = data
        const newMarkup = this._generateMarkup()

        const newDOM = document.createRange().createContextualFragment(newMarkup)
        const newElements = Array.from(newDOM.querySelectorAll('*'))
        const curElements = Array.from(this._parentElement.querySelectorAll('*'))


        newElements.forEach((newEl, i) => {
            const curEl = curElements[i]

            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                console.log(curEl)
                curEl.textContent = newEl.textContent
            }

            if (!newEl.isEqualNode(curEl))
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value))
        })


    }

    _clear() {
        this._parentElement.innerHTML = ``;
    }

    renderSpinner() {
        const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
    `;

        this._parentElement.innerHTML = ``
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
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
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }
}