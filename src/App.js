import React, { Component } from 'react';
import './App.css';
import { FormularioCadastro } from './Components/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import 'fontsource-roboto'


class App extends Component {
 
  render (){
    return (
      <Container component='article' maxWidth='sm'>
      <Typography  align='center' variant='h3' component='h1' >FormularioCadastro</Typography>
      <FormularioCadastro />
      </Container>
    );
  }
  
}

export default App;
