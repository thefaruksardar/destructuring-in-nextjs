import axios from "axios";
import Link from "next/link";

const getAuthors = async () => {
  const res = await axios("https://dummyjson.com/users?limit=10");

  const { users } = await res.data;
  return users;
};

export default async function Page() {
  const authors = await getAuthors();

  return (
    <section className="bg-white flex flex-col gap-3">
      {authors.map((author) => (
        <div className="bg-white border inline-block py-3 text-center">
          <p>
            {author.firstName} {author.lastName}
          </p>
          <Link href={`mailto:${author.email}`} className="text-blue-500">
            {author.email}
          </Link>
          <p>{author.phone}</p>
        </div>
      ))}
    </section>
  );
}
