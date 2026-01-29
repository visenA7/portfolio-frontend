import { useParams } from "react-router-dom";

export const SystemDetail = () => {
    const { id } = useParams();

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold text-white">
                System: {id}
            </h1>

            <p className="mt-4 text-gray-400">
                Architecture, constraints, failures, and scaling strategies
                will live here.
            </p>
        </div>
    );
};