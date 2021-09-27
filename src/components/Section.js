
export class Section {
    constructor({items, renderer}, selectorToPut) {
        this._items = items
        this._rederer = renderer
        this._selectorToPut = selectorToPut
    }

    renderItems() {
        this._items.forEach((card) => {
            this._rederer(card)
        });
    }

    appendItem(element) {
        this._selectorToPut.append(element)
    }

    prependItem(element) {
        this._selectorToPut.prepend(element)
    }


}