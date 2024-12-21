"use client";
import { useUser } from "@clerk/nextjs";
import Layout from "./components/Layout";
import Headers from "./components/Headers";
import HeroImage from "./components/HeroImage";

export default function Home() {
  const { isSignedIn, user } = useUser();

  console.log(user?.id);

  return (
    <Layout>
      <div className=" h-[120vh]">
        <Headers title={"Free Stock Photos"} />
      </div>
    </Layout>
  );
}
