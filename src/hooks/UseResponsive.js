import { useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export function useResponsiveDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useBreakpointValue(
    { base: false, md: true },
    { ssr: false }
  );
  //material UI ----> const isDesktop = useMediaQuery('(min-width: 860px)')

  const navigate = useNavigate();

  const openDetail = useCallback(
    (product) => {
      if (isDesktop) {
        setIsOpen(true);
      } else {
        navigate(`/product/${product._id}`);
      }
    },
    [isDesktop, navigate]
  );

  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onClose, openDetail, isDesktop };
}
