import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import HeaderForm from "../HeaderForm/HeaderForm";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <Header></Header>
      <HeaderForm></HeaderForm>
    </Container>
  );
};

export default Home;
