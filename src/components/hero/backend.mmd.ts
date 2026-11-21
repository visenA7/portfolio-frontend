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

  classDef service fill:#272A34,color:#F5F5F7,stroke:#4B5563;
  classDef cache fill:#37302A,color:#FDE68A,stroke:#D97706;
  classDef worker fill:#1E2B27,color:#A7F3D0,stroke:#059669;
  classDef database fill:#1F242D,color:#E2E8F0,stroke:#64748B;
`;
