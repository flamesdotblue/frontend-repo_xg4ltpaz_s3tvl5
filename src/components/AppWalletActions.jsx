import { Plus, CreditCard, Repeat, History } from 'lucide-react';

export default function AppWalletActions({ onAction }) {
  return (
    <div className="mt-5 bg-white border border-slate-200 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-800">App Wallet</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ActionButton icon={<Plus className="w-5 h-5" />} label="Add Money" onClick={() => onAction('add')} />
        <ActionButton icon={<CreditCard className="w-5 h-5" />} label="Pay for Jewellery" onClick={() => onAction('pay')} />
        <ActionButton icon={<Repeat className="w-5 h-5" />} label="Receive Refunds" onClick={() => onAction('refund')} />
        <ActionButton icon={<History className="w-5 h-5" />} label="Transaction History" onClick={() => onAction('history')} />
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
      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">{icon}</div>
      <span className="text-slate-800 font-medium text-sm">{label}</span>
    </button>
  );
}
