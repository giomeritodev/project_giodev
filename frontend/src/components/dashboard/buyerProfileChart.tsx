import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

interface BuyerProps {
    cx: string
    cy: string
    midAngle: string
    innerRadius: number
    outerRadius: number
    percent: number
    index: number
}

const data = [
    {name: "Giomerito", value: 32},
    {name: "teste2", value: 15},
    {name: "Teste3", value: 56},
    {name: "Teste3", value: 25},
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: BuyerProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="red" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function BuyerProfileChart(){
    return(
        <div className="w-[20rem] h-[22rem] p-4 rounded-sm border border-gray-400 flex flex-col">
            <strong className="text-gray-200 font-medium">Bayer profile</strong>
            <div className="w-full mt-3 flex-1 text-sm">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}                        
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                           
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}