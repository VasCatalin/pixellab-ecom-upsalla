import Link from 'next/link';
import { OffCanvasMenu } from '../client';
import { GiClothes } from "react-icons/gi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";


// consider jsx is a normal data type
const jsxLogo = (
  <span className="logo-ico block aspect-square rounded-full"><GiClothes className='size-10'></GiClothes></span>
);

const jsxSocials = (
  <ul className='socials-ico flex flex-col gap-4'>
    <li>
      <Link href="https://facebook.com" className="blank" target="_blank" title="Facebook">
      <FaFacebookF className='size-5'></FaFacebookF>
      </Link>
    </li>
    <li>
      <Link href="https://twitter.com/" className="blank" target="_blank" title="Twiteer">
      <FaTwitter className='size-5'></FaTwitter>
      </Link>
    </li>
    <li>
      <Link href="https://Google.com" className="blank" target="_blank" title="Google">
      <IoLogoGoogle className='size-5'></IoLogoGoogle>
      </Link>
    </li>
  </ul>
);

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-6">
      {/* forced example */}
      <Link href="/" className="relative z-10">
        {jsxLogo}
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex z-10">
        <li>{jsxSocials}</li>
      </ul>
    </div>
  );
};