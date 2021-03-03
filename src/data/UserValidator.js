

class UserValidator {

    static validate(user){

        let isInvalid = false
        const errors = { name: [], email: [], phone: [], comments: [] }

        if (user.name.length <= 0 || user.name.length >= 80){
            errors.name.push("La longitud permitida es 1 - 80 caracteres")
            isInvalid = true
        }

        const expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!expEmail.test(user.email)){
            errors.email.push("El correo electrónico no es correcto")
            isInvalid = true
        }

        if (user.phone.length <= 0){
            errors.phone.push("El número teléfonico no es correcto")
            isInvalid = true
        }

        if (user.comments.length <= 0 || user.comments.length > 250){
            errors.comments.push("La longitud permitida es 1 - 250 caracteres")
            isInvalid = true
        }

        return [isInvalid, errors]
    }

}

export default UserValidator