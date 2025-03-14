import SidebarNavigation from '@/app/components/sidebarNavigation/SidebarNavigation';
import About from '@/app/components/about/About';
import GridSection from '@/app/components/gridSection/GridSection';
import TransformLife from '@/app/components/transformLife/TransformLife';
import PeopleNeeds from '@/app/components/peopleNeeds/PeopleNeeds';
import Map from '@/app/components/Map';
import ContactBg from '@/app/components/contact/ContactBg';
import Contact from '@/app/components/contact/Contact';
import Image from 'next/image';
import Link from 'next/link';
import aboutData from '../public/aboutData.json';
import peopleNeeds from '../public/peopleNeeds.json';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen gap-16">
      <SidebarNavigation />
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            width={130}
            height={130}
            alt="Logo"
            className="ml-2"
          />
        </Link>
      </div>
      <About aboutData={aboutData} />
      <GridSection />
      <TransformLife />
      <PeopleNeeds aboutData={peopleNeeds} />
      <Map />
      <ContactBg />
      <Contact />
    </div>
  );
}
