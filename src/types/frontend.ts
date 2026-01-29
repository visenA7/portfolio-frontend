type Metric = {
    label: string;
    value: string;
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