const LabelsElement = (props: any) => {
    const { className, text } = props;
  return (
    <p className={className}>
      {text}
    </p>
  );
};

export default LabelsElement;
