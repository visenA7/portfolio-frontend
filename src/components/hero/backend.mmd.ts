export const backendDiagram = `
flowchart TB
  Client[Client Layer] --> Gateway[API Gateway / Reverse Proxy]
  Gateway --> NET[ASP.NET Core Web API]
  Gateway --> NODE[Node.js WebSocket & Ingest]
  
  NET -->|LINQ / EF Core| DB[(PostgreSQL DB)]
  NODE -->|Pub/Sub| Redis[Redis Queue / Streams]
  Redis --> Worker[Background Worker Pool]
  Worker --> DB
  
  NET:::service
  NODE:::service
  Redis:::cache
  Worker:::worker
  DB:::database

  classDef service fill:#252119,color:#F4EFE5,stroke:#393229;
  classDef cache fill:#3A3023,color:#F4EFE5,stroke:#C49A5A;
  classDef worker fill:#211E19,color:#F4EFE5,stroke:#B0A797;
  classDef database fill:#252119,color:#F4EFE5,stroke:#C49A5A;
`;
