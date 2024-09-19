import { PrimaryLayout } from "~/common/components/templates/layout";
import { Button } from "~/common/components/atoms/input/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Card } from "~/common/components/atoms/surfaces/Card";

export default function HomePage() {
  return (
    <PrimaryLayout>
      <Button type="contained">ola</Button>
      <Button type="outlined">ola</Button>
      <Button type="text">ola</Button>
      <Button type="icon">
        <LightModeIcon />
      </Button>
      <Card
        type="text"
        image="/assets/images/protein/protein.png"
        title="whey protein"
        subtitle="mamawebo"
        description='esta es un adescripcion de la proteina de tu marido el guamuchil'
        />
        <Card
        type="text"
        title="hola mama huevo"
        />
    </PrimaryLayout>
  );
}
