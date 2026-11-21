export const frontendDiagram = `
flowchart TB
  UI[UI Components]
  VIRT[Virtualized List]
  STATE[Optimistic State / Zustand]
  WS[WebSocket Service]
  REST[REST Client]
  PERF[Batching & Web Workers]

  UI --> VIRT --> STATE
  STATE --> WS
  STATE --> REST
  WS --> STATE
  REST --> STATE
  STATE --> PERF

  UI:::node
  VIRT:::node
  STATE:::core
  WS:::network
  REST:::network
  PERF:::node

  classDef core fill:#252119,color:#F4EFE5,stroke:#C49A5A;
  classDef network fill:#3A3023,color:#F4EFE5,stroke:#B0A797;
  classDef node fill:#211E19,color:#F4EFE5,stroke:#393229;
`;
