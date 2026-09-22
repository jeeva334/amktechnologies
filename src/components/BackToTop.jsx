import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: visible ? 1 : 0,
      scale: visible ? 1 : 0.7,
      pointerEvents: visible ? 'auto' : 'none',
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [visible]);

  return (
    <button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed z-40 bottom-6 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center shadow-soft opacity-0"
    >
      <ArrowUp size={20} />
    </button>
  );
}
