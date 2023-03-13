import React from 'react'

import { TextCard, H2, H3, Span, CardContanier } from '../assets/Style/StyleComponents'


export const Card = (props) => {
    return (
       
         <CardContanier>
            <TextCard>
                <H2> ¡ Bienvenido {props.name} {props.lastname} !</H2>
                <H3> Te enviamos un correo electrónico a <Span> {props.email} </Span>  para confirmar tu cuenta!</H3>
            </TextCard>
        </CardContanier>


    )
}
