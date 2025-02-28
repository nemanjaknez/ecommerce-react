import { useEffect, useState } from 'react';
import './Checkbox.css';

const Checkbox = ({ item, index, getCheckedValue }) => {

    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        const newCheckedState = !isChecked;
        
        setIsChecked(newCheckedState);
        getCheckedValue({[item]: newCheckedState});
    }

    return(
        <div className="fileter-item">
            <input 
                type='checkbox'
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
            />
            <label htmlFor={`checkbox-${index}`}>{item}</label>
        </div>
    );
}

export default Checkbox;