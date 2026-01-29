export const frontendDiagram = `
flowchart TB
  UI[UI Components]
  VIRT[Virtualized List]
  STATE[Optimistic State]
  WS[WebSocket]
  REST[REST API]
  PERF[Memo + Batching]

  UI --> VIRT --> STATE
  STATE --> WS
  STATE --> REST
  WS --> STATE
  REST --> STATE
  STATE --> PERF
`;