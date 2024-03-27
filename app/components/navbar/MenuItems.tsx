import Link from 'next/link';
import Image from 'next/image';

const MenuItem = () => {
  return (
    <>
      <nav className="text-lg">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/svg/map.svg" alt="Home" height="25" width="25" />
          </Link>
          <Link href="/">
            <Image src="/svg/box.svg" alt="Info" height="28" width="28" />
          </Link>
          <Link href="/">
            <Image src="/svg/info.svg" alt="Setting" height="25" width="25" />
          </Link>
          <Link href="/">
            <Image src="/svg/setting.svg" alt="Bookmark" height="25" width="25" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MenuItem;
