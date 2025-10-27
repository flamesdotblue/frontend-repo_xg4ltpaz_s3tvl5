import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg">
      <Spline
        scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 flex items-end p-5 sm:p-6">
        <div className="backdrop-blur-md bg-white/40 border border-white/50 rounded-2xl px-4 py-3 shadow-sm">
          <h1 className="text-slate-800 text-xl sm:text-2xl font-semibold">Your Digital Wallet</h1>
          <p className="text-slate-600 text-sm">Glass-morphic 3D card experience</p>
        </div>
      </div>
    </section>
  );
}
