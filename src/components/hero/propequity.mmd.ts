export const propEquityDiagram = `
flowchart TD
    Client[Web & Mobile Clients] --> Web[PropEquityAI.Web / AI Chatbot]
    Client --> CPanel[PropEquityAI.CPanel Admin]
    Client --> API[Prop.API v1/v2 REST]

    Web --> Auth[Auth.Web & SuperTokens Microservice]
    
    Web --> MCP[MCP Governed NL-to-SQL Gateway]
    MCP --> Semantic[OpenAI + Semantic Kernel]
    MCP --> Qdrant[(Qdrant Vector DB)]
    MCP --> Elastic[(Elasticsearch)]
    MCP --> MySQL[(MySQL Core Data)]

    Web --> Mongo[(MongoDB Transcripts)]
    Web --> Redis[(Redis Single-Flight Cache)]

    Web -- Events --> Kafka{{Kafka Event Bus - 29 Topics}}
    Kafka --> Worker[PropEquityAI.Worker Pool - ~30 Consumers]
    Worker --> MySQL
    Worker --> Qdrant

    classDef service fill:#252119,color:#F4EFE5,stroke:#393229;
    classDef ai fill:#3A3023,color:#F4EFE5,stroke:#C49A5A;
    classDef storage fill:#211E19,color:#F4EFE5,stroke:#B0A797;
    classDef bus fill:#3A3023,color:#F4EFE5,stroke:#C49A5A;

    class Client,Web,CPanel,API,Worker service;
    class MCP,Semantic,Auth ai;
    class Kafka bus;
    class MySQL,Mongo,Redis,Qdrant,Elastic storage;
`;
