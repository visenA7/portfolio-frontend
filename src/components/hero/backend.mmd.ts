export const backendDiagram = `
flowchart TB
  Client --> Gateway[API Gateway / Reverse Proxy]
  Gateway --> NET[ASP.NET Core Web API]
  Gateway --> NODE[Node.js WebSocket & Ingest]
  
  NET -->|LINQ / EF Core| DB[(PostgreSQL DB)]
  NODE -->|Pub/Sub| Redis[Redis Queue / Streams]
  Redis --> Worker[Background Worker Pool]
  Worker --> DB
  
  NET:::dotnet
  NODE:::node
  Redis:::async
  Worker:::async

  classDef dotnet fill:#818cf8,color:#fff,stroke:#4f46e5;
  classDef node fill:#10b981,color:#fff,stroke:#047857;
  classDef async fill:#0ea5e9,color:#000,stroke:#0284c7;
`;