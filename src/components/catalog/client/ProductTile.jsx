import Image from "next/image";
import Link from "next/link";


export const ProductTile = (props) => {
    const { product } = props;
    const { title, image, price, id} = product;

    const productUrl = `/products/${id}`;


    return <article className="text-center">
        <header>
            <Link href={productUrl} title={title}>
                <Image width={200} height={200} src={image} alt={`Image for product ${title}`} objectFit="contain" className="inline"></Image>
            </Link>

            <h1><Link href={productUrl} title={title}>
                {title}
                </Link></h1>

                <section></section>
                <footer></footer>
        </header>
    </article>
} 