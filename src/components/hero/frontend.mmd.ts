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

  classDef core fill:#272A34,color:#F5F5F7,stroke:#4B5563;
  classDef network fill:#1E2B27,color:#A7F3D0,stroke:#059669;
  classDef node fill:#1F242D,color:#E2E8F0,stroke:#64748B;
`;
