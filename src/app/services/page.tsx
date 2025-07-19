import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">Our Services</h1>
      <p className="text-lg text-muted-foreground mb-10 text-center">
        At <span className="font-semibold text-primary">Win Electrical & Solar Services</span>, we provide reliable, affordable, and energy-efficient solutions for both residential and commercial clients. Our certified team ensures safe and professional installations, repairs, and upgrades using the latest industry standards.
      </p>

      <Card className="mb-8">
        <CardContent className="py-6">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🔌 Electrical Services</h2>
          <p className="mb-4">
            From small repairs to full-scale electrical system upgrades, our team handles it all with precision and care:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Home and Office Wiring & Rewiring</li>
            <li>Electrical Panel Installation & Upgrades</li>
            <li>Lighting Design & Installation (Indoor & Outdoor)</li>
            <li>Generator Setup & Backup Power Systems</li>
            <li>Smart Home Electrical Integration</li>
            <li>Troubleshooting & Fault Repair</li>
            <li>Appliance Installations (e.g., water heaters, air conditioners)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="py-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">☀️ Solar Services</h2>
          <p className="mb-4">
            Harness the power of the sun with our cutting-edge solar solutions designed to reduce energy bills and protect the planet:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Residential & Commercial Solar Panel Installation</li>
            <li>Off-grid & On-grid Solar System Design</li>
            <li>Battery Backup Systems & Inverter Setup</li>
            <li>Solar Panel Maintenance & Troubleshooting</li>
            <li>Energy Efficiency Consultation</li>
            <li>Net Metering Setup & Assistance</li>
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-10" />

      <p className="text-center text-muted-foreground">
        Need something custom? <span className="text-primary font-medium">Contact us</span> and we'll tailor the solution just for you.
      </p>
    </div>
  );
}
