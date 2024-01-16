import Button from "@/components/Button";
import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  w-4/5 sm:w-full lg:pt-10 lg:p-0 ">
      {/* <Form /> */}
      <Link href="/form">
        <Button text="Form page" />
      </Link>
    </main>
  );
}
