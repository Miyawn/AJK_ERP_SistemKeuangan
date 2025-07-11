import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Bell } from 'lucide-react';

function Header() {
    return (
        <header className="w-full bg-white p-6 border-b">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Tracking</h2>
                    <p className="text-sm text-gray-500 mt-1">76 deliveries</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button>
                        <Plus className="h-5 w-5 mr-2" />
                        Add new track
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
