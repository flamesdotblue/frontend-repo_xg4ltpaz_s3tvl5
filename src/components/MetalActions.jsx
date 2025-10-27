import { Plus, Minus, Gift, Repeat } from 'lucide-react';

export default function MetalActions({ metal = 'gold', onMetalChange, onAction }) {
  return (
    <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-800">{metal === 'gold' ? 'Gold' : 'Silver'} Wallet</h3>
        <div className="flex rounded-xl p-1 bg-slate-100">
          <button
            onClick={() => onMetalChange('gold')}
            className={`px-3 py-1 text-sm rounded-lg ${metal === 'gold' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
          >
            Gold
          </button>
          <button
            onClick={() => onMetalChange('silver')}
            className={`px-3 py-1 text-sm rounded-lg ${metal === 'silver' ? 'bg-white text-slate-900 shadow' : 'text-slate-600'}`}
          >
            Silver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ActionButton icon={<Plus className="w-5 h-5" />} label="Buy" onClick={() => onAction('buy')} />
        <ActionButton icon={<Minus className="w-5 h-5" />} label="Sell" onClick={() => onAction('sell')} />
        <ActionButton icon={<Gift className="w-5 h-5" />} label="Gift / Transfer" onClick={() => onAction('gift')} />
        <ActionButton icon={<Repeat className="w-5 h-5" />} label="Convert to Jewellery" onClick={() => onAction('convert')} />
      </div>
    </div>
  );
}

function ActionButton({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-blue-300 hover:shadow-sm transition"
    >
      <div className="p-2 rounded-lg bg-blue-50 text-blue-600">{icon}</div>
      <span className="text-slate-800 font-medium text-sm">{label}</span>
    </button>
  );
}
