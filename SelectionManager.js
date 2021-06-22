export class SelectionManager {
    constructor(initialSelection = [], onChange = () => {
    }) {
        this.onChange = onChange;
        this.initialSelection = initialSelection;
        this.reset();
    }

    triggerChange() {
        this.onChange(this.selected);
    }

    getSelection() {
        return this.selected;
    }

    select(obj) {
        this.selected = [...this.selected, obj];
        this.triggerChange();
    }

    deselect(obj) {
        this.selected = _.filter(this.selected, item => item !== obj);
        this.triggerChange();
    }

    override(selection) {
        this.selected = selection;
        this.triggerChange();
    }

    clear() {
        this.selected = [];
        this.triggerChange();
    }

    isSelected(obj) {
        return this.selected.indexOf(obj) !== -1;
    }

    reset() {
        this.selected = this.initialSelection;
        this.triggerChange();
    }

}
