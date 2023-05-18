interface Detail {
  name: string;
}

export default function Detail({ name }: Detail) {
  console.log(name);
  return <></>;
}

export function getServerSideProps({ query }: { query: Detail }) {
  const name = query.name;
  return {
    props: { name },
  };
}
