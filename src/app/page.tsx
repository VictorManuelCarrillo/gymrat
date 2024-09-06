import { Text } from "~/components/common/atoms/data-display/Text";
import {PrimaryLayout} from "~/components/common/templates/layout";
export default function HomePage() {
  return (
    <PrimaryLayout>
      <Text>TextComponent listo :D</Text>
      <div style={{height: '20000px'}}></div>
    </PrimaryLayout>
  );
}
