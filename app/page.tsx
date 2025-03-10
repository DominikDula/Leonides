import SidebarNavigation from '@/app/components/SidebarNavigation';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SidebarNavigation></SidebarNavigation>
      <div>
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
    </div>
  );
}
