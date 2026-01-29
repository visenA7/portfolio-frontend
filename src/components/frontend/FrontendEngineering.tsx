export const FrontendEngineering = () => (
    <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-6">
                Frontend Engineering
            </h2>

            <pre className="bg-black/40 p-6 rounded-xl text-sm text-gray-300">
                {`
React Engineering
- Hooks, Context, compound components
- Performance tuning (memoization, virtualization)
- Large list rendering strategies
- Controlled vs uncontrolled forms

UI Architecture
- Design systems with Tailwind
- Component boundaries & reuse
- State lifting & isolation
- Accessibility-first markup

Performance
- Code splitting & lazy loading
- Avoiding unnecessary re-renders
- Lighthouse-driven optimization
`}
            </pre>
        </div>
    </section>
);