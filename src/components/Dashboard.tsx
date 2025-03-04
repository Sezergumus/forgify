"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./theme-switch";
import { File, Play, StopCircle } from "lucide-react"; // Lucide React ikonları

export default function Dashboard() {
  const [jarFile, setJarFile] = useState<File | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [serverRunning, setServerRunning] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setJarFile(file);
    }
  };

  const startServer = () => {
    if (!jarFile) {
      alert("Please upload a JAR file!");
      return;
    }
    setServerRunning(true);
    setLogs((prevLogs) => [...prevLogs, "[INFO] Starting the server..."]);
    setTimeout(() => {
      setLogs((prevLogs) => [
        ...prevLogs,
        "[INFO] Server is running! IP: 192.168.1.1:25565",
      ]);
    }, 20);
  };

  const stopServer = () => {
    setServerRunning(false);
    setLogs((prevLogs) => [...prevLogs, "[INFO] Server stopped."]);
  };

  return (
    <div className="min-h-screen bg-background text-primary dark:bg-background-dark dark:text-primary-dark">
      <div className="container mx-auto p-6">
        {/* Theme Switch */}
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>

        {/* File Upload and Start Server */}
        <div className="flex items-center space-x-4 mb-6">
          <label
            htmlFor="jarFile"
            className="flex w-1/2 items-center cursor-pointer p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            <File className="mr-2" />
            <span className="text-sm">
              {
                jarFile
                  ? jarFile.name // Dosya yüklendiğinde
                  : "Upload a JAR File" // Dosya yüklenmediğinde
              }
            </span>
            <Input
              id="jarFile"
              type="file"
              className="hidden"
              accept=".jar"
              onChange={handleFileChange}
            />
          </label>
          <Button
            onClick={startServer}
            className="h-10 px-4 py-2 w-1/2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            disabled={serverRunning || !jarFile}
          >
            <Play className="mr-2" />
            Start Server
          </Button>
        </div>

        {/* Logs Section */}
        <div
          className="bg-gray-800 text-white p-4 rounded-lg mb-6 h-48 overflow-y-auto"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {logs.map((log, index) => (
            <div key={index} className="text-xs">
              {log}
            </div>
          ))}
        </div>

        {/* Stop Server Button */}
        <Button
          onClick={stopServer}
          className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          disabled={!serverRunning}
        >
          <StopCircle className="mr-2" />
          Stop Server
        </Button>
      </div>
    </div>
  );
}
