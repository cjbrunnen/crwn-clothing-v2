import { Fragment, useState } from 'react'

import './form-input.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}
    </div>
  )
}

export default FormInput;
