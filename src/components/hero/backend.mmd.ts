export const backendDiagram = `
flowchart TB
  Client --> API[API Gateway]
  API --> Queue[Redis Queue]
  Queue --> Worker[Worker Pool]
  Worker --> DB[(PostgreSQL)]
  Worker --> Notify[Push / Events]

  Queue:::async
  Worker:::async

  classDef async fill:#0ea5e9,color:#000;
`;