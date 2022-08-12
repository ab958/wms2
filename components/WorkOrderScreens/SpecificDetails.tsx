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
      <h2>Specific Order Details</h2>
      <ul>
        <li> --- </li>
        {!pics ? null : <h3>Customer Pictures</h3>}
        {!pics ? null : (
          <ul>
            {pics.map((url: any, index: any) => (
              <li key={index}>
                Image {index + 1} - <Link href={url}>Link</Link>
              </li>
            ))}
          </ul>
        )}
      </ul>
      {!skus ? null : skus.length === 1 ? (
        <h3>SKU</h3>
      ) : (
        <h2>SKUs</h2>
      )}
      <ul className="mb-3">
        {skus
          ? skus.map((sku: any, i: number) => {
              return (
                <li key={i}>
                  {i + 1} {sku}
                </li>
              );
            })
          : null}
      </ul>
      {specifics.map((specific) =>
        specific[0] == 'skus' || specific[0] == 'pics' ? null : (
          <li key={specific[0]}>
            {specific[0]}: {specific[1]}
          </li>
        )
      )}
    </>
  );
};
