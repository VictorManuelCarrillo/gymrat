import { PrimaryLayout } from '~/common/components/templates/layout';
import { Button } from '~/common/components/atoms/input/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Carousel } from '~/common/components/organisms/Slider';
import { Img } from '~/common/components/atoms/data-display/Image';

const imageList = [
  { src: '/assets/logo/logo1.png', alt: 'Logo 1', width: 500, height: 500 },
  { src: '/assets/images/image1.png', alt: 'Logo 1', width: 500, height: 500 },
  { src: '/assets/images/image2.png', alt: 'Logo 1', width: 500, height: 500 },
  { src: '/assets/images/image3.png', alt: 'Logo 1', width: 500, height: 500 },

];

export default function HomePage() {
  return (
    <PrimaryLayout>
      <Carousel images={imageList} height='50vh'/>
      <Button type='contained'>ola</Button>
      <Button type='outlined'>ola</Button>
      <Button type='text'>ola</Button>
      <Button type='icon'><LightModeIcon/></Button>
      <Img 
        src="/assets/logo/logo1.png" 
        alt="Logo" 
        height={{xs: '50vh'}}
        width={'500px'}
        priority={true}
      />
    </PrimaryLayout>
  );
}
