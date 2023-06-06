import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export function FormularioCadastro() {
    return (
        <form>
            <TextField margin='normal' id="nome" label="Nome" variant="outlined" fullWidth />

            <TextField margin='normal' id="sobrenome" label="Sobrenome" variant="outlined" fullWidth />

            <TextField margin='normal' id="cpf" label="CPF" variant="outlined" fullWidth />
            
            <FormControlLabel label="Promoções" control={<Switch name='promoções' defaultChecked color='primary' />} />
            <FormControlLabel label="Novidades" control={<Switch name='Novidades' defaultChecked color='primary' />} />


            <Button variant='contained' color='primary' type='submit'>Cadastrar</Button>
        </form>
    )

}

