import React from 'react';
import { ArrowLeft, PlusSquare, ChevronDown } from 'lucide-react';

function Header() {
  return (
    <header className="bg-base-100 p-6 shadow-sm">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button className="btn btn-ghost btn-square">
                    <ArrowLeft />
                </button>
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        Time period: Last 12 days <ChevronDown size={16} />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Last 7 days</a></li>
                        <li><a>Last 30 days</a></li>
                        <li><a>Last 90 days</a></li>
                    </ul>
                </div>
                <button className="btn btn-outline btn-primary">
                    <PlusSquare size={18} />
                    Add data
                </button>
            </div>
        </div>
    </header>
  );
}

export default Header;
