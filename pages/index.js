import Image from "next/image";

export default function Index() {
  return (
    <div>
      <Image src="/logo.png" alt="VoidInfinity logo" width={22} height={22} />
      &nbsp;
      Welcome to VoidInfinity!
    </div>
  );
}
