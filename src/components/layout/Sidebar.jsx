import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
    LayoutDashboard, 
    ShoppingBag, 
    Tag, 
    Users, 
    FileText, 
    Settings, 
    LogOut, 
    ChevronLeft, 
    Moon
} from 'lucide-react';

const sidebarItems = {
    marketing: [
        { icon: <LayoutDashboard size={20} />, text: 'Dashboard' },
        { icon: <ShoppingBag size={20} />, text: 'Marketplace' },
        { icon: <Tag size={20} />, text: 'Tracking', active: true },
        { icon: <Users size={20} />, text: 'Customers' },
        { icon: <FileText size={20} />, text: 'Discounts' },
    ],
    payments: [
        { icon: <FileText size={20} />, text: 'Ledger' },
        { icon: <FileText size={20} />, text: 'Taxes' },
    ],
};

function Sidebar() {
    return (
        <aside className="h-screen w-64 flex-shrink-0 flex-col bg-white border-r hidden md:flex">
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600">Flup</h1>
                <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-5 w-5" />
                </Button>
            </div>
            <Separator />
            <nav className="flex-1 px-4 py-4 space-y-6">
                {Object.keys(sidebarItems).map(section => (
                    <div key={section}>
                        <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-gray-400 tracking-wider">{section}</h3>
                        <ul className="space-y-1">
                            {sidebarItems[section].map(item => (
                                <li key={item.text}>
                                    <Button 
                                        variant={item.active ? "secondary" : "ghost"} 
                                        className="w-full justify-start text-sm font-normal"
                                    >
                                        {item.icon}
                                        <span className="ml-3">{item.text}</span>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                 <div>
                    <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-gray-400 tracking-wider">System</h3>
                    <ul className="space-y-1">
                        <li>
                            <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                                <Settings size={20} />
                                <span className="ml-3">Settings</span>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
            <Separator />
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                        <Moon size={20} />
                        <span className="ml-3">Dark mode</span>
                    </div>
                    <Switch id="dark-mode" />
                </div>
                <Card className="shadow-none">
                    <CardContent className="p-3 flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                            <AvatarFallback>HN</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-semibold">Harper Nelson</p>
                            <p className="text-xs text-gray-500">Admin Manager</p>
                        </div>
                    </CardContent>
                </Card>
                <Button variant="ghost" className="w-full justify-start text-sm font-normal">
                    <LogOut size={20} />
                    <span className="ml-3">Log out</span>
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
