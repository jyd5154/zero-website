import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-4">
      <div>
        <Image
          src="/favicon.ico" // Replace with your logo path
          alt="Logo"
          width={144}
          height={144}
          className="rounded-full" // Circular logo
        />
      </div>
    </div>
  );
}
