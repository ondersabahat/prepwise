import Agent from "@/components/Agent";

function Page() {
  return (
    <>
      <h3 className="">Interview Generation</h3>
      <Agent userName="You" userId="user1" type="generate" />
    </>
  );
}

export default Page;
