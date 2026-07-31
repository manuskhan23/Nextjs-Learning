import FilterUsers from "@/components/FilterUsers";

type User = {
  id: number;
  name: string;
  username: string;
};

const page = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await data.json();

  return (
    <div>
      <p>page</p>
      <FilterUsers users={users} />
    </div>
  );
};

export default page;