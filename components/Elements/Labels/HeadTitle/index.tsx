
const HeadTitleElement = (props: any) => {
    const { className, text } = props;

    return (
        <div className={`font-semibold text-black ${className}`}>{text}</div>
    );
}

export default HeadTitleElement;