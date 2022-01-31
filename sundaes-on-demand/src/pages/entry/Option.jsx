import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOptions from './ScoopOption';
import Row from 'react-bootstrap/Row';
import ToppingOption from './ToppingOption';

const Options = ({ optionType }) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        let mounted = true;
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((res) => {
                if (mounted) {
                    setItems(res.data);
                }
            })
            .catch((err) => console.log(err));
        return () => (mounted = false);
    }, [optionType]);

    const ItemComponent =
        optionType === 'scoops' ? ScoopOptions : ToppingOption;

    const optionItems = items.map((item) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ));
    return <Row>{optionItems}</Row>;
};
export default Options;
