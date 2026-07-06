// ─────────────────────────────────────────────────────────────
//  Technology — In-House Products & Systems
// ─────────────────────────────────────────────────────────────
import imgSoftware      from './technology/In-House Software.jpeg';
import imgWifi          from './technology/Wi-Fi Smart Controllers.jpeg';
import imgMobileApp     from './technology/Mobile App Control.jpeg';
import imgUSB           from './technology/USB Show Controller.jpeg';
import imgPC            from './technology/PC-Based Control System.jpeg';
import imgIsolator      from './technology/Dedicated Isolator Unit.jpeg';
import imgControlPanel  from './technology/In-House Control Panel Manufacturing.jpg';
import imgLED           from './technology/RGB-RGBW LED Light Manufacturing.jpeg';
import imgCustom        from './technology/Custom Manufacturing.jpeg';

export const techItems = [
  {
    title: 'In-House Software',
    desc: 'Proprietary fountain control software for precise synchronization of water, lighting, music, and special effects.',
    image: imgSoftware,
    icon: 'monitor',
  },
  {
    title: 'Wi-Fi Smart Controllers',
    desc: 'Smart Wi-Fi controllers with mobile app control, remote monitoring, scheduling, and diagnostics.',
    image: imgWifi,
    icon: 'wifi',
  },
  {
    title: 'Mobile App Control',
    desc: 'Operate, monitor, schedule, and configure fountain shows remotely using our dedicated mobile application.',
    image: imgMobileApp,
    icon: 'phone',
  },
  {
    title: 'USB Show Controller',
    desc: 'Standalone controller that runs pre-programmed fountain shows directly from a USB drive for simple and reliable operation.',
    image: imgUSB,
    icon: 'usb',
  },
  {
    title: 'PC-Based Control System',
    desc: 'Advanced PC-controlled platform for programming, live operation, and complete synchronization of water, lighting, music, and multimedia effects.',
    image: imgPC,
    icon: 'desktop',
  },
  {
    title: 'Dedicated Isolator Unit',
    desc: 'Dedicated hardware unit providing safe electrical and signal isolation between controllers and power panels for enhanced reliability and protection.',
    image: imgIsolator,
    icon: 'shield',
  },
  {
    title: 'In-House Control Panel Manufacturing',
    desc: 'Custom-built electrical control panels designed and manufactured in-house for reliable fountain automation and power management.',
    image: imgControlPanel,
    icon: 'panel',
  },
  {
    title: 'RGB/RGBW LED Light Manufacturing',
    desc: 'In-house manufacturing of high-performance RGB and RGBW LED fountain lights engineered for underwater applications with exceptional brightness, energy efficiency, and long service life.',
    image: imgLED,
    icon: 'light',
  },
  {
    title: 'Custom Manufacturing',
    desc: 'In-house manufacturing of custom fountain components and equipment tailored to meet project-specific requirements.',
    image: imgCustom,
    icon: 'cog',
  },
];

// ─────────────────────────────────────────────────────────────
//  Gallery — All Media Items
// ─────────────────────────────────────────────────────────────
import gImg1  from './gallary/diamond cut.jpg';
import gImg2  from './gallary/dome 2mdia.jpg';
import gImg3  from './gallary/Dome 3mdia.jpg';
import gImg4  from './gallary/dome-fountain-713.jpg';
import gImgFill from './gallary/fill gap.jpeg';
import gImg5  from './gallary/IMG20210622200308_00.jpg';
import gImg6  from './gallary/IMG20230502185406_01.jpg';
import gImg7  from './gallary/IMG20230502185411_01.jpg';
import gImg8  from './gallary/IMG20230502185444_01.jpg';
import gImg9  from './gallary/IMG20230502185505_01.jpg';
import gImg10 from './gallary/IMG20230502190007_01.jpg';
import gImg11 from './gallary/IMG20230502190151_01.jpg';
import gImg12 from './gallary/IMG20230502190330_01.jpg';
import gImg13 from './gallary/IMG20230502190518_01.jpg';
import gImg14 from './gallary/IMG20230502190559_01.jpg';
import gImg15 from './gallary/IMG20230823230802.jpg';
import gImg16 from './gallary/IMG20230823230903.jpg';
import gImg17 from './gallary/IMG20240305192520.jpg';
import gImg18 from './gallary/IMG20240305193004.jpg';
import gImg19 from './gallary/IMG20250925003759.jpg';
import gVid1  from './gallary/VID20220311203413.mp4';
import gVid2  from './gallary/VID-20241016-WA0012.mp4';

export const mediaItems = [
  { type: 'image', src: gImg1  },
  { type: 'image', src: gImg2  },
  { type: 'image', src: gImg3  },
  { type: 'image', src: gImg4  },
  { type: 'image', src: gImgFill },
  { type: 'image', src: gImg5  },
  { type: 'image', src: gImg6  },
  { type: 'image', src: gImg7  },
  { type: 'image', src: gImg8  },
  { type: 'image', src: gImg9  },
  { type: 'image', src: gImg10 },
  { type: 'image', src: gImg11 },
  { type: 'image', src: gImg12 },
  { type: 'image', src: gImg13 },
  { type: 'image', src: gImg14 },
  { type: 'image', src: gImg15 },
  { type: 'image', src: gImg16 },
  { type: 'image', src: gImg17 },
  { type: 'image', src: gImg18 },
  { type: 'image', src: gImg19 },
  { type: 'video', src: gVid1  },
  { type: 'video', src: gVid2  },
];

// ─────────────────────────────────────────────────────────────
//  Services
// ─────────────────────────────────────────────────────────────
import sImg1 from './services/Musical Dancing Fountain.jpeg';
import sImg2 from './services/Multimedia laser show.jpeg';
import sImg3 from './services/Floating Fountains.jpeg';
import sImg4 from './services/Still fountain.jpeg';
import sImg5 from './services/Water curtains.jpeg';
import sImg6 from './services/Interactive Fountains.png';

export const serviceItems = [
  {
    title: 'Musical Dancing Fountain',
    desc: 'Symphonic water, light, and music choreographies that draw crowds and elevate property prestige.',
    image: sImg1,
  },
  {
    title: 'Multimedia Laser Show',
    desc: 'High-impact 3D graphics and animations projected onto grand water screens for civic events.',
    image: sImg2,
  },
  {
    title: 'Floating Fountains',
    desc: 'Heavy-duty, self-adjusting lake systems that enhance resort aesthetics while naturally aerating the water.',
    image: sImg3,
  },
  {
    title: 'Still Fountain',
    desc: 'Classic, steady-flow architectural installations bring timeless luxury and calm to executive lobbies.',
    image: sImg4,
  },
  {
    title: 'Water Curtains',
    desc: 'Splash-free vertical water walls using specialized guide ropes for silent, elegant interior partitions.',
    image: sImg5,
  },
  {
    title: 'Interactive Play Fountains',
    desc: 'Safe, flush-to-ground water plazas with smart sensors designed for public parks and family resorts.',
    image: sImg6,
  },
];
