import { Img } from '~/components/atoms/surfaces/Img';

export default function TestPage() {
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', maxWidth: '80px', aspectRatio: '1/1' }}>
        <Img src="/img/image.png" alt="Imagen responsive" priority />
      </div>
    </div>
  );
}
