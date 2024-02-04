import { GridControls, ProductGrid } from '@/components/catalog/client';

export default function Home() {
  return (
    <>
      <div className="container px-4 mx-auto">
        <header className="container flex justify-end">
          <GridControls></GridControls>
        </header>

        <section>
          <ProductGrid></ProductGrid>
        </section>

        <section></section>
      </div>
    </>
  );
}
