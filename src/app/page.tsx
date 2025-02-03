import { Button } from '~/components/atoms/inputs/Button';
import { PrimaryLayout as Layout } from '~/components/templates/layouts/PrimaryLayout';
export default function HomePage() {
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
