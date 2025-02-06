// import { Img } from '~/components/atoms/surfaces/Img';
import { Navbar } from '~/components/organisms/Navbar';

export default function TestPage() {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: '5000px' }} />
      {/* <div style={{ position: 'relative', width: '100%', maxWidth: '80px', aspectRatio: '1/1' }}>
        <Img src="/img/image.png" alt="Imagen responsive" priority />
      </div> */}
    </div>
  );
}
