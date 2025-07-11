import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Truck } from 'lucide-react';

function UserDashboard() {
    const trackingData = [
        { status: "On route", id: "UL-158902NH", from: "Madrid", to: "Malaga", distance: "539 km", time: "5 h 27 min" },
        { status: "On route", id: "KO-158454PO", from: "Warszawa", to: "Krakow", distance: "290 km", time: "3 h 35 min" },
    ];

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Button variant="secondary">All <span className="ml-2 bg-white text-indigo-600 px-2 py-0.5 rounded-md text-xs">76</span></Button>
                    <Button variant="ghost">On route <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-md text-xs">34</span></Button>
                    <Button variant="ghost">Waiting <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-md text-xs">28</span></Button>
                    <Button variant="ghost">Inactive <span className="ml-2 bg-gray-200 px-2 py-0.5 rounded-md text-xs">14</span></Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {trackingData.map((item, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-xs font-normal text-green-600 bg-green-100 px-2 py-1 rounded-full mb-2 self-start">{item.status}</span>
                                    <span className="text-base font-semibold">{item.id}</span>
                                    <span className="text-sm text-gray-500">{item.distance}</span>
                                    <span className="text-sm text-gray-500 mt-1">Estimated time: <span className="font-medium text-gray-700">{item.time}</span></span>
                                </div>
                                <Truck className="text-gray-300" size={60}/>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Separator className="my-2"/>
                             <div className="flex justify-between items-center text-sm">
                                <p className="font-medium">{item.from} - {item.to}</p>
                                <p className="text-gray-500">1 h 35 min left</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
                <Card className="border-dashed flex items-center justify-center min-h-[220px]">
                    <div className="text-center text-gray-500">
                        <p>More cards here...</p>
                    </div>
                </Card>
            </div>
        </>
    );
}

export default UserDashboard;
