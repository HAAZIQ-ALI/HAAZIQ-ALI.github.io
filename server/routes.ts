import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up static file serving for the frontend
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(import.meta.dirname, "../public")));
  }

  // Simple health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
