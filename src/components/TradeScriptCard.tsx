import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Plus, ArrowRight } from 'lucide-react';

interface TradeScriptCardProps {
  title: string;
  balance: number;
  performance: {
    value: number;
    percentage: number;
    isPositive: boolean;
  };
  data: Array<{ name: string; value: number }>;
}

const TradeScriptCard: React.FC<TradeScriptCardProps> = ({
  title,
  balance,
  performance,
  data
}) => {
  return (
    <div className="bg-gray-900/90 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="flex items-center text-sm">
          {performance.isPositive ? (
            <ArrowUpRight className="h-4 w-4 text-green-400 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-400 mr-1" />
          )}
          <span className={performance.isPositive ? 'text-green-400' : 'text-red-400'}>
            ${performance.value} ({performance.percentage}%)
          </span>
        </div>
      </div>
      
      <div className="text-2xl font-bold text-white mb-4">
        ${balance.toFixed(2)} USD
      </div>

      <div className="h-24 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00FFFF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 group">
          <Plus className="h-4 w-4 mr-2 transform group-hover:rotate-180 transition-transform duration-300" />
          Add Funds
        </button>
        <button className="flex items-center justify-center px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
          <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default TradeScriptCard;