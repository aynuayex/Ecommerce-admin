// "use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import prismadb from "@/lib/prismadb";
import { useEffect } from "react";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  //   const onClose = useStoreModal((state) => state.onClose);
  //   const isOpen = useStoreModal((state) => state.isOpen);

  //   useEffect(() => {
  //     if (isOpen) {
  //       onClose();
  //     }
  //   }, [isOpen, onClose]);
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <p>active store: {store?.name}</p>
    </>
  );
};

export default DashboardPage;
