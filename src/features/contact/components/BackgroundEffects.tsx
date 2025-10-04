export default function BackgroundEffects() {
  return (
    <aside className="absolute inset-0 pointer-events-none">
      <span className="absolute inset-0 bg-gradient-to-br from-cyan-100/5 via-blue-100/3 to-purple-100/5 animate-pulse block"></span>
      <span className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse block"></span>
      <span className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse block" style={{animationDelay: '2s'}}></span>

      {/* Floating elements */}
      <span className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400/40 rounded-full animate-float block"></span>
      <span className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-float block" style={{animationDelay: '0.5s'}}></span>
      <span className="absolute top-1/6 left-1/6 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse block"></span>
      <span className="absolute top-5/6 right-1/6 w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse block" style={{animationDelay: '0.5s'}}></span>
    </aside>
  );
}
