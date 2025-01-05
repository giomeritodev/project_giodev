"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CARD_HOME } from "../constants/card.home";
import { ChartOverview } from "../components/chart";
import { Sales } from "../components/sales";

export function HomePage(){

    return (
        <>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    CARD_HOME.map((item, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center justify-center">
                                    <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                                        {item.title}
                                    </CardTitle>
                                    {item.icon}
                                </div>
                                <CardDescription>
                                    {item.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <p className="text-base sm:text-lg font-bold">{item.body}</p>
                            </CardContent>
                        </Card>
                    ))
                }
            </section>
            <section className="mt-4 flex flex-col md:flex-row gap-4">
                <ChartOverview />
                <Sales />
            </section>
        </>
    )
}