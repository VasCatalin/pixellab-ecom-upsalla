import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CgMenu } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1023px)').matches,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' &&
          window.matchMedia('(max-width: 1023px)').matches,
      );
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="menu-ico relative z-10"
      >
        {open ? <CgMenu size={32} /> : <IoMdClose size={32} />}
      </button>

      <nav
        className={`${
          isMobile
            ? open
              ? '-translate-y-full'
              : 'translate-y-0 opacity-100'
            : open
            ? '-translate-x-full'
            : 'translate-x-0 opacity-100'
        } bg-neutral-900 text-white w-full h-dvh fixed top-0 left-0 z-0 lg:w-1/3 transition-transform duration-300 ease-in-out`}
      >
        <ul
          className={` ${
            open ? 'opacity-0' : 'opacity-100 delay-300'
          } menu flex flex-col gap-3 justify-center items-center h-full`}
        >
          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact-us">
              Contact-us
            </Link>
          </li>

          <li>
            <Link href="/" title="Abaut-us">
              Abaut-us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
