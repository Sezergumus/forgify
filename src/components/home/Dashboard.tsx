"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Play, Pause, Power, Settings, Server, Globe } from "lucide-react";

export default function Dashboard() {
  const [servers, setServers] = useState([
    {
      id: "server-1",
      name: "Homies Strong Together",
      status: "running",
      port: 25565,
      version: "1.20.4",
      ram: 2048,
      type: "vanilla",
    },
    {
      id: "server-2",
      name: "Survival Server",
      status: "paused",
      port: 25565,
      version: "1.7.2",
      ram: 2048,
      type: "forge",
    },
    {
      id: "server-3",
      name: "Creative World",
      status: "paused",
      port: 25565,
      version: "1.12.4",
      ram: 2048,
      type: "spigot",
    },
  ]);

  const handleServerAction = (id: string, action: string) => {
    // This would be replaced with actual server control logic
    setServers(
      servers.map((server) => {
        if (server.id === id) {
          return {
            ...server,
            status: action === "start" ? "running" : "paused",
          };
        }
        return server;
      })
    );
  };

  return (
    <div className="p-4 xl:p-0 max-w-7xl mx-auto mt-8">
      <div className="flex justify-between items-center border-b border-black/25 dark:border-white/25 pb-4">
        <div>
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="text-gray-500">
            You can manage your servers from here.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Servers</h2>
          <Button asChild>
            <Link href="/create-server">
              <Server className="h-4 w-4" /> New Server
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map((server) => (
            <Card
              key={server.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50 bg-gradient-to-b from-card to-card/80 py-0"
            >
              <CardHeader className="p-4 bg-muted/30 flex justify-between border-b border-border/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold truncate">
                    {server.name}
                  </CardTitle>
                  <div
                    className={`flex items-center gap-2 px-2 py-1 rounded-full bg-card/50 border border-border/50 ${
                      server.status === "running"
                        ? "bg-green-500/25 border-green-500"
                        : "bg-red-500/25 border-red-500"
                    }`}
                  >
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        server.status === "running"
                          ? "bg-green-500 animate-pulse"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <span
                      className={`text-xs font-medium transition-all ${
                        server.status === "running"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {server.status === "running" ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4">
                <div className="flex items-center mb-4">
                  <Globe className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">
                    {server.type.charAt(0).toUpperCase() + server.type.slice(1)}{" "}
                    <span className="ml-1 text-sm font-medium bg-primary/10 px-2 py-0.5 rounded">
                      {server.version}
                    </span>
                  </span>
                </div>

                <div className="space-y-3 bg-card/50 p-4 rounded-lg border border-border/50 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Port:</span>
                    <span className="text-sm font-medium bg-primary/10 px-2 py-0.5 rounded">
                      {server.port}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">RAM:</span>
                    <span className="text-sm font-medium bg-primary/10 px-2 py-0.5 rounded">
                      {server.ram.toLocaleString()} MB
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 bg-muted/30 flex justify-between border-t border-border/50">
                {server.status === "running" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-amber-500 hover:text-amber-600 hover:border-amber-500 hover:bg-amber-500/10 cursor-pointer"
                    onClick={() => handleServerAction(server.id, "stop")}
                  >
                    <Pause className="h-4 w-4 mr-1" /> Pause
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-500 hover:text-green-600 hover:border-green-500 hover:bg-green-500/10 cursor-pointer"
                    onClick={() => handleServerAction(server.id, "start")}
                  >
                    <Play className="h-4 w-4 mr-1" /> Start
                  </Button>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                    title="Server Settings"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                    title="Force Stop Server"
                  >
                    <Power className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
