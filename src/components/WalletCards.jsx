import { Wallet, Coins } from 'lucide-react';

export default function WalletCards({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      <button
        onClick={() => onSelect('metal')}
        className={`group relative overflow-hidden rounded-2xl p-4 text-left transition-all border ${
          selected === 'metal' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'
        } bg-white hover:shadow-md`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${selected === 'metal' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
            <Coins className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Gold/Silver</p>
            <p className="font-semibold text-slate-800">Metal Wallet</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-slate-500">Holdings</p>
          <p className="text-slate-800 font-semibold">₹ 1,24,500</p>
        </div>
      </button>

      <button
        onClick={() => onSelect('app')}
        className={`group relative overflow-hidden rounded-2xl p-4 text-left transition-all border ${
          selected === 'app' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'
        } bg-white hover:shadow-md`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${selected === 'app' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-slate-500">Balance</p>
            <p className="font-semibold text-slate-800">App Wallet</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-slate-500">Available</p>
          <p className="text-slate-800 font-semibold">₹ 8,750</p>
        </div>
      </button>
    </div>
  );
}
