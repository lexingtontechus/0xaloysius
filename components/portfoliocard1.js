import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import Image from "next/image";

export async function getStaticProps() {
  const hygraph = new GraphQLClient(
    //"https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master"
    "https://api-us-west-2.hygraph.com/v2/cl9rjy6ab0y3p01uf9ncjg72k/master"
  );

  const { portfolios } = await hygraph.request(
    `
      {
        portfolio(where: {id: "cl9vv0uzgluol0alpdbnqx5ti"}) {
    id
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
export default  ({ portfolios }) =>
  portfolios.map(({ name, description, position, url, logopath }) => (
    <div className="w-full sm:w-1/3 p-4">
      <div className="block p-4 rounded-lg shadow-lg  max-w-sm border-2 border-trueZinc-200 border-solid bg-truePurple-500">
        <h5 className="uppercase text-xl leading-tight font-medium mb-2 py-3">
          {name}
        </h5>
        <div>
          <Image
            className="p-6 bg-cover bg-no-repeat bg-truePurple-500 opacity-50"
            src={logopath}
            height="300"
            width="300"
            layout="responsive"
          />
          <p className="text-trueZinc-100 text-md mb-4">{description}</p>
        </div>
        <div className="border-t border-trueZinc-200 py-3 w-full text-sm text-trueZinc-700 dark:text-trueZinc-100">
          {position}
          <div className="float-right">
            <Link href={url} alt="SAVI" target="_blank">
              <Image src={logopath} width={25} height={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
