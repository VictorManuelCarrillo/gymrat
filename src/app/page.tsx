import { Button } from '~/shared/components/atoms/inputs/Button';
import { PrimaryLayout as Layout } from '~/shared/components/templates/layouts/PrimaryLayout';
export default function Home() {
  return (
    <Layout>
      {/* Banner section ____________________________________________________________________________________ */}
      <div className="text-primary flex justify-center">
        <p>hola mundo</p>
      </div>
      <Button variant="contained" className="bg-red-500">
        hola button
      </Button>
    </Layout>
  );
}
