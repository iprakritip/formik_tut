import { useField } from 'formik';
import React from 'react'

const CustomSelect = ({label,...props}) => {
    const [field, meta] = useField(props.name);
  return (
    <>
    <label>{label}</label>
    <select {...field} {...props} className={meta.touched && meta.error?'input-error':''}/>
    {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  )
}

export default CustomSelect