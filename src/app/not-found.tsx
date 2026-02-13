import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-105px)] bg-violet-100 dark:bg-slate-700 flex-center">
      <div className="flex-center flex-col gap-4 p-8 rounded-md border border-red/50 shadow-lg shadow-green/20">
        <h2 className="text-2xl font-bold ">Not Found</h2>
        <p className="italic">Could not find requested resource</p>
        <Button asChild variant={"outline"} >
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
