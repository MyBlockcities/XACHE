import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { 
  Brain, Wallet, ChevronDown, ArrowUpRight, ArrowDownRight,
  Plus, ArrowRight, Bitcoin, Feather as Ethereum, Coins,
  CreditCard, ArrowLeftRight, Ban as Bank, CircleDollarSign,
  ArrowDownToLine, ArrowUpFromLine, History, Search, Filter
} from 'lucide-react';
import NotificationCenter from '../components/NotificationCenter';
import TradeScriptCard from '../components/TradeScriptCard';

const data = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1200 },
  { name: 'Mar', value: 900 },
  { name: 'Apr', value: 1500 },
  { name: 'May', value: 2000 },
  { name: 'Jun', value: 1800 },
  { name: 'Jul', value: 2675.72 }
];

const tradeScriptData = [
  { name: '1', value: 500 },
  { name: '2', value: 520 },
  { name: '3', value: 510 },
  { name: '4', value: 540 },
  { name: '5', value: 560 },
  { name: '6', value: 573.72 }
];

const tradeScripts = [
  {
    id: '1',
    title: 'ALUVA LOW BLEND FOREX - T1',
    balance: 573.72,
    performance: {
      value: 10.33,
      percentage: 6.7,
      isPositive: true
    },
    data: tradeScriptData
  },
  {
    id: '2',
    title: 'BTC-ETH ARBITRAGE - A2',
    balance: 235.26,
    performance: {
      value: 5.12,
      percentage: 3.2,
      isPositive: true
    },
    data: tradeScriptData.map(d => ({ ...d, value: d.value * 0.8 }))
  }
];

function WalletCard({ type, balance, icon: Icon, color, utilized = 0 }) {
  const [displayBalance, setDisplayBalance] = useState(0);
  
  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const increment = balance / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= balance) {
        current = balance;
        clearInterval(timer);
      }
      setDisplayBalance(current);
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [balance]);

  const pieData = [
    { name: 'Utilized', value: utilized },
    { name: 'Available', value: 100 - utilized }
  ];

  return (
    <div className="relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 transform rotate-180 transition-transform duration-1000 group-hover:rotate-0" />
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${color} bg-opacity-20`}>
              <Icon className={`h-6 w-6 ${color}`} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{type}</h4>
              <p className="text-sm text-gray-400">Available Balance</p>
            </div>
          </div>
          <div className="h-16 w-16">
            <PieChart width={64} height={64}>
              <Pie
                data={pieData}
                innerRadius={25}
                outerRadius={32}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill={color.includes('cyan') ? '#22D3EE' : '#A855F7'} />
                <Cell fill="#1F2937" />
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-2xl font-bold text-white">
            ${displayBalance.toFixed(2)} USD
          </div>
          <div className="flex items-center text-green-400 text-sm mt-1">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>+2.4% from last week</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:text-white group">
            <History className="h-4 w-4 mr-2 transform group-hover:rotate-180 transition-transform duration-500" />
            History
          </button>
          <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:text-white group">
            <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            View
          </button>
        </div>
      </div>
    </div>
  );
}

function TransferCard() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300" />
      <div className="relative bg-gray-900 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
              <ArrowLeftRight className="h-6 w-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">Quick Transfer</h4>
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 text-white rounded-lg transition-all duration-300 group">
            <div className="flex items-center">
              <ArrowUpFromLine className="h-5 w-5 mr-3 text-cyan-400 transform group-hover:-translate-y-1 transition-transform duration-300" />
              <span>Transfer to Trade Wallet</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 text-white rounded-lg transition-all duration-300 group">
            <div className="flex items-center">
              <ArrowDownToLine className="h-5 w-5 mr-3 text-purple-400 transform group-hover:translate-y-1 transition-transform duration-300" />
              <span>Transfer to Main Wallet</span>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
            <Bank className="h-4 w-4 mr-2" />
            Deposit
          </button>
          <button className="flex items-center justify-center px-4 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

function TransactionHistory() {
  const transactions = [
    {
      id: '1',
      type: 'Deposit',
      amount: 500,
      status: 'Completed',
      date: '2024-03-15 14:30',
      currency: 'USD'
    },
    {
      id: '2',
      type: 'Trade',
      amount: -100,
      status: 'Completed',
      date: '2024-03-15 12:15',
      currency: 'USD'
    },
    {
      id: '3',
      type: 'Withdrawal',
      amount: -250,
      status: 'Pending',
      date: '2024-03-15 10:00',
      currency: 'USD'
    }
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Transaction History</h3>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              className="bg-gray-800 text-gray-300 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
            <Filter className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="pb-4">Type</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td className="py-4">{tx.type}</td>
                <td className={`py-4 ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount} {tx.currency}
                </td>
                <td className="py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tx.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-4">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-cyan-400" />
              <nav className="ml-10 flex items-center space-x-8">
                <a href="#" className="text-cyan-400">Dashboard</a>
                <a href="#" className="text-gray-300 hover:text-white">Main Wallet</a>
                <a href="#" className="text-gray-300 hover:text-white">Trade Wallet</a>
                <a href="#" className="text-gray-300 hover:text-white">Tokens & NFT</a>
                <a href="#" className="text-gray-300 hover:text-white">CHAOS</a>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <NotificationCenter />
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <ChevronDown className="ml-2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Total Balance */}
        <div className="mb-12">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white">$2,675.72 USD</h2>
              <div className="flex items-center mt-2 text-green-400">
                <ArrowUpRight className="h-5 w-5 mr-1" />
                <span>+$1,235.66 (79%) Past Year</span>
              </div>
            </div>
            <div className="flex space-x-2">
              {['1D', '1W', '1M', '1Y', 'ALL'].map((period) => (
                <button
                  key={period}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    period === '1Y'
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00FFFF" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#00FFFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A202C',
                    border: '1px solid #2D3748',
                    borderRadius: '8px'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00FFFF"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Enhanced Wallets Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <WalletCard
            type="Trade Wallet"
            balance={808.98}
            icon={Wallet}
            color="text-cyan-400"
            utilized={65}
          />
          <WalletCard
            type="Main Wallet"
            balance={1866.74}
            icon={CircleDollarSign}
            color="text-purple-400"
            utilized={30}
          />
          <TransferCard />
        </div>

        {/* Trade Scripts Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Active Trade Scripts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tradeScripts.map((script) => (
              <TradeScriptCard key={script.id} {...script} />
            ))}
          </div>
        </div>

        {/* Current Prices */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <h3 className="text-xl font-semibold text-white mb-6">Current Prices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Bitcoin,
                name: 'Bitcoin',
                amount: '0.015 BTC',
                value: '$734 USD',
                change: '+3.5%',
                color: 'text-orange-400'
              },
              {
                icon: Ethereum,
                name: 'Ethereum',
                amount: '0.42 ETH',
                value: '$892 USD',
                change: '+5.2%',
                color: 'text-purple-400'
              },
              {
                icon: Coins,
                name: 'USDC',
                amount: '1,049.72 USDC',
                value: '$1,049.72 USD',
                change: '0%',
                color: 'text-blue-400'
              }
            ].map((crypto) => (
              <div
                key={crypto.name}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <crypto.icon className={`h-8 w-8 ${crypto.color} mr-3`} />
                  <div>
                    <div className="font-medium text-white">{crypto.name}</div>
                    <div className="text-sm text-gray-400">{crypto.amount}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white">{crypto.value}</div>
                  <div className="text-sm text-green-400">{crypto.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <TransactionHistory />
      </main>
    </div>
  );
}

export default Dashboard;