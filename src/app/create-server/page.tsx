import React from "react";
import Header from "@/components/create-server/Header";
import CreateServerForm from "@/components/create-server/CreateServerForm";

function page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <CreateServerForm />
    </div>
  );
}

export default page;
