import { PrimaryLayout } from "~/common/components/templates/layout";
import { Button } from "~/common/components/atoms/input/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Card } from "~/common/components/atoms/surfaces/Card";
import Autocomplete from "~/common/components/atoms/surfaces/atocompletar";




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
 type="complex"
 title="protein"
 subtitle="proteina de chocolate "
 image="assets/images/protein/protein.png"
 description=" esta proteina te ara ponerte mamadisimo !"

/>
    <Autocomplete/>
    </PrimaryLayout>
  );
}
