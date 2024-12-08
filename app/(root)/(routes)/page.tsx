'use client'

import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal(state => state.onOpen)
  const isOpen = useStoreModal(state => state.isOpen)

  useEffect(() => {
    if(!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

    return null;
      // <div className="p-4">
      //   Root Page
      //   <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
      //     Children
      //   </Modal>
      // </div>
    
  }

export default SetupPage



  