"use client";
import { Alert } from "~/common/components/atoms/input/Alert";
import { Snackbar } from "~/common/components/atoms/input/Snackbar";
import { PrimaryLayout } from "~/common/components/templates/layout";
import { Button } from "~/common/components/atoms/input/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Card } from "~/common/components/atoms/surfaces/Card";
import { AlertTitle, Container } from "@mui/material";
import { Children } from "react";

export default function HomePage() {
  const handleClose = (event: React.SyntheticEvent) => {
    console.log("Alerta cerrada");
  };
  return (
    <PrimaryLayout>
      <div>
          <Snackbar message="soy el mejor papa" actionLabel="Cerrar"/> 
    </div>     
    
    <Alert 
      severity="info" variant="filled" color="warning"  > que paso master</Alert>
    
      <Button type="contained">ola</Button>
      <Button type="outlined">ola</Button>
      <Button type="text">ola</Button>
      <Button type="icon">
        <LightModeIcon />
      </Button>
      <Container
        maxWidth={"xl"}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo dte css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
        <Card
          title="este es el titulo de la card de prueba para el manejo de css"
          type="complex"
          image="/assets/logo/logo1.png"
          subtitle="este es el subtitlle de la card para el manejo de css y su deiseño responsive perrevergues"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi modi eos at, sapiente dicta labore in doloremque veritatis iusto eum unde quaerat officia doloribus corrupti nemo assumenda laborum similique expedita explicabo enim commodi quidem. Optio, aut modi! Possimus nihil vitae dicta? Sint temporibus nulla harum ipsa adipisci iste recusandae, odit rem aliquid maxime accusamus praesentium quidem dignissimos mollitia, tempore repudiandae consectetur eos nostrum eaque, tenetur maiores ipsam ratione placeat optio."
        />
      </Container>
    </PrimaryLayout>
  );
}
