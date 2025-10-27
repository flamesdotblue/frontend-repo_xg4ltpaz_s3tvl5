import { useState } from 'react';
import Hero from './components/Hero';
import WalletCards from './components/WalletCards';
import MetalActions from './components/MetalActions';
import AppWalletActions from './components/AppWalletActions';

function App() {
  const [selectedWallet, setSelectedWallet] = useState('metal'); // 'metal' | 'app'
  const [metal, setMetal] = useState('gold'); // 'gold' | 'silver'

  const handleMetalAction = (action) => {
    alert(`${action.toUpperCase()} ${metal.toUpperCase()}`);
  };

  const handleAppAction = (action) => {
    alert(`App Wallet: ${action.toUpperCase()}`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-md px-4 py-5">
        <Hero />

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-800">View Wallets</h2>
            <div className="flex gap-2 bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setSelectedWallet('metal')}
                className={`px-3 py-1.5 text-sm rounded-lg transition ${
                  selectedWallet === 'metal' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
                }`}
              >
                Gold/Silver
              </button>
              <button
                onClick={() => setSelectedWallet('app')}
                className={`px-3 py-1.5 text-sm rounded-lg transition ${
                  selectedWallet === 'app' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
                }`}
              >
                App Wallet
              </button>
            </div>
          </div>

          <WalletCards selected={selectedWallet} onSelect={setSelectedWallet} />

          {selectedWallet === 'metal' ? (
            <MetalActions metal={metal} onMetalChange={setMetal} onAction={handleMetalAction} />
          ) : (
            <AppWalletActions onAction={handleAppAction} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
