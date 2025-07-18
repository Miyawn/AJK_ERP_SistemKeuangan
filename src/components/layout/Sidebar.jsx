import React from 'react';
import { Home, ShoppingCart, BarChart2, Users, Tag, BookOpen, DollarSign, Settings, LogOut, Moon, Sun } from 'lucide-react';

// Data untuk menu agar mudah dikelola
const menuItems = {
  MARKETING: [
    { icon: <Home size={18} />, text: 'Dashboard', active: true },
    { icon: <ShoppingCart size={18} />, text: 'Marketplace' },
    { icon: <BarChart2 size={18} />, text: 'Orders' },
    { icon: <Users size={18} />, text: 'Customers' },
    { icon: <Tag size={18} />, text: 'Discounts' },
  ],
  PAYMENTS: [
    { icon: <BookOpen size={18} />, text: 'Ledger' },
    { icon: <DollarSign size={18} />, text: 'Taxes' },
  ],
};

function Sidebar() {
  return (
    <aside className="w-64 bg-base-100 text-base-content flex flex-col h-full">
      <div className="p-4 flex items-center gap-2">
        <div className="bg-primary text-primary-content rounded-lg p-2">
            <BarChart2 />
        </div>
        <a className="btn btn-ghost text-xl font-bold">Flup</a>
      </div>

      <ul className="menu p-4 w-full flex-1">
        {Object.keys(menuItems).map((section) => (
          <React.Fragment key={section}>
            <li className="menu-title">
              <span>{section}</span>
            </li>
            {menuItems[section].map((item) => (
              <li key={item.text}>
                <a className={item.active ? 'active' : ''}>
                  {item.icon}
                  {item.text}
                </a>
              </li>
            ))}
          </React.Fragment>
        ))}
         <li className="menu-title">
            <span>SYSTEM</span>
        </li>
        <li>
            <a><Settings size={18} /> Settings</a>
        </li>
      </ul>

      <div className="p-4 space-y-4 border-t border-base-300">
        <label className="flex cursor-pointer gap-2">
            <Moon />
            <input type="checkbox" value="dark" className="toggle theme-controller"/>
            <Sun />
        </label>
        <div className="flex items-center gap-4">
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
                </div>
            </div>
            <div>
                <p className="font-bold text-sm">Harper Nelson</p>
                <p className="text-xs text-base-content/70">Admin Manager</p>
            </div>
        </div>
        <button className="btn btn-ghost w-full justify-start">
            <LogOut size={18} /> Log out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
