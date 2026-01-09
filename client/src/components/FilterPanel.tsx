import { Filter, ChevronDown } from "lucide-react";

interface FilterPanelProps {
  filters: { platform?: string; niche?: string; period?: string };
  onChange: (filters: { platform?: string; niche?: string; period?: string }) => void;
}

export function FilterPanel({ filters, onChange }: FilterPanelProps) {
  const selectClass = "appearance-none bg-[#1a1a1a] border border-[#333] hover:border-ttgray/50 text-sm rounded-lg px-4 py-2.5 pr-10 outline-none text-white cursor-pointer focus:border-ttcyan focus:ring-1 focus:ring-ttcyan/50 transition-all w-full";
  const containerClass = "relative";
  const iconClass = "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ttgray pointer-events-none";

  return (
    <div className="bg-ttblack rounded-2xl p-6 border border-[#222] shadow-xl">
      <div className="flex items-center gap-2 mb-4 text-ttgray">
        <Filter className="w-4 h-4" />
        <h4 className="font-semibold text-sm uppercase tracking-wider">Filters</h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={containerClass}>
          <select 
            value={filters.platform || ""}
            onChange={(e) => onChange({...filters, platform: e.target.value})} 
            className={selectClass}
          >
            <option value="">All Platforms</option>
            <option value="TikTok">TikTok</option>
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="YouTube Shorts">YouTube Shorts</option>
          </select>
          <ChevronDown className={iconClass} />
        </div>

        <div className={containerClass}>
          <select 
            value={filters.niche || ""}
            onChange={(e) => onChange({...filters, niche: e.target.value})} 
            className={selectClass}
          >
            <option value="">All Niches</option>
            <option value="food">Food & Cooking</option>
            <option value="fitness">Fitness & Health</option>
            <option value="productivity">Productivity</option>
            <option value="tech">Tech & AI</option>
            <option value="fashion">Fashion</option>
          </select>
          <ChevronDown className={iconClass} />
        </div>

        <div className={containerClass}>
          <select 
            value={filters.period || "week"}
            onChange={(e) => onChange({...filters, period: e.target.value})} 
            className={selectClass}
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="all">All Time</option>
          </select>
          <ChevronDown className={iconClass} />
        </div>
      </div>
    </div>
  );
}
