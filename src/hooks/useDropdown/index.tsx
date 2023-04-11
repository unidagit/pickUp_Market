import { useEffect, useRef, useState } from "react";

export function useDropdown() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleMyBoxClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    const clickModalOutside = (e: MouseEvent) => {
      const isInside = modalRef.current?.contains(e.target as Node);
      if (open && !isInside) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", clickModalOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", clickModalOutside);
    };
  }, [modalRef, open]);

  return { modalRef, open, handleMyBoxClick };
}
