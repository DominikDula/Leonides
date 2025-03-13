import SidebarNavigation from '@/app/components/SidebarNavigation';
import About from '@/app/components/About';
import GridSection from '@/app/components/GridSection';
import TransformLife from '@/app/components/TransformLife';
import PeopleNeeds from '@/app/components/PeopleNeeds';
import Image from 'next/image';
import Link from 'next/link';
import aboutData from '../public/aboutData.json';
import peopleNeeds from '../public/peopleNeeds.json';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 gap-16">
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
    </div>
  );
}
