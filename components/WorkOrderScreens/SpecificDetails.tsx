import Link from 'next/link';

export const SpecificDetails = (props: any) => {
  const specificsAsArray = Object.entries(props.specifics);
  const filterNulls = specificsAsArray.filter(
    ([, value]) => value != null
  );
  const specifics = filterNulls.filter(([key]) => key != 'order_id');
  const skus = props.specifics.skus;
  const pics = props.specifics.pics;

  return (
    <>
      <h2 className="mt-3">Specific Order Details</h2>
      <ul>
        <li> --- </li>
        {!pics ? null : <h2>Customer Pictures</h2>}
        {!pics ? null : (
          <ul>
            {pics.map((url: any, index: any) => (
              <li key={index}>
                Image {index + 1} -{' '}
                <Link
                  href={url}
                  className="text-blue-700 no-underline hover:underline"
                >
                  Click to download
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
      {!skus ? null : skus.length > 0 ? <h3>SKU(s)</h3> : null}
      <ul className="mb-3">
        {skus
          ? skus.map((sku: any, i: number) => {
              return <li key={i}>{sku}</li>;
            })
          : null}
      </ul>
      <h3>More Order Detail</h3>
      {specifics.map((specific) =>
        specific[0] == 'skus' || specific[0] == 'pics' ? null : (
          <p>
            <b>{specific[0]}:</b> {specific[1]}
          </p>
        )
      )}
    </>
  );
};
