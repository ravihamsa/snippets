export const useSelection = (selectedItems = []) => {
    const [selected, setSelected] = useState(selectedItems);
    const toggle = id => {
        if (selected.indexOf(id) === -1) {
            select(id);
        } else {
            deselect(id);
        }
    };
    const select = (id) => {
        setSelected([...selected, id]);
    };
    const deselect = id => {
        setSelected(_.filter(selected, item => item !== id));
    };

    const override = selectedItems => {
        setSelected(selectedItems);
    };

    const clear = () => {
        setSelected([]);
    };

    return [selected, toggle, select, deselect, override, clear];
};