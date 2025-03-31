import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

async function Page() {
  const user = await getCurrentUser();

  return (
    <>
      <h3 className="">Interview Generation</h3>
      <Agent userName={user?.name} userId={user?.id} type="generate" />
    </>
  );
}

export default Page;
