import BugReportIcon from '@mui/icons-material/BugReport';
import { Button } from '~/common/components/atoms/inputs/Button';
import { PrimaryLayout } from '~/common/components/templates/layouts/PrimaryLayout';
export default function Test() {
  return (
    <PrimaryLayout>
      <h1>texto de Prueba header: 1</h1>
      <h2>texto de Prueba header: 2</h2>
      <h3>texto de Prueba header: 3</h3>
      <h4>texto de Prueba header: 4</h4>
      <h5>texto de Prueba header: 5</h5>
      <h6>texto de Prueba header: 6</h6>
      <div>
        <p>
          Etiqueta P ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eos animi omnis dolor autem consectetur
          veritatis ut, odio sed? Inventore nesciunt sequi adipisci, aut deleniti veritatis odio dolores consequatur ipsa?
        </p>
      </div>
      <div>
        <strong>
          Etiqueta Strong ---- Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem dolores nemo sequi quos nam, facere
          inventore praesentium consequuntur atque.
        </strong>
      </div>
      <div>
        <span> Etiqueta Span ----Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nemo.</span>
      </div>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">ola</Button>
      <Button variant="text">text</Button>
      <Button icon color="secondary">
        <BugReportIcon />
      </Button>
    </PrimaryLayout>
  );
}
