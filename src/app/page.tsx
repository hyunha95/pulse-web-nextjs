import { Button } from "@/components/ui/button";
import HomePage from "./(nav)/HomePage";
import NavLayout from "./(nav)/layout";

export default function RootPage() {
  return (
    <NavLayout>
      <HomePage />
    </NavLayout>
  );
}
