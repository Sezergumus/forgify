"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Server, Globe, HardDrive, Tag } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface ServerFormData {
  name: string;
  version: string;
  ram: number;
  port: string;
  type: string;
}

export default function CreateServerForm() {
  const [formData, setFormData] = useState<ServerFormData>({
    name: "",
    version: "1.20.4",
    ram: 8192,
    port: "25565",
    type: "vanilla",
  });

  // Maximum RAM allocation in MB (dynamically set based on system RAM)
  // System has approximately 32GB RAM based on the check
  const maxRamAllocation = 32000; // Slightly less than total system RAM for safety

  // List of Minecraft versions for the dropdown
  const minecraftVersions = [
    "1.21.4",
    "1.21.3",
    "1.21.2",
    "1.21.1",
    "1.21",
    "1.20.6",
    "1.20.5",
    "1.20.4",
    "1.20.3",
    "1.20.2",
    "1.20.1",
    "1.20",
    "1.19.4",
    "1.19.3",
    "1.19.2",
    "1.19.1",
    "1.19",
    "1.18.2",
    "1.18.1",
    "1.18",
    "1.17.1",
    "1.17",
    "1.16.5",
    "1.16.4",
    "1.16.3",
    "1.16.2",
    "1.16.1",
    "1.16",
    "1.15.2",
    "1.15.1",
    "1.15",
    "1.14.4",
    "1.14.3",
    "1.14.2",
    "1.14.1",
    "1.14",
    "1.13.2",
    "1.13.1",
    "1.13",
    "1.12.2",
    "1.12.1",
    "1.12",
    "1.11.2",
    "1.11.1",
    "1.11",
    "1.10.2",
    "1.10.1",
    "1.10",
    "1.9.4",
    "1.9.3",
    "1.9.2",
    "1.9.1",
    "1.9",
    "1.8.9",
    "1.8.8",
    "1.8.7",
    "1.8.6",
    "1.8.5",
    "1.8.4",
    "1.8.3",
    "1.8.2",
    "1.8.1",
    "1.8",
    "1.7.10",
    "1.7.9",
    "1.7.8",
    "1.7.7",
    "1.7.6",
    "1.7.5",
    "1.7.4",
    "1.7.3",
    "1.7.2",
    "1.6.4",
    "1.6.2",
    "1.6.1",
    "1.5.2",
    "1.5.1",
    "1.4.7",
    "1.4.5",
    "1.4.6",
    "1.4.4",
    "1.4.2",
    "1.3.2",
    "1.3.1",
    "1.2.5",
    "1.2.4",
    "1.2.3",
    "1.2.2",
    "1.2.1",
    "1.1",
    "1.0",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVersionChange = (value: string) => {
    setFormData({ ...formData, version: value });
  };

  const handleRamChange = (value: number[]) => {
    setFormData({ ...formData, ram: value[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Server creation data:", formData);
    // Here you would typically send this data to your backend
    // For now, we'll just log it
    alert("Server creation initiated! Check console for details.");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader className="">
          <div className="flex items-center gap-3">
            <Server className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Create New Server</CardTitle>
          </div>
          <CardDescription>
            Configure your new Minecraft server with the settings below.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {/* Server Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Server Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="My Awesome Server"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Server Type Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Server Type
              </label>
              <div className="grid grid-cols-4 gap-3">
                {/* Vanilla - Selectable */}
                <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-primary bg-primary/10 cursor-pointer">
                  <Globe className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Vanilla
                  </span>
                </div>

                {/* Forge - Coming Soon */}
                <div className="relative flex flex-col items-center justify-center p-3 rounded-lg border border-border/50 opacity-70">
                  <div className="absolute inset-0 flex items-center justify-center bg-card/60 rounded-lg">
                    <span className="text-xs font-semibold px-2 py-1 bg-muted/80 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <HardDrive className="h-6 w-6 mb-2 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Forge
                  </span>
                </div>

                {/* Spigot - Coming Soon */}
                <div className="relative flex flex-col items-center justify-center p-3 rounded-lg border border-border/50 opacity-70">
                  <div className="absolute inset-0 flex items-center justify-center bg-card/60 rounded-lg">
                    <span className="text-xs font-semibold px-2 py-1 bg-muted/80 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <Server className="h-6 w-6 mb-2 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Spigot
                  </span>
                </div>

                {/* Paper - Coming Soon */}
                <div className="relative flex flex-col items-center justify-center p-3 rounded-lg border border-border/50 opacity-70">
                  <div className="absolute inset-0 flex items-center justify-center bg-card/60 rounded-lg">
                    <span className="text-xs font-semibold px-2 py-1 bg-muted/80 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <Tag className="h-6 w-6 mb-2 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Paper
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Minecraft Version */}
              <div className="space-y-2">
                <label
                  htmlFor="version"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Minecraft Version
                </label>
                <Select
                  value={formData.version}
                  onValueChange={handleVersionChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select version" />
                  </SelectTrigger>
                  <SelectContent>
                    {minecraftVersions.map((version) => (
                      <SelectItem key={version} value={version}>
                        {version}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Port */}
              <div className="space-y-2">
                <label
                  htmlFor="port"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Server Port
                </label>
                <Input
                  id="port"
                  name="port"
                  type="number"
                  placeholder="25565"
                  value={formData.port}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* RAM Allocation - Moved to its own section for better visibility */}
            <div className="space-y-2 bg-muted/20 p-4 rounded-lg border border-border/50">
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="ram"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  RAM Allocation
                </label>
                <span className="text-sm font-medium bg-primary/10 px-2 py-0.5 rounded">
                  {formData.ram.toLocaleString()} MB
                </span>
              </div>
              <div className="pt-4 pb-2">
                <Slider
                  id="ram"
                  name="ram"
                  min={512}
                  max={maxRamAllocation}
                  step={512}
                  value={[formData.ram]}
                  onValueChange={handleRamChange}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Min: 512 MB</span>
                <span>Max: {maxRamAllocation.toLocaleString()} MB</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between border-t border-border/50 p-6 pb-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button type="submit">
              <Server className="h-4 w-4 mr-2" /> Create Server
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
