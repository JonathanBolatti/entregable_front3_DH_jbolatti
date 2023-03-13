import React, { useState } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card } from './Card';
import { H1, ButtonForm } from '../assets/Style/StyleComponents'

export const FormRegister = () => {

    const [click, setClick] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    const { values, errors, handleSubmit, handleChange, handleReset } = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: '',
            password: '',
            repeatPassword: ''
        },

        validationSchema: Yup.object({

            name: Yup.string()
                .trim("No se permiten espacios en blanco")
                .strict().min(3, "El minimo son 3 caracteres")
                .required("EL nombre es obligatio")
                .matches(/^[aA-zZ\s]+$/, "No se permiten numeros ni caracteres especiales"),

            lastname: Yup.string()
                .min(6, "El minimo son 6 caracteres")
                .required("El apellido es obligatorio")
                .matches(/^[aA-zZ\s]+$/, "No se permiten numeros ni caracteres especiales"),

            email: Yup.string()
                .email("No es un email valido")
                .required("El email es obligatorio"),

            password: Yup.string()
                .required("La contraseña es obligatoria"),

            repeatPassword: Yup.string()
                .required("La contraseña es obligatoria")
                .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")

        }),

        onSubmit: (formData) => {
            console.log(formData);
            setIsFormValid(true);
        }
    })

    const handleClick = () => {
        setClick(true)
    }

    const handleResetCard = () => {
        setIsFormValid(false);
        setClick(false)
    }

    const handleResetCardAndFormFields = () => {
        handleReset();
        handleResetCard();
    }

    return (

        <Container>

            <H1>Registro Usuario</H1>
            <Form autoComplete = "off" style={{ width: "35%", margin: "auto" }}
                onSubmit={handleSubmit}
            >

                <Form.Input 
                    type="text"
                    placeholder="Ingresa tu Nombre"
                    name="name"
                    onChange={handleChange}
                    error={errors.name}
                    value={values.name}
                />
                <Form.Input
                    type="text"
                    placeholder="Ingresa tu Apellido"
                    name="lastname"
                    onChange={handleChange}
                    error={errors.lastname}
                    value={values.lastname}
                />
                <Form.Input
                    type="text"
                    placeholder="Ingresa tu Email"
                    name="email"
                    onChange={handleChange}
                    error={errors.email}
                    value={values.email}
                />
                <Form.Input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    onChange={handleChange}
                    error={errors.password}
                    value={values.password}
                />
                <Form.Input
                    type="password"
                    placeholder="Repite tu contraseña"
                    name="repeatPassword"
                    onChange={handleChange}
                    error={errors.repeatPassword}
                    value={values.repeatPassword}
                />

                <ButtonForm>
                    <Button style={{ background: "none", color: "#FFFFFF" }} type="submit" onClick={handleClick}>Registrar</Button>
                </ButtonForm>

                <ButtonForm>
                    <Button style={{ background: "none", color: "#FFFFFF" }} type="button" onClick={handleResetCardAndFormFields} >Limpiar campos</Button>
                </ButtonForm>

            </Form>

            {click && isFormValid &&
                <Card
                    name={values.name}
                    lastname={values.lastname}
                    email={values.email}
                />
            }
        </Container>

    )
}
