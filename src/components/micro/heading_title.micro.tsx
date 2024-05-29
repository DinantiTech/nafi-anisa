export default function HeadingTitle({ title }: { title: string }) {
    return (
        <h2 className='-mt-1 tracking-wide font-semibold text-lg xxs:text-2xl sm:text-3xl xxs:font-semibold'>{title}</h2>
    );
}