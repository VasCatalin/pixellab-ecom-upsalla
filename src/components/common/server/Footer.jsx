import { Separator } from '@/components/ui/server';
import Link from 'next/link';

const addresses = [
  {
    city: 'Los Angeles',
    adress: '145 oliveshka street losa Bucuresti',
    phone: '+44 558 5558',
    email: 'info@example.com',
  },
  {
    city: 'Los Angeles',
    adress: '145 oliveshka street losa Craiova',
    phone: '+44 558 5558',
    email: 'info@example.com',
  },
  {
    city: 'Los Angeles',
    adress: '145 oliveshka street losa Brasov',
    phone: '+44 558 5558',
    email: 'info@example.com',
  },
];

const socials = [
  'Facebook',
  'Twitter',
  'Linkedin',
  'Behance',
  'Instagram',
  'Dribbble',
  'Pinterest',
];

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-20 flex justify-center items-start gap-5">
        {addresses.map((address, index) => (
          <div
            key={index}
            className="city-details flex justify-center items-start flex-col gap-4"
          >
            <h1>{address.city}</h1>
            <p className="w-44">{address.adress}</p>
            <Link
              type="tel"
              href={`tel:${address.phone}`}
              className="blank"
              title={`Contactează-ne la ${address.phone}`}
            >
              {address.phone}
            </Link>
            <Link
              type="mailto"
              href={`mailto:${address.email}`}
              className="blank"
              title={`Contactează-ne la ${address.email}`}
            >
              {address.email}
            </Link>
          </div>
        ))}

        <div className="follow-us flex flex-col justify-center items-center gap-4">
          <h1>Follow Us</h1>
          <div className="follow-us-socials flex gap-4">
            <section className="flex flex-col gap-2">
              {socials.slice(0, socials.length / 2).map((social, index) => (
                <div key={index}>
                  <span>{social}</span>
                </div>
              ))}
            </section>
            <section className="flex flex-col gap-2">
              {socials.slice(socials.length / 2).map((social, index) => (
                <div key={index}>
                  <span>{social}</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>

      <Separator></Separator>

      <section className="container mx-auto px-4 py-8 flex justify-center">
        sec
      </section>
    </>
  );
};
