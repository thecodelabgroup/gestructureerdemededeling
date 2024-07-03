import {ElementType} from "react";

export const generateStatementSegment = (count: number, Element: ElementType, props = {}) => (
    Array.from({ length: count }).map((_, index) => <Element key={index} {...props} />)
);