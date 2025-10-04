export default function ContactStyles() {
  return (
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }

      @keyframes slideInFromLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInFromRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .animate-slideInLeft {
        animation: slideInFromLeft 0.8s ease-out forwards;
      }

      .animate-slideInRight {
        animation: slideInFromRight 0.8s ease-out forwards;
      }

      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `}</style>
  );
}
