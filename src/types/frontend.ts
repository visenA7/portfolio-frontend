export type Metric = {
    label: string;
    value: string;
};

export type FrontendTopic = {
    id: string;
    title: string;
    summary: string;
    metrics: Metric[];
};

type Section = {
    title: string;
    content: string[];
};

export type FrontendCaseStudyProps = {
    title: string;
    subtitle: string;
    metrics: Metric[];
    sections: Section[];
};