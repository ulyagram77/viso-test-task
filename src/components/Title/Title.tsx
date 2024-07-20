import { ITitleProps } from 'src/core/interfaces';

const Title = ({ text, level, style }: ITitleProps) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;
    return <Heading style={style}>{text}</Heading>;
};

export default Title;
