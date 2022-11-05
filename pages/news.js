import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    //"https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master"
    "https://api-us-west-2.hygraph.com/v2/cl9rjy6ab0y3p01uf9ncjg72k/master"
  );

  const { portfolios } = await hygraph.request(
    `
      {
        portfolios {
    name
    position
    url
    description
    logopath
    
  }
      }
    `
  );

  return {
    props: {
      portfolios,
    },
  };
}

export default ({ portfolios }) =>
  portfolios.map(({ name, description, position, url, logopath }) => (
    <div className="px-6" key={name}>
      <Link
        href="https://sunsetventures.nft"
        target="_blank"
        alt="Sunset Ventures"
      >
        <Image
          alt="Sunset Ventures"
          src={logopath}
          //https://storageapi.fleek.co/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/logo-sunset.svg
          className="shadow-lg rounded-full mx-auto max-w-120-px"
          height={150}
          width={150}
        />
      </Link>
      <div className="pt-16 text-center">
        <h5 className="text-xl font-bold text-trueZinc-700 dark:text-trueZinc-100">
          {position}
        </h5>
        <p className="mt-1 text-sm text-trueZinc-700 dark:text-trueZinc-100 uppercase font-semibold">
          {name}
        </p>
        <div className="mt-6">
          <Link
            href="https://linkedin.com/company/sunsetventuresinc"
            target="_blank"
            alt="Sunset Ventures| LinkedIn"
          >
            <button
              className="bg-truePurple-600 text-trueZinc-100 w-10 h-10 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              LinkedIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  ));
