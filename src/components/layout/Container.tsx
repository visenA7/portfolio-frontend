type Props = {
    children: React.ReactNode;
};

export const Container = ({ children }: Props) => (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
);