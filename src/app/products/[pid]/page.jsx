import { redirect } from 'next/navigation';

const getProduct = async (productId) => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);

  return (
    <div className="container px-4 ms-auto">
      <header></header>
      <section>product: {productId}</section>
      <section>{JSON.stringify(product)}</section>
    </div>
  );
}
