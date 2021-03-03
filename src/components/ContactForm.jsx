
import React, { useState } from 'react'
import UserValidator from '../data/UserValidator'


const ContactForm = ({ handleSendContact }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        comments: ""
    })

    const [errors, setErrors] = useState({ name: [], email: [], phone: [], comments: [] })

    const { name, email, phone, comments } = user

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

        setErrors({
            ...errors,
            [e.target.name]: []
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const [isInvalidForm, errors] = UserValidator.validate(user)
        if (isInvalidForm){
            setErrors(errors)

        } else {
            setUser({ name: "", email: "", phone: "", comments: "" })
            handleSendContact(user)
        }
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input value={ name } maxLength="80" name="name" onChange={handleInputChange} type="text" className={`form-control ${ errors.name.length > 0 ? "is-invalid" : null }`} />
                    <div className="invalid-feedback">
                        {errors.name.map(error => (
                            error
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Correo electrónico</label>
                    <input value={ email } maxLength="80" name="email" onChange={handleInputChange} type="text" className={`form-control ${ errors.email.length > 0 ? "is-invalid" : null }`} />
                    <div className="invalid-feedback">
                        {errors.email.map(error => (
                            error
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Teléfono de contacto</label>
                    <input value={ phone } maxLength="10" name="phone" onChange={handleInputChange} type="text" className={`form-control ${ errors.phone.length > 0 ? "is-invalid" : null }`} />
                    <div className="invalid-feedback">
                        {errors.phone.map(error => (
                            error
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Comentarios</label>
                    <span className="counter_letters">{ comments.length }/250</span>
                    <textarea value={ comments } maxLength="250" name="comments" onChange={handleInputChange} className={`form-control ${ errors.comments.length > 0 ? "is-invalid" : null }`} />
                    <div className="invalid-feedback">
                        {errors.comments.map(error => (
                            error
                        ))}
                    </div>
                </div>

                <input type="submit" className="btn btn-outline-dark btn-block" />
            </form>
        </div>
    )
}

export default ContactForm