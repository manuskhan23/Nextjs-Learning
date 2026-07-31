import Image from "next/image";
import Card from "@/components/Card";
import someActions from "@/app/actions/something";

export default function Home() {
  return (
    <>
      <Card title="My Card" description="This is a simple card component." />
      <button onClick={someActions}>Click me</button>
    </>
  );
}
