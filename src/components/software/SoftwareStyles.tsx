"use client";

export default function SoftwareStyles() {
  return (
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }

      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes spin-slow-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
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

      @keyframes slideInFromTop {
        from {
          opacity: 0;
          transform: translateY(-30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInFromBottom {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
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

      @keyframes matrix-fall {
        0% {
          opacity: 0;
          transform: translateY(-100px);
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(100vh);
        }
      }

      .animate-slideInLeft {
        animation: slideInFromLeft 0.8s ease-out forwards;
      }

      .animate-slideInRight {
        animation: slideInFromRight 0.8s ease-out forwards;
    }

      .animate-slideInUp {
        animation: slideInFromTop 0.8s ease-out forwards;
      }

      .animate-slideInDown {
        animation: slideInFromBottom 0.8s ease-out forwards;
      }

      .animate-fadeIn {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-matrix-fall {
        animation: matrix-fall linear infinite;
      }
    `}</style>
  );
}