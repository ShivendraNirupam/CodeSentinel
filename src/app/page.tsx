import { Button } from "@/components/ui/button";
import { HealthCheck } from "@/components/ui/health-check";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div>
        <h1>Welcome to aicodereview</h1>
        <p>Start reviewing your code today</p>
      </div>
      <div>
        <Button asChild>
          <Link href={"/sign-in"}>Login</Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-up"}>signup</Link>
        </Button>
      </div>
      <HealthCheck />
    </div>
  );
}
