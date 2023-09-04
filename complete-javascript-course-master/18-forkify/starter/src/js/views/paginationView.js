import View from "./View.js";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination')

    addHandlerClick(handler){
        this._parentElement.addEventListener('click',function (e) {
            const btn = e.target.closest('.btn--inline')

            const goToPage = +btn.dataset.goto

            handler(goToPage)
        })
    }

    _generateMarkup() {
        // 渲染页面
        const curPage = this._data.page
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)

        if (curPage === 1 && numPages > 1) {
            return this._getPaginationButton(curPage,'next')
        }

        if (curPage === numPages && numPages > 1) {
            return this._getPaginationButton(curPage,'last')
        }

        if (curPage < numPages) {
            return this._getPaginationButton(curPage,'all')
        }

        return this._getPaginationButton(curPage)
    }

    _getPaginationButton(curPage,type = ''){
        if(type === 'last'){
            return `
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
            `
        }
        if(type === 'next'){
            return `
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${curPage + 1}</span>
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `
        }
        if(type === 'all'){
            return `
                <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${curPage - 1}</span>
                </button>
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${curPage + 1}</span>
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `
        }
        return 'only 1 page'
    }

}

export default new PaginationView()