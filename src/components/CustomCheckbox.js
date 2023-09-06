import { useField } from 'formik';
import React from 'react'

const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props.name);
    return (
        <>
            <div className="checkbox">
                <input {...field} {...props} className={meta.touched && meta.error ? 'input-error' : ''} />
                <span>I accept the terms of service.</span>
            </div>
            {meta.touched && meta.error && <p className="error">{meta.error}</p>}
        </>
    )
}

export default CustomCheckbox