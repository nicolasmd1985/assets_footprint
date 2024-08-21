import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AssetFootprintCalculator = () => {
  const [waterUsage, setWaterUsage] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/calculate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ water_usage: waterUsage, energy_usage: energyUsage }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Asset Footprint Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="waterUsage" className="block text-sm font-medium text-gray-700">
                Water Usage (gallons)
              </label>
              <Input
                type="number"
                id="waterUsage"
                value={waterUsage}
                onChange={(e) => setWaterUsage(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="energyUsage" className="block text-sm font-medium text-gray-700">
                Energy Usage (kWh)
              </label>
              <Input
                type="number"
                id="energyUsage"
                value={energyUsage}
                onChange={(e) => setEnergyUsage(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Calculate</Button>
          </form>
          {result && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Results:</h3>
              <p>Water Cost: ${result.water_cost}</p>
              <p>Energy Cost: ${result.energy_cost}</p>
              <p>Total Cost: ${result.total_cost}</p>
              <p>Potential Savings: ${result.potential_savings}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetFootprintCalculator;